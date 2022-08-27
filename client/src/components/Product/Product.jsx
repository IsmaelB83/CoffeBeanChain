// Node modules
// Own imports
// Components
// MDB Components
import { MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// Statics
// Styles
import "./Product.css";


/**
 * Farmer information either from an existing product or to harvest a new one
 * @returns Render the component
 */
function Product(props) {

    // Props destructuring
    const { image, notes, upc, price, sku } = props;

    return (
        <div>
            <MDBRow>
                <div className='bg-image hover-overlay mb-4 imgProduct text-center'>
                    <img src={image} className='img-fluid' />
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                        <p className='text-white mb-0'>Click to select an image</p>
                        </div>
                    </div>
                </div>    
            </MDBRow>           
            <MDBRow>
                <form>
                    <MDBInput className='mb-4' id='productOwnerId' disabled label='Product Owner ID' value={price}/>
                    <MDBInput className='mb-4' id='productNotes' label='Product notes' value={notes}/>
                    <MDBInput className='mb-4' id='productUpc' type="number" label='Unified Product Code (UPC)' value={upc}/>
                    <MDBInput className='mb-4' id='productSku' type="number" label='Stock keeping unit (SKU)' value={sku}/>
                    <MDBInput className='mb-4' id='productPrice' type="number" label='Price' value={price}/>
                </form>
            </MDBRow>
        </div>
    );
}

export default Product;