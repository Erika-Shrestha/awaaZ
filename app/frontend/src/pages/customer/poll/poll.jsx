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

const Poll = () => {
    const [selectedType, setSelectedType] = useState('link');
    const [responseType, setResponseType] = useState('radio');
    const [showOptionPopup, setShowOptionPopup] = useState(false);
    const [position, setPosition] = useState({ x: 300, y: 150 });
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poll