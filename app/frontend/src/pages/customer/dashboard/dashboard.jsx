import './dashboard.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
import {Bar, Doughnut, Line} from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);
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
                <div className="dashboard-middle-container">
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
                    <div className="mediabubble-card-container">
                        <div className="mediabubble-title-container">
                            <h1>Media Bubble Analysis</h1>
                        </div>
                            <div className="doughnut-chart">
                                <Doughnut
                                    data = {{
                                        labels: ['Yes','No'],
                                        datasets: [{
                                            data: [10, 20],
                                            backgroundColor:["rgba(49,46,140,0.7)","rgba(182, 94, 186, 0.7)"]
                                        }]
                                    }}
                                    options={{
                                        plugins:{
                                            legend:{
                                                position: "right",
                                                align: "start"
                                            }
                                        }
                                    }}
                                />
                            </div>
                    </div>
                    <div className="sentiment-card-container">
                        <div className="sentiment-title-container">
                            <h1>Sentiment Analysis</h1>
                        </div>
                        <div className="doughnut-chart">
                            <Doughnut
                                data = {{
                                    labels: ['Pos','Neg','Neu'],
                                    datasets: [{
                                        data: [10, 20, 30],
                                        backgroundColor:["rgba(49,46,140,0.7)","rgba(182, 94, 186, 0.7)","rgba(39, 105, 236, 0.6)" ]
                                    }]
                                }}
                                options={{
                                    plugins:{
                                        legend:{
                                            position: "right",
                                            align: "start"
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="dashboard-bottom-container">
                    <div className="political-keys-container">
                        <div className="sentiment-title-container">
                            <h1 className="political-keys-title">Political Keys</h1>
                        </div>
                        <div className="bar-chart">
                            <Bar
                                data = {{
                                    labels: ['Education','Finance','Health','Economics'],
                                    datasets: [{
                                        data: [10, 20, 30, 20],
                                        backgroundColor:["rgba(49,46,140,0.7)","rgba(182, 94, 186, 0.7)","rgba(39, 105, 236, 0.6)" ]
                                    }]
                                }}
                                options={{
                                    plugins:{
                                        legend:{
                                            display: false
                                        }
                                    },
                                    scales: {
                                        x: {
                                            grid: {
                                            display: false 
                                            }
                                        },
                                        y: {
                                            grid: {
                                            display: false   
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="political-keys-container">
                        <div className="sentiment-title-container">
                            <h1 className="political-keys-title">Polls Participation</h1>
                        </div>
                        <div className="bar-chart">
                            <Line
                                data = {{
                                    labels: ['Education','Finance','Health','Economics'],
                                    datasets: [{
                                        data: [10, 20, 30, 20],
                                        backgroundColor:["rgba(49,46,140,0.7)","rgba(182, 94, 186, 0.7)","rgba(39, 105, 236, 0.6)" ]
                                    }]
                                }}
                                options={{
                                    plugins:{
                                        legend:{
                                            display: false
                                        }
                                    },
                                    scales: {
                                        x: {
                                            grid: {
                                            display: false 
                                            }
                                        },
                                        y: {
                                            grid: {
                                            display: false   
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard