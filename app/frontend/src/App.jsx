import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { useState } from "react";
import HomeDisplay from './pages/master/home/home';
import AboutUsDisplay from './pages/master/aboutus/aboutus';
import BlogDisplay from './pages/master/blog/blog';
import ContactUsDisplay from './pages/master/contactus/contactus';
import DashboardDisplay from './pages/customer/dashboard/dashboard';
import CandidateDisplay from './pages/customer/candidate/candidate';
import SocialsDisplay from './pages/customer/socials/socials';
import PollDisplay from './pages/customer/poll/poll';
import ProfileDisplay from './pages/master/profile/profile';
import AdminDashboardDisplay from './pages/Admin/admindashboard/admindashboard';
import UserManagementDisplay from './pages/Admin/usermanagement/usermanagement';
import CandidateManagementDisplay from './pages/Admin/candidatemanagement/candidatemanagement';
import Navbar from './components/navbar/navbar';
import register from "./assets/register_step_1.png";
import avatar_1 from "./assets/woman.png";
import avatar_2 from "./assets/man.png";
import avatar_3 from "./assets/old-man.png";
import lock from "./assets/lock.png";
import './App.css';

function Layout({ openLogin, openRegister }) {
    const location = useLocation(); 
    const hideNavbarRoutes  = ["/candidate", "/dashboard", "/poll", "/settings", "/socials", "/profile", "/admindashboard", "/usermanagement", "/candidatemanagement"];
    const hideNavbar = hideNavbarRoutes.includes(location.pathname);

    return (
        <>
            {!hideNavbar && (
                <Navbar openLogin={openLogin} openRegister={openRegister} />
            )}

            <Routes>
                <Route path="/" element={<HomeDisplay />} />
                <Route path="/aboutus" element={<AboutUsDisplay />} />
                <Route path="/blog" element={<BlogDisplay />} />
                <Route path="/contactus" element={<ContactUsDisplay />} />
                <Route path="/dashboard" element={<DashboardDisplay />} />
                <Route path="/candidate" element={<CandidateDisplay />} />
                <Route path="/socials" element={<SocialsDisplay />} />
                <Route path="/poll" element={<PollDisplay />} />
                <Route path="/profile" element={<ProfileDisplay />} />
                <Route path="/admindashboard" element={<AdminDashboardDisplay />} />
                <Route path="/usermanagement" element={<UserManagementDisplay />} />
                <Route path="/candidatemanagement" element={<CandidateManagementDisplay />} />
            </Routes>
        </>
    );
}

function App() {

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

    const closeLogin = () => setShowLoginModal(false);

    return (
    <Router>
        <Layout openLogin={openLogin} openRegister={openRegister} />
        {showLoginModal && (
        <div className="login-modal">
            <div className="modal-content">
                <button className="close-button" onClick={closeLogin}>&times;</button>
                <img src={lock} alt="login-img" className="login-img" />
                <h1 className="login-title">Login to your account</h1>
                <p className="login-subtitle">Enter your login credential</p>
                <div className="form-wrapper">
                <div className="input-group">
                    <input type="text" placeholder="Enter your username, email or number" className="input-field" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Enter your password" className="input-field" />
                </div>
                </div>
                <button className="login-button" onClick={closeLogin}>Login</button>
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
    </Router>
    )
}

export default App
