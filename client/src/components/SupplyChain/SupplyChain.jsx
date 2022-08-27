// Node modules
// Own imports
// Components
// MDB Components
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
// Statics
import harvestOnImg from '../../static/harvest_on.png'
import harvestOffImg from '../../static/harvest_off.png'
import processOnImg from '../../static/process_on.png'
import processOffImg from '../../static/process_off.png'
import packOnImg from '../../static/pack_on.png'
import packOffImg from '../../static/pack_off.png'
import forsaleOnImg from '../../static/forsale_on.png'
import forsaleOffImg from '../../static/forsale_off.png'
import buyOnImg from '../../static/buy_on.png'
import buyOffImg from '../../static/buy_off.png'
import shipOnImg from '../../static/ship_on.png'
import shipOffImg from '../../static/ship_off.png'
import receiveOnImg from '../../static/receive_on.png'
import receiveOffImg from '../../static/receive_off.png'
import purchaseOnImg from '../../static/purchase_on.png'
import purchaseOffImg from '../../static/purchase_off.png'
// Styles
import "./SupplyChain.css";


/**
 * Farmer information either from an existing product or to harvest a new one
 * @returns Render the component
 */
function SupplyChain(props) {

    // Destructure props
    const { state } = props;

    return (
        <div className={`mt-5 ${!state?'d-none':''}`}>
            <MDBRow>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>0?harvestOnImg:harvestOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Harvest (Farmer)</figcaption>
                    </figure>
                </MDBCol>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>1?processOnImg:processOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Process (Farmer)</figcaption>
                    </figure>
                </MDBCol>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>2?packOnImg:packOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Pack (Farmer)</figcaption>
                    </figure>
                </MDBCol>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>3?forsaleOnImg:forsaleOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Put off Sale (Farmer)</figcaption>
                    </figure>
                </MDBCol>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>4?buyOnImg:buyOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Buy (distributor)</figcaption>
                    </figure>
                </MDBCol>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>5?shipOnImg:shipOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Ship (Distributor)</figcaption>
                    </figure>
                </MDBCol>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>6?receiveOnImg:receiveOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Receive (Retailer)</figcaption>
                    </figure>
                </MDBCol>
                <MDBCol>
                    <figure className='figure'>
                        <img src={state>7?purchaseOnImg:purchaseOffImg} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                        <figcaption className='figure-caption text-center'>Purchase (Consumer)</figcaption>
                    </figure>
                </MDBCol>
            </MDBRow>
        </div>
    );
}

export default SupplyChain;