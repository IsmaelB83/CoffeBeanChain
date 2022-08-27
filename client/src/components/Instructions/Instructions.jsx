// Node modules
// Own imports
// Components
// MDB Components
import { MDBTypography } from 'mdb-react-ui-kit';
// Statics
// Styles
import "./Instructions.css";


/**
 * Instructions component
 * @returns Render the component
 */
export default function Instructions() {
    return (
        <MDBTypography note noteColor='primary'>
            <strong>Instructions:</strong> You can either find an existing product in the blockchain or harvest a new one by providing farm facility information.
            Once the product is harvested the farmer can: process, pack and put for sale in the market. Once that is done an existing distributor may buy the product, ship it to an existing retailer and then be purchased by the final consumer. During all these steps the blockchain technology guarantees the irrevocable tracking of the product, from the harvest to the cup of the consumer as well as all those intermediary that take place in the process.
        </MDBTypography>    
    );
}