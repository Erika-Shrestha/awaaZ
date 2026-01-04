import './poll.css';
import { useState } from 'react';
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';

const Poll = () => {
    const [selectedType, setSelectedType] = useState('link');
    const [responseType, setResponseType] = useState('radio');
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
                                link
                            </div>
                            <p className="card-label">Link</p>
                            {selectedType === 'link' && <div className="selected-check">✓</div>}
                        </div>
                        <div className={`type-card ${selectedType === 'qr' ? 'selected' : ''}`} onClick={() => setSelectedType('qr')}>
                            <div className="card-preview">
                                link
                            </div>
                            <p className="card-label">QR</p>
                            {selectedType === 'qr' && <div className="selected-check">✓</div>}
                        </div>
                    </div>
                    <div className="poll-details-section">
                        <h2 className="section-title">Poll Details</h2>
                        <div className="info-banner">Please fill in the following fields</div>
                        <div className="form-group">
                            <label className="form-label">Poll Title</label>
                            <input type="text" className="form-input" placeholder="Poll Title" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Poll Title</label>
                            <input type="text" className="form-input" placeholder="Poll Title" />
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
                                <div className="option-header">Option 1</div>
                            </div>
                            <div className="option-box">
                                <div className="option-header">Option 2</div>
                            </div>
                            <div className="option-box">
                                <div className="option-header">Option 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poll