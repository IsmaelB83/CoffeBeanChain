// Node modules
// Own imports
import { EthProvider } from "./contexts/EthContext";
// MDB Components
import { MDBContainer} from 'mdb-react-ui-kit';
// Components
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Instructions from "./components/Instructions/Instructions"
import FarmRole from "./components/FarmRole/FarmRole"
import SupplyChain from "./components/SupplyChain/SupplyChain"
import OtherRoles from "./components/OtherRoles/OtherRoles"
import SearchProduct from "./components/SearchProduct/SearchProduct"
// Statics


// Styles
import './App.css'

function App() {
    // Render
    return (
        <EthProvider>
            <NavBar/>    
            <MDBContainer className="mt-4 mb-4 mainContainer" id="App" >
                <Instructions/>
                <SearchProduct/>
                <SupplyChain state={3}/>
                <FarmRole farm={{}} product={{}} />
                <OtherRoles distributor={{}} retailer={{}} consumer={{}} />
            </MDBContainer>
            <Footer/>
        </EthProvider>
    );
}

export default App;
