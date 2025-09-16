import dotenv from 'dotenv';
import {
  createNft,
  fetchDigitalAsset,
  mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

import { Connection, clusterApiUrl} from "@solana/web3.js";
import {
  generateSigner,
  keypairIdentity,
  percentAmount,
} from "@metaplex-foundation/umi";

dotenv.config();

async function createCollectionNFT() {
    try {
        console.log("Starting collection NFT creation...");

        // Validate environment variables
        const privateKeyString = process.env.PRIVATE_KEY;
        if (!privateKeyString) {
            throw new Error("PRIVATE_KEY not found in .env file. Please add your private key.");
        }

        console.log("Connecting to Solana devnet...");
        const connection = new Connection(clusterApiUrl("devnet"));
        
        try {
            const version = await connection.getVersion();
            console.log("Connected to Solana RPC:", version);
        } catch (connectionError) {
            throw new Error(`Failed to connect to Solana RPC: ${connectionError.message}`);
        }

        console.log("Setting up Umi instance...");
        const umi = createUmi(connection.rpcEndpoint);
        
        // Create user keypair
        let user;
        try {
            // Parse the private key from byte array format
            let privateKey;
            if (privateKeyString.startsWith('[') && privateKeyString.endsWith(']')) {
                // Handle byte array format [1,2,3,...]
                const keyArray = JSON.parse(privateKeyString);
                privateKey = new Uint8Array(keyArray);
            } else {
                // Handle comma-separated format 1,2,3,...
                const keyArray = privateKeyString.split(',').map(num => parseInt(num.trim()));
                privateKey = new Uint8Array(keyArray);
            }
            
            user = umi.eddsa.createKeypairFromSecretKey(privateKey);
            console.log("Loaded user public key:", user.publicKey.toString());
        } catch (keyError) {
            throw new Error(`Invalid private key format: ${keyError.message}`);
        }

        // Setup Umi with metadata and identity
        umi.use(mplTokenMetadata());
        const umiUser = umi.eddsa.createKeypairFromSecretKey(user.secretKey);
        umi.use(keypairIdentity(umiUser));

        console.log("Umi instance configured successfully");

        // Generate collection mint
        const collectionMint = generateSigner(umi);
        console.log("Generated collection mint:", collectionMint.publicKey.toString());

        // URI for collection metadata (update this with your actual IPFS URL)
        const uri = "https://orange-given-mink-808.mypinata.cloud/ipfs/bafkreibtsmekjajpkyf3imfidtf6noazsvyhcmbubgp42ptea5f4j5l3tq";
        console.log("Using metadata URI:", uri);

        console.log("Creating NFT collection...");
        const transaction = await createNft(umi, {
            mint: collectionMint,
            name: "Face Punk",
            symbol: "FP",
            uri: uri,
            sellerFeeBasisPoints: percentAmount(0),
            isCollection: true,
        });

        console.log("Sending transaction to blockchain...");
        const result = await transaction.sendAndConfirm(umi);
        console.log("Transaction confirmed:", result.signature.toString());

        console.log("Waiting for network confirmation...");
        // Wait a bit for the account to be available on the network
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log("Fetching created collection NFT details...");
        const createdCollectionNft = await fetchDigitalAsset(
            umi,
            collectionMint.publicKey
        );

        console.log("✅ Collection NFT created successfully!");
        console.log("Collection Mint Address:", collectionMint.publicKey.toString());
        console.log("Created Collection NFT Address:", createdCollectionNft.mint.publicKey.toString());
        
        return {
            collectionMint: collectionMint.publicKey.toString(),
            createdNft: createdCollectionNft.mint.publicKey.toString(),
            transactionSignature: result.signature.toString()
        };

    } catch (error) {
        console.error("❌ Error creating collection NFT:");
        
        if (error.message.includes('PRIVATE_KEY')) {
            console.error("Environment variable error:", error.message);
        } else if (error.message.includes('RPC') || error.message.includes('connection')) {
            console.error("Network/RPC error:", error.message);
            console.error("Please check your internet connection and try again.");
        } else if (error.message.includes('private key') || error.message.includes('keypair')) {
            console.error("Private key error:", error.message);
            console.error("Please check your private key format in the .env file.");
        } else if (error.message.includes('insufficient funds')) {
            console.error("Insufficient SOL balance. Please fund your wallet with devnet SOL.");
        } else if (error.message.includes('transaction')) {
            console.error("Transaction failed:", error.message);
            console.error("This might be due to network congestion or insufficient funds.");
        } else {
            console.error("Unexpected error:", error.message);
        }
        
        console.error("Full error details:", error);
        process.exit(1);
    }
}

createCollectionNFT();