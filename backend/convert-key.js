import bs58 from 'bs58';

// Your base58 private key
const base58PrivateKey = "Private key in bs58";

// Convert to byte array
const byteArray = bs58.decode(base58PrivateKey);

// Convert to comma-separated string for .env file
const privateKeyArray = Array.from(byteArray).join(',');

console.log("Base58 Key:", base58PrivateKey);
console.log("Byte Array:", byteArray);
console.log("For .env file:", privateKeyArray);
console.log("Length:", byteArray.length, "bytes");