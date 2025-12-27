import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ setShowLoginModal, setShowRegisterModal }) =>{

    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="nav-links">
                <Link to="/" className="nav-link active">Home</Link>
                <Link to="/features" className="nav-link">Features</Link>
                <Link to="/aboutus" className="nav-link">About Us</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contactus" className="nav-link">Contact Us</Link>
            </div>

            <div className="nav-buttons">
                <button onClick={() => setShowLoginModal(true)} className="btn-login">Login</button>
                <button onClick={() => setShowRegisterModal(true)} className="btn-register">Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
