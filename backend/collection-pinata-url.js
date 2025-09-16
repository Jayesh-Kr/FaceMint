import pinata from "./utils/pinata.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function uploadCollectionToIPFS() {
    try {
        // Check if collection.jpg exists
        const imagePath = path.join(__dirname, "collection.jpg");
        if (!fs.existsSync(imagePath)) {
            throw new Error(`Collection image not found at: ${imagePath}`);
        }

        console.log("Reading collection.jpg file...");
        const file = new File([fs.readFileSync(imagePath)], "collection.jpg", {
            type: "image/jpeg"
        });

        console.log("Uploading image to IPFS...");
        const uploadPhoto = await pinata.upload.public.file(file);
        
        if (!uploadPhoto.cid) {
            throw new Error("Failed to get IPFS hash for uploaded image");
        }

        const imageURL = `https://orange-given-mink-808.mypinata.cloud/ipfs/${uploadPhoto.cid}`;
        console.log("Image uploaded successfully:");
        console.log(imageURL);

        // Create metadata object
        const metadata = {
            "name": "Face Punk",
            "description": "Your digital identity on blockchain",
            "image": imageURL
        };

        console.log("Uploading metadata to IPFS...");
        const metadataURL = await pinata.upload.public.json(metadata);
        
        if (!metadataURL.cid) {
            throw new Error("Failed to get IPFS hash for uploaded metadata");
        }

        const metadataIPFSURL = `https://orange-given-mink-808.mypinata.cloud/ipfs/${metadataURL.cid}`;
        
        console.log("Metadata uploaded successfully:");
        console.log(metadataIPFSURL);
        
        return {
            imageURL,
            metadataURL: metadataIPFSURL,
            imageHash: uploadPhoto.cid,
            metadataHash: metadataURL.cid
        };

    } catch (error) {
        console.error("Error occurred during IPFS upload:");
        
        if (error.code === 'ENOENT') {
            console.error("File not found. Make sure collection.jpg exists in the backend directory.");
        } else if (error.message.includes('PINATA')) {
            console.error("Pinata API error. Check your API keys and network connection.");
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            console.error("Network error. Check your internet connection.");
        } else {
            console.error("Unexpected error:", error.message);
        }
        
        console.error("Full error details:", error);
        process.exit(1);
    }
}

uploadCollectionToIPFS();