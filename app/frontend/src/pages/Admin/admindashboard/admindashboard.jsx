import './admindashboard.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
import {Bar, Doughnut, Line} from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);
import AdminNavbar from '../../../components/customer_navbar/customer_navbar';
import AdminSidebar from '../../../components/admin_sidebar/admin_sidebar';
import userscount from "../../../assets/people.png"; 
import candidatecount from "../../../assets/candidatecount.png"; 
import pollstats from "../../../assets/pollstats.png";
import avatar_1 from "../../../assets/woman.png";
import avatar_2 from "../../../assets/man.png";
import avatar_3 from "../../../assets/old-man.png";

const AdminDashboard = () => {
    return(
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
            <div className="admin-dashboard-main-content">
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
                            <div className="stat-label-badge">Users</div>
                            <div className="stat-content-row">
                            <div className="stat-number-group">
                                <span className="stat-big-number">10</span>
                                <span className="stat-label-text">ACCOUNTS</span>
                            </div>
                            <div className="stat-icon-circle">
                                <img src={userscount} alt="step1" className="steps-icon step-1" />
                            </div>
                            </div>
                        </div>
                        <div className="stat-card-container">
                            <div className="stat-label-badge">Candidates</div>
                            <div className="stat-content-row">
                            <div className="stat-number-group">
                                <span className="stat-big-number">15</span>
                                <span className="stat-label-text">PERSONA</span>
                            </div>
                            <div className="stat-icon-circle">
                                <img src={candidatecount} alt="step1" className="steps-icon step-1" />
                            </div>
                            </div>
                        </div>
                        <div className="stat-card-container">
                            <div className="stat-label-badge">Polls</div>
                            <div className="stat-content-row">
                            <div className="stat-number-group">
                                <span className="stat-big-number">50</span>
                                <span className="stat-label-text">CREATED</span>
                            </div>
                            <div className="stat-icon-circle">
                                <img src={pollstats} alt="step1" className="steps-icon step-1" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="admindashboard-middle-container">
                    <div className="admin-card-container">
                        <div className="mediabubble-title-container">
                            <h1>Social Platform Usage</h1>
                        </div>
                            <div className="doughnut-chart">
                                <Doughnut
                                    data = {{
                                        labels: ['Contain','Safe'],
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
                            <h1>User Distribution</h1>
                        </div>
                        <div className="doughnut-chart">
                            <Doughnut
                                data = {{
                                    labels: ['Admin','Customer'],
                                    datasets: [{
                                        data: [10, 30],
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
                    <div className="latest-card-container">
                        <div className="last-info-box">
                            <div className="dominant-profile-title-badge">Latest Users</div>
                            <div className="last-details-list">
                                <div className="last-detail-item">
                                    <div className="latest-user-info">
                                        <img src={avatar_1} alt="User" className="latest-avatar"/>
                                        <div className="latest-details">
                                            <div className="latest-user-name">Florence Shaw</div>
                                            <div className="latest-user-email">florence@untitledui.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="last-detail-item">
                                    <div className="latest-user-info">
                                        <img src={avatar_2} alt="User" className="latest-avatar"/>
                                        <div className="latest-details">
                                            <div className="latest-user-name">Florence Shaw</div>
                                            <div className="latest-user-email">florence@untitledui.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="last-detail-item">
                                    <div className="latest-user-info">
                                        <img src={avatar_3} alt="User" className="latest-avatar"/>
                                        <div className="latest-details">
                                            <div className="latest-user-name">Florence Shaw</div>
                                            <div className="latest-user-email">florence@untitledui.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="last-detail-item">
                                    <div className="latest-user-info">
                                        <img src={avatar_3} alt="User" className="latest-avatar"/>
                                        <div className="latest-details">
                                            <div className="latest-user-name">Florence Shaw</div>
                                            <div className="latest-user-email">florence@untitledui.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="last-detail-item">
                                    <div className="latest-user-info">
                                        <img src={avatar_1} alt="User" className="latest-avatar"/>
                                        <div className="latest-details">
                                            <div className="latest-user-name">Florence Shaw</div>
                                            <div className="latest-user-email">florence@untitledui.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard