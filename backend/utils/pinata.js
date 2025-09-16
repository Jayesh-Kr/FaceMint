import {PinataSDK} from 'pinata';
import dotenv from 'dotenv';

dotenv.config();

const PINATA_JWT = process.env.PINATA_JWT;
const pinataGateway = process.env.PINATA_GATEWAY;

if(!PINATA_JWT || !pinataGateway) {
    console.error("Error from pinata. Missing .env data");
}

const pinata = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: pinataGateway,
});

export default pinata;