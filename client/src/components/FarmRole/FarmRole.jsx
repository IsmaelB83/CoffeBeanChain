// Node modules
// Own imports
// Components
// MDB Components
import { MDBTypography, MDBInput, MDBRow, MDBCol, MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';
// Statics
import farmerImg from '../../static/farmer.png'
// Styles
import "./FarmRole.css";


/**
 * Farmer information either from an existing product or to harvest a new one
 * @returns Render the component
 */
function FarmRole(props) {

    // Props destructuring
    const { farmId, farmName, farmInformation, farmLatitude, farmLongitude } = props.farm;
    const { notes, upc, price, sku } = props.product;

    return (
        <div className="mt-5">
            <MDBTypography tag='div' className='display-6 mb-2'>
                Farm and Coffe information
            </MDBTypography>
            <MDBRow>
                <div className='mb-4'>
                    <img src={farmerImg} className='img-fluid shadow-4 imgFarmer' alt=""/>
                </div>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <form>
                        <MDBInput className='mb-4' id='farmId' disabled label='Farmer ID' value={farmId}/>
                        <MDBInput className='mb-4' id='farmName' label='Farm Name' value={farmName}/>
                        <MDBInput className='mb-4' id='farmInformation' label='Farm Information' value={farmInformation}/>
                        <MDBInput className='mb-4' id='farmLatitude' label='Farm Latitude' value={farmLatitude}/>
                        <MDBInput className='mb-4' id='farmLongitude' label='Farm Longitude' value={farmLongitude}/>
                    </form>
                </MDBCol>
                <MDBCol>
                    <form>
                        <MDBInput className='mb-4' id='productOwnerId' disabled label='Product Owner ID' value={price}/>
                        <MDBInput className='mb-4' id='productNotes' label='Product notes' value={notes}/>
                        <MDBInput className='mb-4' id='productUpc' type="number" label='Unified Product Code (UPC)' value={upc}/>
                        <MDBInput className='mb-4' id='productSku' type="number" label='Stock keeping unit (SKU)' value={sku}/>
                        <MDBInput className='mb-4' id='productPrice' type="number" label='Price' value={price}/>
                    </form>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBBtnGroup shadow="0" aria-label='Farm Actions'>
                    <MDBBtn rounded>Harvest</MDBBtn>
                    <MDBBtn rounded>Process </MDBBtn>
                    <MDBBtn rounded>Pack</MDBBtn>
                    <MDBBtn rounded>Add Item</MDBBtn>
                    <MDBBtn rounded>Put on Sale</MDBBtn>
                </MDBBtnGroup>
            </MDBRow>
        </div>
    );
}

export default FarmRole;