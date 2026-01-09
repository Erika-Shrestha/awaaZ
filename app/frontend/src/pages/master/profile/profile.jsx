import './profile.css';
import {useState} from 'react';
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';
import AdminSidebar from '../../../components/admin_sidebar/admin_sidebar';
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import youtube from "../../../assets/youtube.png";
import avatar_1 from "../../../assets/woman.png";
import gallery from "../../../assets/gallery.png";

const Profile = () => {
    const role = "ADMIN";
    const [facebookToggle, setFacebookToggle] = useState(false);
    const [twitterToggle, setTwitterToggle] = useState(true);
    const [youtubeToggle, setYoutubeToggle] = useState(true);

    return(
        <div>
            <CustomerNavbar/>
            {role === "ADMIN" ? <AdminSidebar /> : <CustomerSidebar />}
            <div className="profile-main-content">
                <div className="customer-main-content">
                    <div className="customer-profile-left-section">
                        <div className="profile-image-section">
                            <h3 className="customer-profile-section-title">PROFILE IMAGE</h3>
                            <div className="customer-profile-image-container">
                                <img src={avatar_1} alt="Instagram" className="customer-profile-image" />
                            </div>
                            <button className="change-image-button">
                                <img src={gallery} alt="Instagram"/>
                                Change Profile Image
                            </button>
                        </div>
                        <div className="my-details-section">
                            <h3 className="customer-profile-section-title">MY DETAILS</h3>
                            <div className="profile-form-group">
                                <label className="profile-form-label">Name</label>
                                <input type="text" className="profile-form-input detail" placeholder="Name" />
                            </div>
                            <div className="profile-form-group">
                                <label className="profile-form-label">Email Address</label>
                                <input type="email" className="profile-form-input detail" placeholder="Email Address" />
                            </div>
                            <div className="profile-form-group">
                                <label className="profile-form-label">Phone Number</label>
                                <input type="tel" className="profile-form-input detail" placeholder="Phone Number" />
                            </div>
                            <div className="profile-form-group">
                                <label className="profile-form-label">Username</label>
                                <input type="text" className="profile-form-input detail" placeholder="Username" />
                            </div>
                            <div className="profile-form-actions">
                                <button className="profile-save-button">Save Changes</button>
                                <button className="profile-cancel-button">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="customer-profile-middle-section">
                        <div className="inboxes">
                            <div className="info-box">
                                <h4 className="info-title">ONBOARDED</h4>
                                <p className="info-date">28.10.2025</p>
                            </div>
                            <div className="info-box">
                                <h4 className="info-title">ROLE</h4>
                                <p className="info-role">User</p>
                            </div>
                        </div>
                        <div className="change-password-section">
                            <h3 className="customer-profile-section-title">CHANGE PASSWORD</h3>
                            <div className="profile-form-group">
                                <label className="profile-form-label">Current Password</label>
                                <input type="password" className="profile-form-input" placeholder="Current Password" />
                            </div>
                            <div className="profile-form-group">
                                <label className="profile-form-label">New Password</label>
                                <input type="password" className="profile-form-input" placeholder="New Password" />
                            </div>

                            <div className="password-requirements">
                                <div className="requirement-item active">
                                    <span className="requirement-dot"></span>
                                    <span className="requirement-text">Minimum characters 12</span>
                                </div>
                                <div className="requirement-item">
                                    <span className="requirement-dot"></span>
                                    <span className="requirement-text">One uppercase character</span>
                                </div>
                                <div className="requirement-item">
                                    <span className="requirement-dot"></span>
                                    <span className="requirement-text">One lowercase character</span>
                                </div>
                                <div className="requirement-item active">
                                    <span className="requirement-dot"></span>
                                    <span className="requirement-text">One special character</span>
                                </div>
                                <div className="requirement-item">
                                    <span className="requirement-dot"></span>
                                    <span className="requirement-text">One number</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer-profile-right-section">
                        <div className="connected-socials">
                            <h3 className="customer-profile-section-title">CONNECTED SOCIALS</h3>
                            <p className="socials-subtitle">Below shows all the listed socials you have linked</p>
                            <div className="social-item">
                                <div className="social-info">
                                    <div className="social-icon facebook-icon">
                                    <img src={facebook} alt="Facebook" />
                                    </div>
                                    <span className="social-username">tivona_bhutia</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={facebookToggle} onChange={() => setFacebookToggle(!facebookToggle)}/>
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="social-item">
                                <div className="social-info">
                                    <div className="social-icon twitter-icon">
                                        <img src={twitter} alt="Twitter" />
                                    </div>
                                    <span className="social-username">tivonab333</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={twitterToggle} onChange={() => setTwitterToggle(!twitterToggle)}/>
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                            <div className="social-item">
                                <div className="social-info">
                                    <div className="social-icon twitter-icon">
                                        <img src={youtube} alt="Youtube" />
                                    </div>
                                    <span className="social-username">tivona bhutia</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" checked={youtubeToggle} onChange={() => setYoutubeToggle(!youtubeToggle)}/>
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile