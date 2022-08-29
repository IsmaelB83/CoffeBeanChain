// Node modules
import Web3 from "web3";
// Own imports
import { networkIdText } from '../utils/index';
// MDB Components
// Components
// Statics
// Styles

let connection = null;

/**
 * Connects to web3 provider (metamask) and return connection information
 * @returns connection information
 */
export async function connect () {
    // Smart contract deployed
    const artifact = require("../contracts/SupplyChain.json");
    if (artifact) {
        // Connection
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        const accounts = await web3.eth.requestAccounts();
        const networkId = await web3.eth.net.getId();
        const { abi } = artifact;
        let address, contract;
        try {
            address = artifact.networks[networkId].address;
            contract = new web3.eth.Contract(abi, address);
            console.log(contract.methods)
        } catch (err) {
            alert(`Contract not found on network ${networkIdText(networkId)}`)
        }
        // Return connection
        connection = {
            web3: web3,
            account: accounts[0],
            networkId: networkId,
            contract: contract,
            address: address
        }
        return connection;
    }
}

/**
 * 
 * @returns 
 */
 export async function harvest (upc, name, info, latitude, longitude, notes) {
    return await connection.contract.methods.harvestItem(upc, connection.account, name, info, latitude, longitude, notes).send({from: connection.account});
}

/**
 * 
 * @returns 
 */
 export async function process (upc) {
    return await connection.contract.methods.processItem(upc).send({from: connection.account});
}

/**
 * 
 * @returns 
 */
 export async function pack (upc) {
    return await connection.contract.methods.packItem(upc).send({from: connection.account});
}

/**
 * 
 * @returns 
 */
 export async function addItem (upc, units) {
    return await connection.contract.methods.addItem(upc, units).send({from: connection.account});
}

/**
 * 
 * @returns 
 */
export async function putForSale (upc, price) {
    return await connection.contract.methods.putForSale(upc, price).send({from: connection.account});
}

/**
 * Fecth product information
 * @param {*} upc Product id
 * @returns Object with the product information
 */
export async function fetchItem (upc) {
    const fetch1 = await connection.contract.methods.fetchItemBufferOne(upc).call();
    const fetch2 = await connection.contract.methods.fetchItemBufferTwo(upc).call();
    return {
        farmId: fetch1[3],
        farmName: fetch1[4],
        farmInfo: fetch1[5],
        farmLatitude: fetch1[6],
        farmLongitude: fetch1[7],
        ownerId: fetch1[2],
        productNotes: fetch2[3],
        productUpc: fetch1[1],
        productSku: fetch1[0],
        productPrice: fetch2[4],
        productState: fetch2[5],
        distributorId: fetch2[6],
        retailerId: fetch2[7],
        consumerId: fetch2[8]
    }
}