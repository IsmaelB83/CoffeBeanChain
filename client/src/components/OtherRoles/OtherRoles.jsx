// Node modules
import { useState } from 'react';
// Own imports
// Components
// MDB Components
import { MDBTypography, MDBRow, MDBCol, MDBInput, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
// Statics
import distributorImg from '../../static/distributor.png'
import retailerImg from '../../static/retailer.png'
import consumerImg from '../../static/consumer.png'
// Styles
import "./OtherRoles.css";

/**
 * Farmer information either from an existing product or to harvest a new one
 * @returns Render the component
 */
function OtherRoles(props) {

    // Props destructuring
    const { distributorId, retailerId, consumerId } = props;
    const { onBuy, onShip, onReceive, onPurchase } = props;

    const [payment, setPayment] = useState(0);

    return (
        <div className="mt-5">
            <MDBTypography tag='div' className='display-6 mb-2'>
                Distributor, Retailer and Consumer
            </MDBTypography>
            <MDBRow>
                <MDBCol>
                    <MDBRow className='mb-4'>
                        <img src={distributorImg} className='img-fluid shadow-4 imgRole' alt=""/>
                    </MDBRow>
                    <MDBRow>
                        <form>
                            <MDBInput className='mb-4' disabled label='Account ID' value={distributorId}/>
                            <MDBInput className='mb-4' type='number' label='Payment' value={payment} onChange={ev=>setPayment(ev.target.value)}/>
                        </form>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtnGroup shadow="0" aria-label='Actions'>
                            <MDBBtn color='danger' rounded onClick={ev=>onBuy(payment)}>Buy </MDBBtn>
                            <MDBBtn color='danger' rounded onClick={onShip}>Ship </MDBBtn>
                        </MDBBtnGroup>
                    </MDBRow>
                </MDBCol>
                <MDBCol>
                    <MDBRow className='mb-4'>
                        <img src={retailerImg} className='img-fluid shadow-4 imgRole' alt=""/>
                    </MDBRow>
                    <MDBRow>
                        <form>
                            <MDBInput className='mb-4' disabled label='Account ID' value={retailerId}/>
                        </form>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtnGroup shadow="0" aria-label='Actions'>
                            <MDBBtn color='warning' rounded onClick={onReceive}>Receive </MDBBtn>
                        </MDBBtnGroup>
                    </MDBRow>
                </MDBCol>
                <MDBCol>
                    <MDBRow className='mb-4'>
                        <img src={consumerImg} className='img-fluid shadow-4 imgRole' alt=""/>
                    </MDBRow>
                    <MDBRow>
                        <form>
                            <MDBInput className='mb-4' disabled label='Account ID' value={consumerId}/>
                        </form>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtnGroup shadow="0" aria-label='Actions'>
                            <MDBBtn color='info' rounded onClick={onPurchase}>Purchase </MDBBtn>
                        </MDBBtnGroup>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default OtherRoles;