// Node modules
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
    const { distributorID, balanceID } = props.distributor;
    const { retailerID } = props.retailer;
    const { consumerID } = props.consumer;

    return (
        <div className="mt-5">
            <MDBTypography tag='div' className='display-6 mb-2'>
                Distributor, Retailer and Consumer
            </MDBTypography>
            <MDBRow>
                <MDBCol>
                    <MDBRow>
                        <div className='mb-4'>
                            <img src={distributorImg} className='img-fluid shadow-4 imgRole' alt=""/>
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <form>
                            <MDBInput className='mb-4' id="distributorID" disabled label='Account ID' value={distributorID}/>
                            <MDBInput className='mb-4' id="distributorETH" disabled type='number' label='Balance ETH' value={balanceID}/>
                            <MDBInput className='mb-4' id="distributorAux" type='number' label='Payment in ETH'/>
                        </form>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtnGroup shadow="0" aria-label='Actions'>
                            <MDBBtn color="success" rounded>Buy </MDBBtn>
                            <MDBBtn color="success" rounded>Ship </MDBBtn>
                        </MDBBtnGroup>
                    </MDBRow>
                </MDBCol>
                <MDBCol>
                    <MDBRow>
                        <div className='mb-4'>
                            <img src={retailerImg} className='img-fluid shadow-4 imgRole' alt=""/>
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <form className="formRole">
                            <MDBInput className='mb-4' id="retailerID" disabled label='Account ID' value={retailerID}/>
                            <MDBInput className='mb-4' id="retailerETH" disabled type='number' label='Balance ETH' value={balanceID}/>
                            <MDBInput className='mb-4 visibility-none' id="retailerAux" type='number' disabled label=''/>
                        </form>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtnGroup shadow="0" aria-label='Actions'>
                            <MDBBtn color="warning" rounded>Receive </MDBBtn>
                        </MDBBtnGroup>
                    </MDBRow>
                </MDBCol>
                <MDBCol>
                    <MDBRow>
                        <div className='mb-4'>
                            <img src={consumerImg} className='img-fluid shadow-4 imgRole' alt=""/>
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <form>
                            <MDBInput className='mb-4' id="consumerID" disabled label='Account ID' value={consumerID}/>
                            <MDBInput className='mb-4' id="consumerETH" disabled type='number' label='Balance ETH' value={balanceID}/>
                            <MDBInput className='mb-4' id="consumerAux" type='number' disabled label=''/>
                        </form>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtnGroup shadow="0" aria-label='Actions'>
                            <MDBBtn color="danger" rounded>Purchase </MDBBtn>
                        </MDBBtnGroup>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default OtherRoles;