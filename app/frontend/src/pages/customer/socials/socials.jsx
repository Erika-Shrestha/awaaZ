import './socials.css';
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import youtube from "../../../assets/youtube.png";
import instagram from "../../../assets/instagram.png";
import plus from "../../../assets/plus.png";

const Socials = () => {
    return(
        <div>
            <CustomerNavbar/>
            <CustomerSidebar/>
            <div className="socials-main-content">
                <h1 className="socials-title">Connect a profile you would like to analyze.</h1>
                <div className="platforms-container">
                    <div className="platform-card">
                        <div className="platform-header">
                            <img src={facebook} alt="Facebook" className="platform-icon" />
                            <span className="platform-name">Facebook</span>
                        </div>
                        <div className="platform-content">
                            <button className="profile-add-button">
                                <img src={plus} alt="Add" className="profile-add-button-icon" />
                            </button>
                        </div>
                    </div>
                    <div className="platform-card">
                        <div className="platform-header">
                            <img src={instagram} alt="Instagram" className="platform-icon" />
                            <span className="platform-name">Instagram</span>
                        </div>
                        <div className="platform-content">
                            <button className="profile-add-button">
                                <img src={plus} alt="Add" className="profile-add-button-icon" />
                            </button>
                        </div>
                    </div>
                    <div className="platform-card">
                        <div className="platform-header">
                            <img src={youtube} alt="Youtube" className="platform-icon" />
                            <span className="platform-name">Youtube</span>
                        </div>
                        <div className="platform-content">
                            <button className="profile-add-button">
                                <img src={plus} alt="Add" className="profile-add-button-icon" />
                            </button>
                        </div>
                    </div>
                    <div className="platform-card">
                        <div className="platform-header">
                            <img src={twitter} alt="Twitter" className="platform-icon" />
                            <span className="platform-name">Twitter</span>
                        </div>
                        <div className="platform-content">
                            <button className="profile-add-button">
                                <img src={plus} alt="Add" className="profile-add-button-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials