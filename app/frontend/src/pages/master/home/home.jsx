import './home.css';
import Navbar from '../../../components/navbar/navbar';
import Footer from '../../../components/footer/footer';
import intro from "../../../assets/intro.png";
import lock from "../../../assets/lock.png";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import twitter from "../../../assets/twitter.png";
import step_1_1 from "../../../assets/step_1_1.png";
import step_1_2 from "../../../assets/step_1_2.png";
import step_2 from "../../../assets/step_2.png";
import step_3 from "../../../assets/step_3.png";
import register from "../../../assets/register_step_1.png";
import avatar_1 from "../../../assets/woman.png";
import avatar_2 from "../../../assets/man.png";
import avatar_3 from "../../../assets/old-man.png";
import { useState } from 'react';

const Home = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const openLogin = () => {
        setShowRegisterModal(false);
        setShowLoginModal(true);
        setStep(1);
    };

    const openRegister = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
        setStep(1);
    };

    const closeRegister = () => {
        setShowRegisterModal(false);
        setStep(1);
    };
    return(
        <div>
            <div className="wrapper">
                <Navbar setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal}/>
                <section className="head-section">
                    <div className="intro-div">
                        <div className="hero-content">
                            <h1 className="hero-title">
                            Best tool to <span className="text-highlight">break</span> your media bubble
                            </h1>
                            <p className="hero-description">
                            Link your social accounts, discover unbiased perspectives, and best evaluate with echo chambers through awaaZ.
                            </p>
                            <button className="btn-primary">Learn More</button>
                        </div>
                        <img src={intro} alt="intro" className="intro" />
                    </div>
                </section>
                <div className="socials-banner">
                    <div className="socials">
                        <img src={facebook} alt="app" className="socials-icon" />
                        <h2>Facebook</h2>
                    </div>
                    <div className="socials">
                        <img src={youtube} alt="app" className="socials-icon" />
                        <h2>Youtube</h2>
                    </div>
                    <div className="socials">
                        <img src={twitter} alt="app" className="socials-icon" />
                        <h2>Twitter</h2>
                    </div>
                </div>
                <section className="steps-section">
                    <div className="steps-header">
                        <div className="steps-badge">Steps</div>
                        <h2 className="steps-title">
                            Discover your <span className="text-pink">journey</span> to unbiased insights
                        </h2>
                    </div>
                    <div className="sticky-wrapper">
                        <div className="sticky-card step-1">
                            <div className="step-number step-1">1</div>
                            <div className="visual-box">
                            <img src={step_1_1} alt="step1" className="steps-icon step-1" />
                            <img src={step_1_2} alt="step1" className="steps-icon step-1" />
                            </div>
                            <div className="feature-text step-1">
                                <h3 className="feature-title">Link Your <span className="text-orange">Social</span></h3>
                                <p className="feature-description">
                                    Connect your accounts so AwaaZ can analyze your feed and give you unbiased insights tailored to your media habits.
                                </p>
                            </div>
                        </div>
                        <div className="sticky-card step-2">
                            <div className="step-number step-2">2</div>
                            <div className="visual-box step-2">
                                <img src={step_2} alt="step2" className="steps-icon step-2" />
                            </div>
                            <div className="feature-text step-2">
                                <h3 className="feature-title">Explore Your <span className="text-orange">Personalized</span> Dashboard</h3>
                                <p className="feature-description">
                                Get a complete picture of your media bubble, including the candidates and parties you encounter most and the echo chambers shaping your perspective.
                                </p>
                            </div>
                        </div>
                        <div className="sticky-card step-3">
                            <div className="step-number step-3">3</div>
                            <div className="visual-box step-3">
                            <img src={step_3} alt="step3" className="steps-icon step-3" />
                            </div>
                            <div className="feature-text step-3">
                                <h3 className="feature-title">Link Your <span className="text-orange">Social</span></h3>
                                <p className="feature-description">
                                Discover all candidates, including those you might have missed, for a full understanding of your options.
                                </p>
                            </div>
                        </div>
                        <div className="sticky-card step-4">
                            <div className="step-number step-4">4</div>
                            <div className="visual-box step-4">
                                <img src={step_2} alt="step4" className="steps-icon step-4" />
                            </div>
                            <div className="feature-text step-4">
                                <h3 className="feature-title">Let Your<span className="text-orange"> Network</span> Decide</h3>
                                <p className="feature-description">
                                Share your polls with friends and followers to get diverse perspectives and insights before making decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="views">
                    he
                </div>
                {showLoginModal && (
                    <div className="login-modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={() => setShowLoginModal(false)}>&times;</button>
                            <img src={lock} alt="login-img" className="login-img" />
                            <h1 className="login-title">Login to your account</h1>
                            <p className="login-subtitle">Enter your login credential</p>
                            <div className="form-wrapper">
                                <div className="input-group">
                                    <input type="text" placeholder="Enter your username, email or number" className="input-field"/>
                                </div>
                                <div className="input-group">
                                    <input placeholder="Enter your password" className="input-field"/>
                                </div>
                            </div>
                            <button className="login-button" onClick={() => setShowLoginModal(false)}>Login</button>
                            <div className="register-section">
                                <div className="register-line"></div>
                                <div className="register-content">
                                    <span className="register-text">Don't have an account? </span>
                                    <button className="register-link" onClick={openRegister}>Register Now</button>
                                </div>
                                <div className="register-line"></div>
                            </div>
                        </div>
                    </div>
                )}
                {showRegisterModal && (
                    <div className="login-modal">
                        <div className="modal-content register">
                            <button className="close-button" onClick={closeRegister}>&times;</button>
                            <div className="progress-indicator">
                                <div className={`progress-bar ${step >= 1 ? 'active' : ''}`}></div>
                                <div className={`progress-bar ${step >= 2 ? 'active' : ''}`}></div>
                            </div>
                            {step === 1 && (
                                <div>
                                    <img src={register} alt="step4" className="register-img" />
                                    <h1 className="login-title">Register Your Account</h1>
                                    <div className="form-wrapper">
                                        <div className="input-group name">
                                            <label>Name *</label>
                                            <input type="text" placeholder="Enter your full name" className="input-field"/>
                                        </div>
                                        <div className="email-phone-input">
                                            <div className="input-group">
                                                <label>Email *</label>
                                                <input placeholder="Enter your email" className="input-field short"/>
                                            </div>
                                            <div className="input-group">
                                                <label>Phone Number *</label>
                                                <input placeholder="Enter your numebr" className="input-field short"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="register-button">
                                        <button onClick={nextStep} className="btn btn-primary">
                                        Next
                                        </button>
                                    </div>
                                    <div className="register-section">
                                        <div className="register-line"></div>
                                        <div className="register-content">
                                            <span className="register-text">Already have an account? </span>
                                            <button className="register-link" onClick={openLogin}>Login</button>
                                        </div>
                                        <div className="register-line"></div>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="form-wrapper">
                                    <h1 className="title">Choose Your Avatar</h1>
                                    <div className="avatar-box">
                                        <div className="avatar">
                                            <img src={avatar_1} alt="avatar-img" />
                                        </div>
                                        <div className="avatar">
                                            <img src={avatar_2} alt="avatar-img" />
                                        </div>
                                        <div className="avatar">
                                            <img src={avatar_3} alt="avatar-img" />
                                        </div>
                                    </div>
                                    <div className="input-group username">
                                        <label>Username *</label>
                                        <input type="text" placeholder="Enter a proper username" className="input-field"/>
                                    </div>
                                    <div className="password-input">
                                        <div className="input-group">
                                            <label>Password *</label>
                                            <input placeholder="Enter password" className="input-field short"/>
                                        </div>
                                        <div className="input-group">
                                            <label>Confirm Password *</label>
                                            <input placeholder="Re Enter your password" className="input-field short"/>
                                        </div>
                                    </div>
                                    <div className="requirement-list">
                                        <div className="requirement-item">
                                            <div className="indicator"></div>
                                            <span className="requirement-text">Minimum characters 12</span>
                                        </div>
                                        <div className="requirement-item">
                                            <div className="indicator"></div>
                                            <span className="requirement-text">One uppercase character</span>
                                        </div>
                                        <div className="requirement-item">
                                            <div className="indicator"></div>
                                            <span className="requirement-text">One lowercase character</span>
                                        </div>
                                        <div className="requirement-item">
                                            <div className="indicator"></div>
                                            <span className="requirement-text">One special character</span>
                                        </div>
                                        <div className="requirement-item">
                                            <div className="indicator"></div>
                                            <span className="requirement-text">One number</span>
                                        </div>
                                    </div>
                                    <div className="register-button step2">
                                        <button onClick={prevStep} className="btn btn-secondary">Back</button>
                                        <button className="" onClick={closeRegister}>Register</button>
                                    </div>
                                    <div className="register-section step2">
                                        <div className="register-line"></div>
                                        <div className="register-content">
                                            <span className="register-text">Already have an account? </span>
                                            <button className="register-link" onClick={openLogin}>Login</button>
                                        </div>
                                        <div className="register-line"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;