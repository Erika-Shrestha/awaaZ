import './candidate.css';
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';
import previous from "../../../assets/prev-arrow.png";
import candidate1 from "../../../assets/candidate-1.jpg";
import candidate2 from "../../../assets/candidate-2.jpg";
import candidate3 from "../../../assets/candidate-3.jpg";
import tiktok from "../../../assets/tiktok.png";
import facebook from "../../../assets/facebook.png";

const Candidate = () => {
    return(
        <div>
            <CustomerNavbar/>
            <CustomerSidebar/>
            <div className="candidate-main-content">
                <div className="candidate-profile-header">
                    <h1 className="page-title">Under Represented Candidates</h1>
                    <p className="select-text">SELECT CANDIDATE :</p>
                    <div className="candidate-navigation-section">
                        <button className="nav-button prev"><img src={previous} alt="intro" className="arrow-icon" />Previous Candidate</button>
                        <button className="nav-button next">Next Candidate<img src={previous} alt="intro" className="arrow-icon next-arrow" /></button>
                    </div>
                </div>
                <div className="candidate-selection">
                    <div className="candidate-avatar">
                        <img src={candidate1} alt="Sirjan Bhutia" />
                        <p className="candidate-name">Sirjan Bhutia</p>
                    </div>
                    <div className="candidate-avatar selected">
                        <img src={candidate2} alt="Bipin Shrestha" />
                        <p className="candidate-name">Bipin Shrestha</p>
                    </div>
                    <div className="candidate-avatar">
                        <img src={candidate3} alt="Girija Prasad" />
                        <p className="candidate-name">Girija Prasad</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="candidate-profile-content">
                    <div className="candidate-profile-left">
                        <div className="candidate-profile-image">
                            <img src={candidate2} alt="Bipin Shrestha" />
                        </div>
                        <div className="visibility-score">
                            <div className="score-text">Visibility Score</div>
                            <div className="score-value">3.5 %</div>
                        </div>
                    </div>
                    <div className="candidate-profile-right">
                        <h2 className="candidate-profile-name">Bipin Shrestha</h2>
                        <p className="candidate-profile-description">Bipin Shrestha is an independent candidate prioritizing digital rights, education reform, and transparency. With a background in community organizing, she focuses on empowering youth voices and improving access to public services.</p>
                        <div className="focus-section">
                            <h3 className="section-title">Focus areas</h3>
                            <div className="focus-tags">
                                <span className="tag tag-purple">Digital Rights</span>
                                <span className="tag tag-blue">Education</span>
                            </div>
                        </div>
                        <div className="candidate-social-section">
                            <h3 className="candidate-section-title">Explore their socials</h3>
                            <div className="candidate-social-icons">
                                <img src={tiktok} alt="TikTok" className="candidate-social-icon" />
                                <img src={facebook} alt="Facebook" className="candidate-social-icon" />
                            </div>
                        </div>
                        <div className="articles-section">
                            <h3 className="candidate-section-title">Articles</h3>
                            <div className="article-item">
                                <span className="article-title">Article 1</span>
                                <button className="candidate-explore-button">Explore</button>
                            </div>
                            <div className="article-item">
                                <span className="article-title">Article 2</span>
                                <button className="candidate-explore-button">Explore</button>
                            </div>
                            <div className="article-item">
                                <span className="article-title">Article 3</span>
                                <button className="candidate-explore-button">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Candidate;