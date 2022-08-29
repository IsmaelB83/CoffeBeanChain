// Node modules
import React, { useState } from 'react';
// Own imports
// Components
// MDB Components
import { MDBInputGroup, MDBBtn, MDBTypography} from 'mdb-react-ui-kit';
// Statics
// Styles
import "./SearchProduct.css";


/**
 * Application navbar component
 * @returns Render the component
 */
function SearchProduct(props) {

    // State
    const [upc, setUpc ] = useState("");

    // Props
    const { onSearch } = props;

    return (
        <React.Fragment>
            <MDBTypography tag='div' className='display-6 mb-2'>
                Search product in blockchain
            </MDBTypography>
            <MDBInputGroup>
                <input className='form-control' placeholder="enter the unified product code (upc)" type='text' onChange={e => setUpc(e.target.value)}/>
                <MDBBtn onClick={ev=>onSearch(upc)}>Search</MDBBtn>
            </MDBInputGroup>
        </React.Fragment>
    );
}

export default SearchProduct;