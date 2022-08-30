// Node modules
import { useState, useEffect } from 'react';
// Own imports
// Components
// MDB Components
import { MDBTypography, MDBInput, MDBRow, MDBCol, MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';
// Statics
import farmerImg from '../../static/farmer.png'
// Styles
import './FarmRole.css';


/**
 * Farmer information either from an existing product or to harvest a new one
 * @returns Render the component
 */
function FarmRole(props) {
    
    // Farm information form
    const [readOnly, setReadOnly] = useState(false);
    const [farmForm, setFarmForm] = useState({
        id: '',
        name: '',
        info: '',
        latitude: 0,
        longitude: 0
    });
    const onChangeFarmForm = e => setFarmForm({ ...farmForm, [e.target.name]: e.target.value });

    // Product information form
    const [productForm, setProductForm] = useState({
        ownerId: '',
        notes: '',
        upc: 0,
        price: 0,
        sku: 0
    });
    const onChangeProductForm = e => setProductForm({ ...productForm, [e.target.name]: e.target.value });

    // Reload props
    useEffect(() => {
        if (props.productUpc) {
            setReadOnly(true);
            setFarmForm({
                id: props.farmId,
                name: props.farmName,
                info: props.farmInfo,
                latitude: props.farmLatitude,
                longitude: props.farmLongitude
            });
            setProductForm ({
                ownerId: props.ownerId,
                notes: props.productNotes,
                upc: props.productUpc,
                price: props.productPrice,
                sku: props.productSku
            })    
        }
    }, [props])

    // Methods
    const { onHarvest, onProcess, onPack, onAddItem, onPutForSale } = props;

    const harvest = () => onHarvest(productForm.upc, farmForm.name, farmForm.info, farmForm.latitude, farmForm.longitude, productForm.notes) 
    const process = () => onProcess(productForm.upc)
    const pack = () => onPack(productForm.upc)
    const addItem = () => onAddItem(productForm.upc, productForm.sku)
    const putForSale = () => onPutForSale(productForm.upc, productForm.price)

    return (
        <div className='mt-5'>
            <MDBTypography tag='div' className='display-6 mb-2'>
                Farm and Coffe information
            </MDBTypography>
            <MDBRow>
                <div className='mb-4'>
                    <img src={farmerImg} className='img-fluid shadow-4 imgFarmer' alt=''/>
                </div>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <form>
                        <MDBInput className='mb-4' type='text' name='id' disabled label='Farmer ID' value={farmForm.id} onChange={onChangeFarmForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='text' name='name' label='Farm Name' value={farmForm.name} onChange={onChangeFarmForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='text' name='info' label='Farm Information' value={farmForm.info} onChange={onChangeFarmForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='number' name='latitude' label='Farm Latitude' value={farmForm.latitude} onChange={onChangeFarmForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='number'name='longitude' label='Farm Longitude' value={farmForm.longitude} onChange={onChangeFarmForm} readOnly={readOnly} />
                    </form>
                </MDBCol>
                <MDBCol>
                    <form>
                        <MDBInput className='mb-4' type='text' name='ownerId' disabled label='Product Owner ID' value={productForm.ownerId} onChange={onChangeProductForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='text' name='notes' label='Product notes' value={productForm.notes} onChange={onChangeProductForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='number' name='upc' label='Unified Product Code (UPC)' value={productForm.upc} onChange={onChangeProductForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='number' name='sku' label='Stock keeping unit (SKU)' value={productForm.sku} onChange={onChangeProductForm} readOnly={readOnly} />
                        <MDBInput className='mb-4' type='number' name='price' label='Price' value={productForm.price} onChange={onChangeProductForm} readOnly={readOnly} />
                    </form>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBBtnGroup shadow='0' aria-label='Farm Actions'>
                    <MDBBtn rounded onClick={harvest}>Harvest</MDBBtn>
                    <MDBBtn rounded onClick={process}>Process </MDBBtn>
                    <MDBBtn rounded onClick={pack}>Pack</MDBBtn>
                    <MDBBtn rounded onClick={addItem}>Add Item</MDBBtn>
                    <MDBBtn rounded onClick={putForSale}>Put on Sale</MDBBtn>
                </MDBBtnGroup>
            </MDBRow>
        </div>
    );
}

export default FarmRole;