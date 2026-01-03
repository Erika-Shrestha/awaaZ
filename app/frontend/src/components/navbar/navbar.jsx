import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({  openLogin, openRegister  }) =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false); 
        } else {
            setIsDropdownOpen(true); 
        }
    };

    return(
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <div className="feature-dropdown-container">
                    <button className="nav-link dropdown-button" onClick={handleDropdownClick}>Features<span className={isDropdownOpen ? "arrow-icon open" : "arrow-icon"}>▼</span></button>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item">
                                Customized Polls
                            </div>
                            <div className="dropdown-item">
                                Social Media Linking
                            </div>
                            <div className="dropdown-item">
                                Echo Chambers
                            </div>
                            <div className="dropdown-item">
                                Candidate Profiles
                            </div>
                            <div className="dropdown-item">
                                Personalized News Feed
                            </div>
                        </div>
                    )}
                </div>
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
