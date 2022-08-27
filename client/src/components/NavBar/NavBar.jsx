// Node modules
// Own imports
// Components
// MDB Components
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBInputGroup, MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit';
// Statics
import logo from "../../static/logo.png";
// Styles
import "./NavBar.css";


/**
 * Application navbar component
 * @returns Render the component
 */
function NavBar(props) {

    // Props destructuring
    const network = props.network || 'not connected';
    const account = props.account || '0x0000000000000000000000000000000000000000000000000000000000000000';

    return (
        <MDBNavbar light bgColor='light' fixed='top'>
            <MDBContainer>
                <MDBNavbarBrand href='#'>
                    <img src={logo} height='30' alt='' loading='lazy' /> CoffeBean Supply Chain 
                </MDBNavbarBrand>
                <MDBInputGroup tag="form" className='d-flex w-auto'>
                    <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                        {network}
                    </MDBNavbarLink>
                    <MDBBtn className='mx-2' color='danger'>
                        Connect Metamask
                    </MDBBtn>
                    <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                        {`${account.substring(0,5)}...${account.substring(account.length-4)}`}
                    </MDBNavbarLink>
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavBar;