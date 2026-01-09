import './dashboard.css';
import { Chart as ChartJS} from "chart.js/auto";
import {Bar, Doughnut, Line} from "react-chartjs-2";
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';
import socialaccount from "../../../assets/socialaccount.png";
import pollstats from "../../../assets/pollstats.png";
import candidate2 from "../../../assets/candidate-2.jpg";

const Dashboard = () => {
    return(
        <div>
            <CustomerNavbar/>
            <CustomerSidebar/>
            <div className="dashboard-main-content">
                <div className="dashboard-top-container">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <div className="dashboard-cards-container">
                        <div className="dashboard-time-card-wrapper">
                            <div className="dashboard-time-info">
                                <div className="dashboard-date-text">16 Dec, 2025</div>
                                <div className="dashboard-time-text">09:00</div>
                            </div>
                            <div className="dashboard-period-badge">AM</div>
                        </div>
                        <div className="stat-card-container">
                            <div className="stat-label-badge">Socials</div>
                            <div className="stat-content-row">
                            <div className="stat-number-group">
                                <span className="stat-big-number">03</span>
                                <span className="stat-label-text">PROFILES</span>
                            </div>
                            <div className="stat-icon-circle">
                                <img src={socialaccount} alt="step1" className="steps-icon step-1" />
                            </div>
                            </div>
                        </div>
                        <div className="stat-card-container">
                            <div className="stat-label-badge">Polls</div>
                            <div className="stat-content-row">
                            <div className="stat-number-group">
                                <span className="stat-big-number">11</span>
                                <span className="stat-label-text">TOTAL</span>
                            </div>
                            <div className="stat-icon-circle">
                                <img src={pollstats} alt="step1" className="steps-icon step-1" />
                            </div>
                            </div>
                        </div>
                        <div className="stat-card-container">
                            <div className="stat-label-badge">Polls</div>
                            <div className="stat-content-row">
                            <div className="stat-number-group">
                                <span className="stat-big-number">08</span>
                                <span className="stat-label-text">SHARED</span>
                            </div>
                            <div className="stat-icon-circle">
                                <img src={pollstats} alt="step1" className="steps-icon step-1" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-bottom-container">
                    <div className="dominant-profile-card-container">
                        <div className="dominant-profile-image-wrapper">
                        <img src={candidate2} alt="Profile" />
                        </div>
                        
                        <div className="dominant-profile-info-box">
                        <div className="dominant-profile-title-badge">Dominant Politician</div>
                        <div className="dominant-profile-details-list">
                            <div className="dominant-profile-detail-item"><strong>Name:</strong> Aamir Hamid</div>
                            <div className="dominant-profile-detail-item"><strong>Age:</strong> 23</div>
                            <div className="dominant-profile-detail-item"><strong>Gender:</strong> Male</div>
                            <div className="dominant-profile-detail-item"><strong>Party:</strong> Overlay</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard