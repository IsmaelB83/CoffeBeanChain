// Node Imports
const truffleAssert = require("truffle-assertions");
// Own Imports
const SupplyChain = artifacts.require('SupplyChain')

contract('SupplyChain', accounts => {

    // Declare few constants and assign a few sample accounts generated by ganache-cli
    var sku = 1
    var upc = 1
    const ownerID = accounts[0]
    const originFarmerID = accounts[1]
    const originFarmName = "John Doe"
    const originFarmInformation = "Yarray Valley"
    const originFarmLatitude = "-38.239770"
    const originFarmLongitude = "144.341490"
    var productID = sku + upc
    const productNotes = "Best beans for Espresso"
    const productPrice = web3.utils.toWei("1", "ether");
    var itemState = 0
    const distributorID = accounts[2]
    const retailerID = accounts[3]
    const consumerID = accounts[4]
    const emptyAddress = '0x00000000000000000000000000000000000000'

    //// Mnemonic
    //// ==================
    //// shit supply shark amount et item harsh afraid congress destroy talent rat

    //// Available Accounts
    //// ==================
    //// (0) 0x99fb0Ab83f638Af30B3433f1F785a4E34903832D (1000 ETH)
    //// (1) 0x5dD7a0e663A6C7d0508416854e44E9acF6937Eee (1000 ETH)
    //// (2) 0xE46666E8D2c9EE0F6170938298bBF349613f454C (1000 ETH)
    //// (3) 0x667643664B481fB801e351D6ffBA3D88CA6ea77d (1000 ETH)
    //// (4) 0xacb1A249f046143A7DF900408eaeACe296CF84C1 (1000 ETH)
    //// (5) 0xAe76E4EA4Ca4A609cf39bcA850792714C032C762 (1000 ETH)
    //// (6) 0x4abc37C1CeDf3d5Ca3f15122a30585c824fb55a9 (1000 ETH)
    //// (7) 0xB3da9b85551D41d1adCBb718F3b6c8b6DC6fe980 (1000 ETH)
    //// (8) 0x6656a2Ca68Ef6a7F53EEFE45d92916132F4f44db (1000 ETH)
    //// (9) 0xC9b569a4246F8Ea8662B0a795A0562a2a9F8e5dd (1000 ETH)
    
    //// Private Keys
    //// ==================
    //// (0) 0x28596b9253d2ed3d2ef7aec4066dfc7c157b1900bccb515971765774e8a65251
    //// (1) 0xef13692807e163c78b6b14e45837a5166d073ea1f1ab471545654d624c301f31
    //// (2) 0xc153d323392993d9bfb1b1f7e54b5bab2c5f343883dd9e74942e45f01bebfd8b
    //// (3) 0xf0f37fe75291c2af63220daea5005a2ba72e18a7fc74117bdd7dc7a5d8cb0a33
    //// (4) 0xdc26233bedc89870c5c941b5903d0d68293a64ed3f70825317ba0cbe57d382b7
    //// (5) 0x7c968b864b8375c25139a78f21c9e8ed20548a2015bde93c2a4a9ad99db80d7e
    //// (6) 0x45e242dab461f706bb1b1e473c65340468801ce89888b158d30ab30f03e1b086
    //// (7) 0x5d106afb27fbd2021c979410b3e41bc270e16cf26b5c191a7d15c9b367a63eb4
    //// (8) 0x3e15ea6256d54ceab2d94af4dedf69216ca6605b342d5858b252e2ebc31d27e6
    //// (9) 0xc035bbe2c83b1d83268e429ebbd8ef46faf355d251862145b0e3384560402ff4

    console.log("ganache-cli accounts used here...")
    console.log("Contract Owner: accounts[0] ",ownerID)
    console.log("Farmer: accounts[1] ", originFarmerID)
    console.log("Distributor: accounts[2] ", distributorID)
    console.log("Retailer: accounts[3] ", retailerID)
    console.log("Consumer: accounts[4] ", consumerID)

    // Register actors and TEST Roles
    it("Add roles to each account", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Add roles to each participant
        const tx1 = await supplyChain.addFarmer(originFarmerID);
        truffleAssert.eventEmitted(tx1, 'FarmerAdded');
        const tx2 = await supplyChain.addDistributor(distributorID);
        truffleAssert.eventEmitted(tx2, 'DistributorAdded');
        const tx3 = await supplyChain.addRetailer(retailerID);
        truffleAssert.eventEmitted(tx3, 'RetailerAdded');
        const tx4 = await supplyChain.addConsumer(consumerID);   
        truffleAssert.eventEmitted(tx4, 'ConsumerAdded');
        // Check roles are properly assigned
        assert.equal(await supplyChain.isFarmer(originFarmerID), true);
        assert.equal(await supplyChain.isDistributor(distributorID), true);
        assert.equal(await supplyChain.isRetailer(retailerID), true);
        assert.equal(await supplyChain.isConsumer(consumerID), true);
        // Check roles are not assigned incorrectlyno more roles are assigned
        assert.equal(await supplyChain.isFarmer(distributorID), false);
        assert.equal(await supplyChain.isFarmer(retailerID), false);
        assert.equal(await supplyChain.isFarmer(consumerID), false);
        assert.equal(await supplyChain.isDistributor(originFarmerID), false);
        assert.equal(await supplyChain.isDistributor(retailerID), false);
        assert.equal(await supplyChain.isDistributor(consumerID), false);
        assert.equal(await supplyChain.isRetailer(originFarmerID), false);
        assert.equal(await supplyChain.isRetailer(distributorID), false);
        assert.equal(await supplyChain.isRetailer(consumerID), false);
        assert.equal(await supplyChain.isConsumer(originFarmerID), false);
        assert.equal(await supplyChain.isConsumer(distributorID), false);
        assert.equal(await supplyChain.isConsumer(retailerID), false);
    })

    // 1st Test - HARVEST
    it("Testing smart contract function harvestItem() that allows a farmer to harvest coffee", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Harvested by calling function harvestItem()
        const tx = await supplyChain.harvestItem(upc, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes, {from: originFarmerID})
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        // Verify the result set
        assert.equal(parseInt(resultBufferOne[0].toString()), sku, 'Error: Invalid item SKU')
        assert.equal(parseInt(resultBufferOne[1].toString()), upc, 'Error: Invalid item UPC')
        assert.equal(resultBufferOne[2], originFarmerID, 'Error: Missing or Invalid originFarmerID')
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID')
        assert.equal(resultBufferOne[4], originFarmName, 'Error: Missing or Invalid originFarmName')
        assert.equal(resultBufferOne[5], originFarmInformation, 'Error: Missing or Invalid originFarmInformation')
        assert.equal(resultBufferOne[6], originFarmLatitude, 'Error: Missing or Invalid originFarmLatitude')
        assert.equal(resultBufferOne[7], originFarmLongitude, 'Error: Missing or Invalid originFarmLongitude')
        assert.equal(resultBufferTwo[5], 0, 'Error: Invalid item State')
        truffleAssert.eventEmitted(tx, 'Harvested');
    })    

    // 2nd Test- PROCESS
    it("Testing smart contract function processItem() that allows a farmer to process coffee", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Processed by calling function processtItem()
        const tx = await supplyChain.processItem(upc, {from: originFarmerID});
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)        
        // Verify the result set
        assert.equal(resultBufferOne[2], originFarmerID, 'Error: owner should be farmer at this stage')
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID')
        assert.equal(resultBufferTwo[5], 1, 'Error: state is incorrect for this stage')
        // Watch the emitted event Processed()
        truffleAssert.eventEmitted(tx, 'Processed');
    })    

    // 3rd Test - PACK ITEM
    it("Testing smart contract function packItem() that allows a farmer to pack coffee", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Packed by calling function packItem()
        const tx = await supplyChain.packItem(upc, {from: originFarmerID});
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        // Verify the result set
        assert.equal(resultBufferOne[2], originFarmerID, 'Error: owner should be farmer at this stage')
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID')
        assert.equal(resultBufferTwo[5], 2, 'Error: state is incorrect for this stage')
        // Watch the emitted event Packed()
        truffleAssert.eventEmitted(tx, 'Packed');
    })    

    // 4th Test - ADD ITEM
    it("Testing smart contract function addItem() that allows a farmer to add stock to an already packed item (while it's till not shipped)", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Packed by calling function packItem()
        const tx = await supplyChain.addItem(upc, 100);
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        // Verify the result set
        assert.equal(parseInt(resultBufferTwo[0]), 101, 'Error: state is incorrect for this stage')
        // Watch the emitted event Packed()
        truffleAssert.eventEmitted(tx, 'Packed');
    })    
    
    // 5th Test - PUT FOR SALE
    it("Testing smart contract function putForSale() that allows a farmer to sell coffee", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as ForSale by calling function putForSale()
        const tx = await supplyChain.putForSale(upc, productPrice, {from: originFarmerID});
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        assert.equal(resultBufferTwo[4], productPrice, 'Error: price of the item is incorrect')
        // Verify the result set
        assert.equal(resultBufferOne[2], originFarmerID, 'Error: owner should be farmer at this stage')
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID')
        assert.equal(resultBufferTwo[5], 3, 'Error: state is incorrect for this stage')
        // Watch the emitted event ForSale()
        truffleAssert.eventEmitted(tx, 'ForSale');
    })    

    // 6th Test - BUY ITEM (DISTRIBUTOR)
    it("Testing smart contract function buyItem() that allows a distributor to buy coffee", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Sold by calling function buyItem()
        const oldFarmerBalance = await web3.eth.getBalance(originFarmerID)
        const tx = await supplyChain.buyItem(upc, {from: distributorID, value: productPrice});
        const newFarmerBalance = await web3.eth.getBalance(originFarmerID)
        assert.equal(parseInt(oldFarmerBalance) + parseInt(productPrice), parseInt(newFarmerBalance), "Farmer is not prperly paid by the sale")
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        // Verify the result set
        assert.equal(resultBufferOne[2], distributorID, 'Error: owner should be distributor at this stage')
        assert.equal(resultBufferTwo[6], distributorID, 'Error: distributor id should be distributor id at this stage')
        assert.equal(resultBufferTwo[5], 4, 'Error: state is incorrect for this stage')
        // Watch the emitted event Sold()
        truffleAssert.eventEmitted(tx, 'Sold');
    })    

    // 7th Test - SHIP ITEM
    it("Testing smart contract function shipItem() that allows a distributor to ship coffee", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Sold by calling function shipItem()
        const tx = await supplyChain.shipItem(upc, {from: distributorID});
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        // Verify the result set
        assert.equal(resultBufferOne[2], distributorID, 'Error: owner should be distributor at this stage')
        assert.equal(resultBufferTwo[6], distributorID, 'Error: distributor id should be distributor id at this stage')
        assert.equal(resultBufferTwo[5], 5, 'Error: state is incorrect for this stage')
        // Watch the emitted event Shipped()
        truffleAssert.eventEmitted(tx, 'Shipped');
    })    

    // 8th Test - RECEIVE ITEM
    it("Testing smart contract function receiveItem() that allows a retailer to mark coffee received", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Sold by calling function receiveItem()
        const tx = await supplyChain.receiveItem(upc, {from: retailerID});
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        // Verify the result set
        assert.equal(resultBufferOne[2], retailerID, 'Error: owner should be retailer at this stage')
        assert.equal(resultBufferTwo[7], retailerID, 'Error: retailer id should be retailer id at this stage')
        assert.equal(resultBufferTwo[5], 6, 'Error: state is incorrect for this stage')
        // Watch the emitted event Received()
        truffleAssert.eventEmitted(tx, 'Received');
    })

    // 9th Test - PURCHASE (CONSUMER)
    it("Testing smart contract function purchaseItem() that allows a consumer to purchase coffee", async() => {
        // Smart contract deployed for testing
        const supplyChain = await SupplyChain.deployed()
        // Mark an item as Sold by calling function purchaseItem()
        const tx = await supplyChain.purchaseItem(upc, {from: consumerID});
        // Retrieve the just now saved item from blockchain by calling function fetchItem()
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(upc)
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo.call(upc)
        // Verify the result set
        assert.equal(resultBufferOne[2], consumerID, 'Error: owner should be consumer at this stage')
        assert.equal(resultBufferTwo[8], consumerID, 'Error: consumer id should be consumer id at this stage')
        assert.equal(resultBufferTwo[5], 7, 'Error: state is incorrect for this stage')
        // Watch the emitted event Purchased()
        truffleAssert.eventEmitted(tx, 'Purchased');
    })
});