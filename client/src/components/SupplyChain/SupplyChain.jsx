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

// Constants
const steps = [
    { step: 0, name: 'Harvest (Farmer)', onImage: harvestOnImg, offImage: harvestOffImg},
    { step: 1, name: 'Process (Farmer)', onImage: processOnImg, offImage: processOffImg},
    { step: 2, name: 'Pack (Farmer)', onImage: packOnImg, offImage: packOffImg},
    { step: 3, name: 'Put on Sale (Farmer)', onImage: forsaleOnImg, offImage: forsaleOffImg},
    { step: 4, name: 'Buy (distributor)', onImage: buyOnImg, offImage: buyOffImg},
    { step: 5, name: 'Ship (Distributor)', onImage: shipOnImg, offImage: shipOffImg},
    { step: 6, name: 'Receive (Retailer)', onImage: receiveOnImg, offImage: receiveOffImg},
    { step: 7, name: 'Purchase (Consumer)', onImage: purchaseOnImg, offImage: purchaseOffImg},
]

/**
 * Farmer information either from an existing product or to harvest a new one
 * @returns Render the component
 */
function SupplyChain(props) {

    // Destructure props
    const { state } = props;

    return (
        <div className={`SupplyChain mt-5 ${!state?'d-none':''}`}>
            <MDBRow>
                {
                    steps.map((action,i) => {
                        return (<SuplyChainStep state={state} step={action.step} onImage={action.onImage} offImage={action.offImage} name={action.name}/>)
                    })
                }
            </MDBRow>
        </div>
    );
}

const SuplyChainStep = props => {

    const { state, step, onImage, offImage, name } = props;

    return (
        <MDBCol>
            <figure className={`figure ${state>=step?'step-active':''}`}>
                <img src={state>=step?onImage:offImage} className='img-fluid shadow-4 imgFarmer rounded-pill' alt=""/>
                <figcaption className='figure-caption text-center'>{name}</figcaption>
            </figure>
        </MDBCol>
    )
}

export default SupplyChain;