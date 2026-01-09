import './admin_sidebar.css';
import { NavLink } from 'react-router-dom';

import dashboard from "../../assets/menu.png";
import candidatemanagement from "../../assets/candidate.png";
import profile from "../../assets/profile.png";
import usermanagement from "../../assets/user.png";

const AdminSidebar = () => {
    return(
        <div className="admin-sidebar">
            <NavLink to="/admindashboard" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={dashboard} alt="Dashboard" />
                </div>
                <span className="menu-text">Dashboard</span>
            </NavLink>
            <NavLink to="/usermanagement" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={usermanagement} alt="Dashboard" />
                </div>
                <span className="menu-text">Users</span>
            </NavLink>
            <NavLink to="/candidatemanagement" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={candidatemanagement} alt="Candidate" />
                </div>
                <span className="menu-text">Candidates</span>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
                <div className="menu-icon">
                    <img src={profile} alt="Profile" />
                </div>
                <span className="menu-text">Profile</span>
            </NavLink>
        </div>
    )
}

export default AdminSidebar;