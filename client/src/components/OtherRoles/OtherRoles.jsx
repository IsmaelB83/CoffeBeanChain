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


// Constants
const actors = [
    { id:'', balance: 0, description: 'Distributor', image: distributorImg, actions: ['Buy', 'Ship']},
    { id:'', balance: 0, description: 'Retailer', image: retailerImg, actions: ['Receive']},
    { id:'', balance: 0, description: 'Consumer', image: consumerImg, actions: ['Purchase']}
];

/**
 * Farmer information either from an existing product or to harvest a new one
 * @returns Render the component
 */
function OtherRoles(props) {

    // Props destructuring
    const { distributorID, distributorBalance } = props.distributor;
    const { retailerID, retailerBalance } = props.retailer;
    const { consumerID, consumerBalance } = props.consumer;

    actors[0].id = distributorID;
    actors[0].balance = distributorBalance;
    actors[1].id = retailerID;
    actors[1].balance = retailerBalance;
    actors[1].id = consumerID;
    actors[1].balance = consumerBalance;

    return (
        <div className="mt-5">
            <MDBTypography tag='div' className='display-6 mb-2'>
                Distributor, Retailer and Consumer
            </MDBTypography>
            <MDBRow>
                {
                    actors.map((actor, i) => {
                        return <Role key={i} image={actor.image} description={actor.description} id={actor.id} balance={actor.balance} actions={actor.actions} />
                    })
                }
            </MDBRow>
        </div>
    );
}

/**
 * Render the info about a specific role in the supply chain
 * @param {*} props 
 * @returns 
 */
const Role = (props) => {
    return (
        <MDBCol>
            <MDBRow>
                <div className='mb-4'>
                    <img src={props.image} className='img-fluid shadow-4 imgRole' alt=""/>
                </div>
            </MDBRow>
            <MDBRow>
                <form>
                    <MDBInput className='mb-4' id={`${props.description}AccountID`} disabled label='Account ID' value={props.id}/>
                    <MDBInput className='mb-4' id={`${props.description}BalanceID`} disabled type='number' label='Balance ETH' value={props.balance}/>
                    <MDBInput className='mb-4' id={`${props.description}Payment`} type='number' disabled label=''/>
                </form>
            </MDBRow>
            <MDBRow>
                <MDBBtnGroup shadow="0" aria-label='Actions'>
                    {
                        props.actions.map((action, i) => {
                            return (<MDBBtn key={i} color="danger" rounded>{action} </MDBBtn>)
                        })
                    }
                </MDBBtnGroup>
            </MDBRow>
        </MDBCol>
    );
}

export default OtherRoles;