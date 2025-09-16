import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import {
  createNft,
  fetchDigitalAsset,
  findMetadataPda,
  mplTokenMetadata,
  verifyCollectionV1,
} from "@metaplex-foundation/mpl-token-metadata";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

import { Connection, clusterApiUrl } from "@solana/web3.js";
import {
  generateSigner,
  keypairIdentity,
  percentAmount,
  publicKey,
} from "@metaplex-foundation/umi";

const app = express();
const connection = new Connection(clusterApiUrl("devnet"));

const privateKey = process.env.PRIVATE_KEY;
if(!privateKey) {
    console.error("Private key not found in .env");
    return;
}

import pinata from './utils/pinata';

const umi = createUmi(connection.rpcEndpoint);
const user = umi.eddsa.createKeypairFromSecretKey(privateKey);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/mintNFT', async (req, res) => {
    try {
        console.log("Starting NFT minting process...");

        // Get the image CID from the user, wallet address, and name of the NFT
        const { name, walletAddress, image } = req.body;
        
        if (!name || !walletAddress || !image) {
            return res.status(400).json({ 
                error: "Missing required fields: name, walletAddress, and image are required" 
            });
        }

        console.log(`Minting NFT: ${name} for wallet: ${walletAddress}`);
        
        umi.use(mplTokenMetadata());
        umi.use(keypairIdentity(user));

        console.log("Set up Umi instance for user");

        const collectionAddress = publicKey(
            "A7Yq1zvrK5sEnRmVwDTXjTgFMHftvgsZyf3f2aXU26W5"
        );

        let metadataURL;
        try{
            const metadata = {
                "name": name,
                "description": "My Face Punk NFT",
                "image": image
            };

            console.log("Uploading metadata to IPFS...");
            const metadataURI = await pinata.upload.public.json(metadata);
            metadataURL = `https://orange-given-mink-808.mypinata.cloud/ipfs/${metadataURI.cid}`;

        } catch(err) {
            console.err("Error while uploading json to pinata");
        }

        console.log(`Creating NFT...`);

        const mint = generateSigner(umi);

        const transaction = await createNft(umi, {
            mint,
            name: name,
            uri: metadataURL,
            sellerFeeBasisPoints: percentAmount(0),
            tokenOwner: publicKey(walletAddress),
            collection: {
                key: collectionAddress,
                verified: false,
            },
        });

        console.log("Sending transaction to blockchain...");
        const result = await transaction.sendAndConfirm(umi, {send: {commitment: "finalized"}});
        
        console.log("Fetching created NFT details...");
        const createdNft = await fetchDigitalAsset(umi, mint.publicKey);

        console.log("✅ NFT minted successfully!");

        res.status(200).json({
            success: true,
            message: "NFT minted successfully",
            data: {
                mintAddress: mint.publicKey.toString(),
                nftAddress: createdNft.mint.publicKey.toString(),
                name: name,
                image: image,
                walletAddress: walletAddress
            }
        });

    } catch (error) {
        console.error("Error minting NFT:", error.message);
        res.status(500).json({
            success: false,
            error: "Failed to mint NFT. Please try again."
        });
    }
});

app.post('/verifyNFT', async (req, res) => {
    try {
        console.log("Starting NFT collection verification process...");

        // Get the NFT mint address from the request body
        const { nftAddress } = req.body;
        
        if (!nftAddress) {
            return res.status(400).json({ 
                error: "Missing required field: nftAddress is required" 
            });
        }

        console.log(`Verifying NFT: ${nftAddress}`);
        
        umi.use(mplTokenMetadata());
        umi.use(keypairIdentity(user));

        console.log("Set up Umi instance for user");

        const collectionAddress = publicKey(
            "A7Yq1zvrK5sEnRmVwDTXjTgFMHftvgsZyf3f2aXU26W5"
        );

        const nftPublicKey = publicKey(nftAddress);

        console.log("Creating verification transaction...");
        const transaction = await verifyCollectionV1(umi, {
            metadata: findMetadataPda(umi, { mint: nftPublicKey }),
            collectionMint: collectionAddress,
            authority: umi.identity,
        });

        console.log("Sending verification transaction to blockchain...");
        const result = await transaction.sendAndConfirm(umi, {send: {commitment: "finalized"}});

        console.log("✅ NFT collection verified successfully!");

        res.status(200).json({
            success: true,
            message: "NFT verified as member of collection successfully",
            data: {
                nftAddress: nftAddress,
                collectionAddress: collectionAddress.toString(),
                transactionSignature: result.signature
            }
        });

    } catch (error) {
        console.error("Error verifying NFT collection:", error.message);
        res.status(500).json({
            success: false,
            error: "Failed to verify NFT collection. Please try again."
        });
    }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

