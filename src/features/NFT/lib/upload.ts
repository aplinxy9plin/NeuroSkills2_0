import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { UploadPinataJSON } from '@/entities/chat/model/types';
import { ABI } from '@/shared/ABI/ABI';

export const uploadNFT = (payload: { text: string }, onError: () => void, callback: (tokenId: string) => void) => {
  let address = '';
  if (typeof window.ethereum !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('MetaMask is installed!');
  } else {
    throw new Error('MetaMask is not installed');
  }
  window.ethereum
    .request({
      method: 'eth_requestAccounts',
    })
    .then((accounts: string[]) => {
      if (accounts.length > 0) {
        const [account] = accounts;
        address = account;
        if (address) {
          const endpoint = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
          const apiKey = import.meta.env.VITE_PINATA_API_KEY || '<your_api_key>';
          const apiSecret = import.meta.env.VITE_PINATA_API_SECRET || '<your_api_secret>';

          // Convert the text to a JSON object
          const body = JSON.stringify(payload);

          // Send a POST request to Pinata API with the data
          fetch(endpoint, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              pinata_api_key: apiKey,
              pinata_secret_api_key: apiSecret,
            },
            body,
          })
            .then((res) => res.json())
            .then(async (result: UploadPinataJSON) => {
              const contractAddress =
                '0xdF2e58FCe5Bfaf95f5D9E14735d5EeDaC505978F' || import.meta.env.VITE_CONTRACT_ADDRESS;
              const web3 = new Web3(window.ethereum);
              const contract = new web3.eth.Contract(ABI as unknown as AbiItem, contractAddress);
              const createNFT = await contract.methods.safeMint(address, result.IpfsHash).send({
                from: address,
              });
              const { tokenId } = createNFT.events.Transfer.returnValues;
              callback(tokenId);
            })
            .catch(() => {
              onError();
            });
        }
      }
    })
    .catch(() => {
      onError();
    });
};
