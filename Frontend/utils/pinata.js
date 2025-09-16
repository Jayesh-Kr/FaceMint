import {PinataSDK} from 'pinata';

const PINATA_JWT = import.meta.env.VITE_PINATA_JWT;
const pinataGateway = import.meta.env.VITE_PINATA_GATEWAY;

if(!PINATA_JWT || !pinataGateway) {
    console.error("Error from pinata. Missing .env data");
}

const pinata = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: pinataGateway,
});

export default pinata;