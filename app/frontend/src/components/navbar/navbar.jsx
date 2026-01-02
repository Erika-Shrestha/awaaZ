import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({  openLogin, openRegister  }) =>{

    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/features" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Features</NavLink>
                <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
                <NavLink to="/contactus" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink>
            </div>

            <div className="nav-buttons">
                <button onClick={openLogin} className="btn-login">Login</button>
                <button onClick={openRegister} className="btn-register">Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
