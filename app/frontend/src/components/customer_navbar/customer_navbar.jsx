import './customer_navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import avatar_1 from "../../assets/woman.png";
import bell from "../../assets/bell.png";
import offline from "../../assets/offline.png";
import dropdown from "../../assets/down-arrow.png";

const CustomerNavbar = () => {
    return(
        <div className="customer-navbar-container">
            <div className="customer-navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="customer-navbar-header-right">
                <div className="customer-navbar-search-container">
                    <input type="text" placeholder="Search" className="navbar-search-input"/>
                    <button className="navbar-search-button">
                        <img src={search} alt="search" />
                    </button>
                </div>
                <div className="status-dropdown-container">
                    <button className="status-button">
                        <img src={offline} alt="Logo" />
                        Offline
                        <img src={dropdown} alt="Logo" />
                    </button>
                </div>
                <button className="notification-button">
                    <img src={bell} alt="bell" />
                </button>
                <div className="profile-picture">
                    <img src={avatar_1} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default CustomerNavbar