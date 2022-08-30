// Node modules
import React, { useEffect, useState } from "react";
// Own imports
import { connect, harvest, process, pack, addItem, putForSale, fetchItem, buyItem, shipItem, receiveItem, purchaseItem } from './web3/index';
// MDB Components
import { MDBContainer} from 'mdb-react-ui-kit';
// Components
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Instructions from "./components/Instructions/Instructions"
import FarmRole from "./components/FarmRole/FarmRole"
import SupplyChain from "./components/SupplyChain/SupplyChain"
import OtherRoles from "./components/OtherRoles/OtherRoles"
import SearchProduct from "./components/SearchProduct/SearchProduct"
// Statics
// Styles
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css'

function App() {

    const [connection, setConnection] = useState({
        web3: null,
        account: '0x0000000000000000000000000000000000000000',
        networkId: 0,
        contract: null,
        address: ''
    });

    const [data, setData] = useState({
        farmId: '0x0000000000000000000000000000000000000000',
        farmName: '',
        farmInfo: '',
        farmLatitude: 0,
        farmLongitude: 0,    
        ownerId: '0x0000000000000000000000000000000000000000',
        productNotes: '',
        productUpc: 0,
        productSku: 0,
        productPrice: 0,
        productState: -1,
        distributorId: '0x0000000000000000000000000000000000000000',
        retailerId: '0x0000000000000000000000000000000000000000',
        consumerId: '0x0000000000000000000000000000000000000000'
    })

    // Connect provider
    useEffect(() => {
        // Connect to provider
        connect().then(result => {
            document.web3 = result;
            setConnection(result)
        });
    },[])
   
    // Handler of chain changed event in metamask
    const chainChangedHandler = networkId => setConnection({...connection, networkId: parseInt(networkId, 'hex')})
    // Handler of chain changed event in metamask
    const accountChangedHandler = accounts => setConnection({...connection, account: accounts[0]})
    // Handler of connect click button
    const connectHandler = () => connect().then(result => setConnection(result));
        
    // Bind events from metamask (change account and)
    window.ethereum.on("chainChanged", chainChangedHandler)
    window.ethereum.on("accountsChanged", accountChangedHandler)

    // Search product
    const searchProductHandler = upc => {
        fetchItem(parseInt(upc)).then(aux => setData({...aux}))
    }

    // Click on harvest
    const onHarvestHandler = (upc, name, info, latitude, longitude, notes) => {
        harvest(upc, name, info, latitude, longitude, notes)
        .then( result => {
            console.log(result)
        })
    }

    // Click on process
    const onProcessHandler = (upc) => {
        process(upc).then( result => console.log(result))
    }

    // Click on pack
    const onPackHandler = (upc) => {
        pack(upc).then( result => console.log(result))
    }

    // Click on add item
    const onAddItemHandler = (upc, units) => {
        addItem(upc, parseInt(units)).then( result => console.log(result))
    }

    // Click on put for sale
    const onPutForSaleHandler = (upc, price) => {
        putForSale(upc, price).then( result => console.log(result))
    }

    // Click BUY sale
    const onBuyHandler = (value) => {
        buyItem(data.productUpc, parseInt(value)).then( result => console.log(result))
    }

    // Click BUY sale
    const onShipHandler = () => {
        shipItem(data.productUpc).then( result => console.log(result))
    }
       
    // Click BUY sale
    const onReceiveHandler = () => {
        receiveItem(data.productUpc).then( result => console.log(result))
    }

    // Click BUY sale
    const onPucharseHandler = () => {
        purchaseItem(data.productUpc).then( result => console.log(result))
    }
   
    // Render
    return (
        <React.Fragment>
            <NavBar account={connection.account} network={connection.networkId} onConnect={connectHandler}/>
            <MDBContainer className="mt-4 mb-4 mainContainer" id="App" >
                <Instructions/>
                <SearchProduct onSearch={searchProductHandler}/>
                { data.productState >= 0 && <SupplyChain state={data.productState}/> }
                <FarmRole   farmId={data.farmId} farmName={data.farmName} farmInfo={data.farmInfo} farmLatitude={data.farmLatitude} farmLongitude={data.farmLongitude}
                            ownerId={data.ownerId} productNotes={data.productNotes} productUpc={data.productUpc} productSku={data.productSku} productPrice={data.productPrice}
                            onHarvest={onHarvestHandler} onProcess={onProcessHandler} onPack={onPackHandler} onAddItem={onAddItemHandler} onPutForSale={onPutForSaleHandler}/>
                <OtherRoles distributorId={data.distributorId} retailerId={data.retailerId} consumerId={data.consumerId}
                            onBuy={onBuyHandler} onShip={onShipHandler} onReceive={onReceiveHandler} onPurchase={onPucharseHandler}/>
            </MDBContainer>
            <Footer/>
        </React.Fragment>
    );
}

export default App;