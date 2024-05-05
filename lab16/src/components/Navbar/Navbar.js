import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <h1>
                Travel Destination
            </h1>
            <h2>
                <Link to="/">Home</Link>
            </h2>
        </nav>
    )
}

export default Navbar;