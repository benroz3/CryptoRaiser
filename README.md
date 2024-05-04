# CryptoRaiser
 A Web3 Blockchain Crowdfunding Platform using a smart contract.

 [Demo Link]()
 
 ![Showcase Image]()

## Technologies used
* React
* Vite
* TypeScript
* TailwindCSS
* Framer Motion
* Docker
* Solidity
* third-web
* Metamask

## Deploy

### Locally
1. Create `.env` in the `client` folder and the `thirdweb-contracts` folder using the example
2. `cd client`
3. Run `yarn` or `npm i` to install dependencies
4. Run `yarn dev` or `npm run dev` to start the dev server

### With Docker
1. Open Docker Desktop
1. Create `.env` in the `client` folder and the `thirdweb-contracts` folder using the example
3. `cd client`
4. Run `docker build -t CryptoRaiser .`
5. Run `docker run -p 3000:3000 CryptoRaiser`

* Different README file in the thirdweb-contracts folder.

## Important links

1. [Thirdweb](https://thirdweb.com/) - for creating a contract and deploying it to the blockchain.
2. [infura](https://app.infura.io/) - for creating an account and getting an API key.
3. [Metamask](https://metamask.io/) - for connecting to the blockchain.