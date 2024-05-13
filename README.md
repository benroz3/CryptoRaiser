# CryptoRaiser

A Web3 Blockchain Crowdfunding Platform using a smart contract.

[Demo Link](https://crypto-raiser.netlify.app/)

![Showcase Image](/client/src/assets/showcase.png)

## Technologies used

- React
- Vite
- TypeScript
- TailwindCSS
- Framer Motion
- Docker
- Solidity
- third-web
- Blockchain wallets (Metamask, coinbase, walletConnect, Smart Account, Safe, In-App, Local Wallet, Rainbow, Zerion, Blocto, Frame, Phantom, Coin98, Core Wallet, Crypto Defi, OKX Wallet, OneKey Wallet, Rabby Wallet, XDEFI Wallet)

## Deploy

### Locally

1. Create `.env` in the `client` folder and the `thirdweb-contracts` folder using the example
2. `cd client`
3. Run `yarn` or `npm i` to install dependencies
4. Run `yarn dev` or `npm run dev` to start the dev server

### With Docker

1. Open Docker Desktop
1. Create `.env` in the `client` folder and the `thirdweb-contracts` folder using the example
1. `cd client`
1. Run `docker build -t CryptoRaiser .`
1. Run `docker run -p 3000:3000 CryptoRaiser`

- `npm run build` of `yarn build` will create a `dist` folder with all the files needed for deployment.
- Different README file in the thirdweb-contracts folder.

## Important links

1. [Thirdweb](https://thirdweb.com/) - for creating a contract and deploying it to the blockchain.
2. [infura](https://app.infura.io/) - for creating an account and getting an API key.
