# COFFEBEANCHAIN - Supply Chain in Ethereum
Coffe Bean supply chain DApp Implemented on the ethereum network

## Introduction 
DApp developed for the 3rd project of Udacity's Blockchain Developer Nanodegree:
![alt text](./documentation/screenshot1.png)

The application allows to simulate a simple supply chain related to the coffe bean processing. It allows interacting four different actors: Farmer, Distributor, Retailer and Consumers with a decentralized app based on REACT for the frontend and a series of smart contracts running on ethereum as the backend.

![alt text](./documentation/CoffeBean_SC_BusinessProcess.png)

See the **UML diagrams** here: [UML Files](##-UML)

This DApp is alredy **deployed on the rinkeby network**:
- **Contract owner and has all roles**: https://rinkeby.etherscan.io/address/0x91f8A34a3De20f8E5A6BD42f0D0d1278B3693836
- Smart Contract Deployments:
    - Migrations: https://rinkeby.etherscan.io/address/0x3156cf6C980a1a2ca5d3481F79516AaEAE2f97D7
    - **FarmerRole**: https://rinkeby.etherscan.io/address/0xFaD3c411910592d5a2aB9403E45405efEE4FAc32
    - **DistributorRole**: https://rinkeby.etherscan.io/address/0xF966D8b09c43417c2d5988bBE6A522acaF3bf26A
    - **RetailerRole**: https://rinkeby.etherscan.io/address/0xA5bD0994A37d96970Ce9e1Ec4519dDCB9c5B7D28
    - **ConsumerRole**: https://rinkeby.etherscan.io/address/0xacEa7B4A8Cd9c35c93307c4BD83e99CCe473A394
    - **SupplyChain**: https://rinkeby.etherscan.io/address/0x54Fb0500325447163dcb3F17550aD1e2D01CB0a1

- Total cost of deployment: 0.04772206 ETH

- Transactions already registered:
    - Harvest: https://rinkeby.etherscan.io/tx/0x8030a76e61f40f5e3be6e9e4d8caee87f289ddcdd30045d7b9142d6b0c2d8501       (UPC-10000)
    - Process: https://rinkeby.etherscan.io/tx/0x39fd1b1f820706049e91ffe2585e444f7a9430601be204584020b6cab7e63cd3       (UPC-10000)
    - Pack: https://rinkeby.etherscan.io/tx/0x2009cca708727bacfeeb0eefb274cc45eeb3808afeae2af6bdf56d3aaea5407d          (UPC-10000)
    - AddItem: https://rinkeby.etherscan.io/tx/0x504bf8db42481eae39f992d257718d20b2b2f71ad06abe7050a64bb6da12f6e5       (UPC-10000)
    - PutForSale: https://rinkeby.etherscan.io/tx/0x1d61f757b27c5d845da23a8b5ee8f55e4be7160e762993fae95c8bfb1730bfa0    (UPC-10000)
    - Sold: https://rinkeby.etherscan.io/tx/
    - Ship: https://rinkeby.etherscan.io/tx/
    - Receive: https://rinkeby.etherscan.io/tx/
    - Purchase: https://rinkeby.etherscan.io/tx/     

## DEPENDENCIES

## Backend (smart contract):
This project has been implemented with following versions of truffle and solidity
- Truffle - v5.5.25 (core: 5.5.25)
- Solidity - 0.8.16 (solc-js)

The dependencies identified in package.json are:
- "dotenv": "^16.0.1"                       (to handle .env files for the Infura configuration)
- "truffle-hdwallet-provider": "^1.0.17"    (to deploy contracts into the Rinkeby network via Infura)
- "truffle-assertions": "^0.9.2"            (to check for smart contract events emitted in tests)

## Frontend (web)
- "react": "^18.1.0",
- "react-dom": "^18.1.0",
- "react-scripts": "^4.0.3",
- "web3": "^1.7.3"
- "@testing-library/jest-dom": "^5.16.4",
- "@testing-library/react": "^13.2.0",
- "@testing-library/user-event": "^13.5.0",

## UML

- Activity UML:

![Activity UML](./documentation/CoffeBean_SC_ActivityUML.png)

- Sequence UML:

![Sequence UML](./documentation/CoffeBean_SC_SequenceUML.png)

- State UML:

![State UML](./documentation/CoffeBean_SC_StateUML.png)

- Class UML:

![Class UML](./documentation/CoffeBean_SC_ClassUML.png)

## DEPLOYMENT

### Download
To download the repository
```
\downloads\git clone https://github.com/IsmaelB83/CoffeBeanChain.git
```

### Install dependencies

Install all the required npm packages both in backend and frontend folders
```
\downloads\CoffeBeanChain\npm install
\downloads\CoffeBeanChain\app\npm install
```
### Configuration
- Before deploying the network to any ethereum network, you need to provide an .env file with the parameters to connect trough infura. You just need three parameters as shown in .env.example:
INFURA_KEY='abcde'
INFURA_SECRET='abcde'
MNEMONIC='mnemonic of your wallet with funds'

### Deploy backend
- Test contracts
```
\downloads\CoffeBeanChain\truffle\truffle develop
truffle(develop)> test
```

- Migrate contracts to rinkeby network
```
\downloads\CoffeBeanChain\truffle\truffle migrate --reset --network rinkeby
```

## Start Frontend
To start the frontend in dev environment 
```
\downloads\CoffeBeanChain\client\npm start
```

## DEMO
PENDING