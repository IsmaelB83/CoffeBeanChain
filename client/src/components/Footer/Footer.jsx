// Node modules
// Own imports
// Components
// MDB Components
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
// Statics
// Styles
import "./Footer.css";


/**
 * Application navbar component
 * @returns Render the component
 */
function Footer(props) {

    return (
        <MDBFooter className='bg-light text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#0082ca' }}
                        href='https://www.linkedin.com/in/ismael-bernal-10497a51/'
                        role='button'
                    >
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#333333' }}
                        href='http://github.com/IsmaelB83'
                        role='button'
                    >
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>
            </MDBContainer>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Desarrollado por <a className='text-white' href='https://github.com/IsmaelB83'> Ismael Bernal </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;