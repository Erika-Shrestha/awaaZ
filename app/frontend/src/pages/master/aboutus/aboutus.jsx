import './aboutus.css';
import Lottie from "lottie-react";
import Footer from '../../../components/footer/footer';
import Email from '../../../components/email/email';
import aboutus_banner from "../../../assets/aboutus_banner.png";
import lottie_1 from "../../../assets/lottie1.json";
import lottie_2 from "../../../assets/lottie2.json";
import lottie_3 from "../../../assets/lottie3.json";
import feedback from "../../../assets/feedback.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import feedback1 from "../../../assets/feedback1.jpg";


const AboutUs = () => {
    return(
        <div>
            <section className="aboutus-head-section">
                <div className="about-intro-div">
                    <p className="about-label">About Us</p>
                    <h1 className="about-heading">Build Trust and Choices<br/>with awaaZ</h1>
                    <div className="stats-container">
                        <div className="stat-card">
                            <p className="stat-number">15+</p>
                            <p className="stat-description">Number of candidates<br/>analyzed</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-number">80%</p>
                            <p className="stat-description">Accuracy to identify<br/>your bubbles</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-number">50+</p>
                            <p className="stat-description">Number of Articles<br/>listed</p>
                        </div>
                    </div>
                    <button className="explore-button">Explore</button>
                </div>
                <div className="aboutus-img">
                    <img src={aboutus_banner} alt="app" className="about-icon" />
                </div>
                
            </section>
            <section className="about-feature-section">
                <p className="choose-label">Why Choose Us</p>
                <h2 className="choose-heading"> Our strategy is very personalized<br/>to meet your needs.</h2>
                <div className="choose-container">
                    <div className="choose-card">
                        <Lottie animationData={lottie_1} loop={true} autoplay={true} className="choose-icon lottie1"/>
                        <h3 className="choose-title">Customizable Engagement</h3>
                        <p className="choose-description">In order for you to vote, we use interactive<br/>tools for customizable engagement.</p>
                    </div>
                    <div className="choose-card">
                        <Lottie animationData={lottie_3} loop={true} autoplay={true} className="choose-icon lottie2"/>
                        <h3 className="choose-title">Empowered Voting</h3>
                        <p className="choose-description">We help in voting decision through fair<br/>and reliable viewpoints.</p>
                    </div>
                    <div className="choose-card">
                        <Lottie animationData={lottie_2} loop={true} autoplay={true} className="choose-icon lottie3"/>
                        <h3 className="choose-title">Perfect Match</h3>
                        <p className="choose-description">To increase voter satisfaction, we<br/>provide personalized candidates.</p>
                    </div>
                </div>
            </section>
            <section className="about-feedback-section">
                <h2 className="feedback-title">Proven by people who use it</h2>
                <p className="subheading">Join our satisfied users who trust us to improve<br/>their political knowledge</p>
                <div className="feedback-grid">
                    <div className="left-column">
                        <div className="feedback-card sec-short">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="feedback-text">The product was so good.</p>
                            <div className="user-info">
                                <div className="aboutus-avatar"></div>
                                <div>
                                    <p className="user-name">Sarah Rai</p>
                                    <p className="user-role">Product Owner</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-card long">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="feedback-text">The interactive polls and customizable engagement tools make learning about elections easy and engaging. Thank you for this amazing tool.</p>
                            <div className="user-info">
                                <div className="aboutus-avatar">
                                    <img src={feedback1} alt="app" className="feedback-img" />
                                </div>
                                <div>
                                    <p className="user-name">Harnaj Subba</p>
                                    <p className="user-role">Photographer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="center-column">
                        <img src={feedback} alt="app" className="center-image"/>
                        <div className="feedback-card short">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="feedback-text">It was easy to use.</p>
                            <div className="user-info">
                                <div className="aboutus-avatar"></div>
                                <div>
                                    <p className="user-name">Nausan Neupane</p>
                                    <p className="user-role">AI Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="feedback-card">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="feedback-text">The product was so good that made me easy to know about unknown candidates.</p>
                            <div className="user-info">
                                <div className="aboutus-avatar">
                                    
                                </div>
                                <div>
                                    <p className="user-name">Aamir Hamid</p>
                                    <p className="user-role">Islington College</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback-card">
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="feedback-text">Highly recommended for anyone wanting fair and balanced insights!</p>
                            <div className="user-info">
                                <div className="aboutus-avatar"></div>
                                <div>
                                    <p className="user-name">Cristy Limbu</p>
                                    <p className="user-role">Ace Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Email/>
            <Footer/>
        </div>
    )
}

export default AboutUs;