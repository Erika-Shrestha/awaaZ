import './poll.css';
import { useState } from 'react';
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';
import tick from "../../../assets/tick.png";
import mockup from "../../../assets/mockup.png";
import optionadd from "../../../assets/option-add.png";
import candidate1 from "../../../assets/candidate-1.jpg";
import candidate2 from "../../../assets/candidate-2.jpg";
import candidate3 from "../../../assets/candidate-3.jpg";
import copy from "../../../assets/copy.png";
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import expand from "../../../assets/expandarrow.png";

const Poll = () => {
    const [selectedType, setSelectedType] = useState('link');
    const [responseType, setResponseType] = useState('radio');
    const [showOptionPopup, setShowOptionPopup] = useState(false);
    const [showPostPopup, setShowPostPopup] = useState(false);
    const [position, setPosition] = useState({ x: 300, y: 150 });
    const [openPollPlatform, setOpenPollPlatform] = useState([]);
    return(
        <div>
            <CustomerNavbar/>
            <CustomerSidebar/>
            <div className="poll-main-content">
                <div className="poll-creation">
                    <h1 className="poll-title">Select type and platform you want to post on</h1>
                    <div className="type-selection">
                        <div className={`type-card ${selectedType === 'link' ? 'selected' : ''}`} onClick={() => setSelectedType('link')}>
                            <div className="card-preview">
                                <img src={mockup} alt="mockup" />
                            </div>
                            {selectedType === 'link' && <div className="selected-check">
                                <img src={tick} alt="tick" />
                                </div>}
                        </div>
                        <div className={`type-card ${selectedType === 'qr' ? 'selected' : ''}`} onClick={() => setSelectedType('qr')}>
                            <div className="card-preview">
                                <img src={mockup} alt="mockup" />
                            </div>
                            {selectedType === 'qr' && <div className="selected-check">
                                    <img src={tick} alt="tick" />
                                </div>}
                        </div>
                    </div>
                    <div className="type-labels-container">
                        <p className="card-label">Link</p>
                        <p className="card-label">QR Code</p>
                    </div>
                    <div className="poll-details-section">
                        <h2 className="section-title">Poll Details</h2>
                        <div className="info-banner">Please fill in the following fields</div>
                        <div className="form-group">
                            <label className="form-label">Poll Title</label>
                            <input type="text" className="form-input" placeholder="Poll Title" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Question</label>
                            <input type="text" className="form-input" placeholder="Question" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Response Type</label>
                            <div className="response-type-buttons">
                                <button className={`response-btn ${responseType === 'radio' ? 'active' : ''}`} onClick={() => setResponseType('radio')}>Radio</button>
                                <button className={`response-btn ${responseType === 'checkbox' ? 'active' : ''}`} onClick={() => setResponseType('checkbox')}>Checkbox</button>
                            </div>
                        </div>
                        <div className="options-container">
                            <div className="option-box">
                                <div className="option-header">
                                    <button className="option-add-button" onClick={() => setShowOptionPopup(true)}>
                                        <span className="option-add-text">Add</span>
                                        <img src={optionadd} alt="option-add-icon" />
                                    </button>
                                    {showOptionPopup && (
                                        <div className="option-popup-overlay" onClick={() => setShowOptionPopup(false)}>
                                            <div className="candidate-popup"
                                                style={{
                                                    left: position.x,
                                                    top: position.y,
                                                    transform: "none",
                                                }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <div className="option-popup-header"
                                                    onMouseDown={(e) => {
                                                        const startX = e.clientX - position.x;
                                                        const startY = e.clientY - position.y;

                                                        const onMouseMove = (moveEvent) => {
                                                        setPosition({
                                                            x: moveEvent.clientX - startX,
                                                            y: moveEvent.clientY - startY,
                                                        });
                                                        };

                                                        const onMouseUp = () => {
                                                        document.removeEventListener("mousemove", onMouseMove);
                                                        document.removeEventListener("mouseup", onMouseUp);
                                                        };

                                                        document.addEventListener("mousemove", onMouseMove);
                                                        document.addEventListener("mouseup", onMouseUp);
                                                    }}
                                                >
                                                    <h3 className="option-popup-title">Select An Option</h3>
                                                    <button className="option-close-button" onClick={() => setShowOptionPopup(false)}>×</button>
                                                </div>
                                                <div className="option-search-container">
                                                    <input type="text" className="option-search-input" placeholder="Search candidate" />
                                                </div>
                                                <div className="option-list">
                                                    <div className="candidate-item">
                                                        <img src={candidate1} alt="Candidate" className="option-avatar" />
                                                        <span className="option-name">Sirjan Bhutia</span>
                                                        <button className="option-select-button">Select</button>
                                                    </div>
                                                    <div className="candidate-item">
                                                        <img src={candidate2} alt="Candidate" className="option-avatar" />
                                                        <span className="option-name">Bipin Shrestha</span>
                                                        <button className="option-select-button">Select</button>
                                                    </div>
                                                    <div className="candidate-item">
                                                        <img src={candidate3} alt="Candidate" className="option-avatar" />
                                                        <span className="option-name">Girija Prasad</span>
                                                        <button className="option-select-button">Select</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="post-container">
                            <button className="post-btn"onClick={() => setShowPostPopup(true)}>Post</button>
                            {showPostPopup && (
                                <div className="share-popup-overlay">
                                    <div className="share-popup">
                                        <button className="share-close-button" onClick={() => setShowPostPopup(false)}>×</button>
                                        <h2 className="share-title">Share With Friends</h2>
                                        <div className="link-container">
                                            <input type="text" className="link-input"value="https://docs.google.com/forms/d/1CVbzCKXdB3OuULa6bGcHgJRd42/edit#responses" readOnly />
                                            <button className="copy-button">
                                                <img src={copy} alt="Copy"/>
                                            </button>
                                        </div>
                                        <div className="profile-section">
                                            <img src={candidate1} alt="Candidate" className="option-avatar" />
                                        </div>
                                        <button className="share-button"onClick={() => setShowPostPopup(false)}>Share</button>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="poll-platforms-container">
                    <div className="poll-platforms-box">
                        <div className="poll-platform-item">
                            <div className="poll-platform-header">
                                <div className="poll-platform-left-section">
                                <img src={instagram} alt="Instagram" className="platform-icon" />
                                <span className="poll-platform-name">Instagram</span>
                                </div>
                                <img src={expand} alt="Instagram" onClick={() => setOpenPollPlatform(openPollPlatform === 'instagram' ? null : 'instagram')} className={`poll-platform-arrow ${openPollPlatform === 'instagram' ? 'open' : ''}`}/>
                            </div>
                            {openPollPlatform === 'instagram' && (
                                <div className="poll-account-section">
                                    <input type="radio" name="poll-account" className="poll-account-radio" />
                                    <span className="poll-account-name">tivona.bhutia123</span>
                                </div>
                            )}
                        </div>
                        <div className="poll-platform-item">
                            <div className="poll-platform-header">
                                <div className="poll-platform-left-section">
                                <img src={twitter} alt="Twitter" className="platform-icon" />
                                <span className="poll-platform-name">Twitter</span>
                                </div>
                                <img src={expand} alt="Twitter" onClick={() => setOpenPollPlatform(openPollPlatform === 'twitter' ? null : 'twitter')} className={`poll-platform-arrow ${openPollPlatform === 'twitter' ? 'open' : ''}`} />
                            </div>
                            {openPollPlatform === 'twitter' && (
                                <div className="poll-account-section">
                                    <input type="radio" name="poll-account" className="poll-account-radio" />
                                    <span className="poll-account-name">tivona.bhutia123</span>
                                </div>
                            )}
                        </div>
                        <div className="poll-platform-item">
                            <div className="poll-platform-header">
                                <div className="poll-platform-left-section">
                                <img src={facebook} alt="Facebook" className="platform-icon" />
                                <span className="poll-platform-name">Facebook</span>
                                </div>
                                <img src={expand} alt="Twitter" onClick={() => setOpenPollPlatform( openPollPlatform === 'facebook' ? null : 'facebook')} className={`poll-platform-arrow ${openPollPlatform === 'facebook' ? 'open' : ''}`} />
                            </div>
                            {openPollPlatform === 'facebook' && (
                                <div className="poll-account-section">
                                    <input type="radio" name="poll-account" className="poll-account-radio" />
                                    <span className="poll-account-name">tivona.bhutia123</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poll