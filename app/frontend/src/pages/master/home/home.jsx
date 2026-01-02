import './home.css';
import Footer from '../../../components/footer/footer';
import Email from '../../../components/email/email';
import intro from "../../../assets/intro.png";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import twitter from "../../../assets/twitter.png";
import step_1_1 from "../../../assets/step_1_1.png";
import step_1_2 from "../../../assets/step_1_2.png";
import step_2 from "../../../assets/step_2.png";
import step_3 from "../../../assets/step_3.png";



const Home = () => {
    return(
        <div>
            <div className="wrapper">
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
            </div>
            <Email/>
            <Footer/>
        </div>
    );
};

export default Home;