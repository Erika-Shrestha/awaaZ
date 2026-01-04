import './customer_sidebar.css';
import { NavLink } from 'react-router-dom';

import dashboard from "../../assets/menu.png";
import candidate from "../../assets/candidate.png";
import socials from "../../assets/social.png";
import poll from "../../assets/poll.png";
import profile from "../../assets/profile.png";
import setting from "../../assets/settings.png";

const CustomerSidebar = () => {
    return(
        <div className="customer-sidebar">
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={dashboard} alt="Dashboard" />
                </div>
                <span className="menu-text">Dashboard</span>
            </NavLink>
            <NavLink to="/candidate" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={candidate} alt="Candidate" />
                </div>
                <span className="menu-text">Candidates</span>
            </NavLink>
            <NavLink to="/socials" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={socials} alt="Socials" />
                </div>
                <span className="menu-text">Socials</span>
            </NavLink>
            <NavLink to="/poll" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={poll} alt="Poll" />
                </div>
                <span className="menu-text">Polls</span>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={profile} alt="Profile" />
                </div>
                <span className="menu-text">Profile</span>
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={setting} alt="Settings" />
                </div>
                <span className="menu-text">Settings</span>
            </NavLink>
        </div>
    )
}

export default CustomerSidebar;