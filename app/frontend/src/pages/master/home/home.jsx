import './home.css';
import { useState } from 'react';
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
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";
import faq from "../../../assets/faq.png";



const Home = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const toggleCard1 = () => {
        if (expandedCard === 1) {
        setExpandedCard(null); 
        } else {
        setExpandedCard(1); 
        }
    };

    const toggleCard2 = () => {
        if (expandedCard === 2) {
        setExpandedCard(null);
        } else {
        setExpandedCard(2);
        }
    };

    const toggleCard3 = () => {
        if (expandedCard === 3) {
        setExpandedCard(null);
        } else {
        setExpandedCard(3);
        }
    };

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
                <section className="voices-views-container">
                    <div className="voices-views-header">
                        <h2 className="voices-views-title"><span className="highlight-voice">Voices</span> and <span className="highlight-view">Views</span></h2>
                        <button className="view-all-button">View All<span className="arrow">{'>'}</span></button>
                    </div>
                    <div className="views-cards-grid">
                        <div className={expandedCard === 1 ? "view-card expanded" : "view-card"}>
                            <div className="view-card-image">
                                <img  src={blog1} alt="blog1"/>
                            </div>
                            <div className="view-card-content">
                                <h3 className="view-card-title">How does AwaaZ handle linked socials?</h3>
                                {expandedCard === 1 && (
                                    <p className="view-card-text">AwaaZ provides a comprehensive approach to managing your social media presence. Our platform integrates seamlessly with major social networks, allowing you to sync your profiles, cross-post content, and maintain consistency across all your channels. We prioritize privacy and give you full control over what information is shared between platforms.</p>
                                )}
                                <button onClick={toggleCard1} className="view-expand-button">{expandedCard === 1 ? 'Collapse' : 'Expand'}</button>
                            </div>
                        </div>
                        <div className={expandedCard === 2 ? "view-card expanded" : "view-card"}>
                            <div className="view-card-image">
                                <img  src={blog2} alt="blog2"/>
                            </div>
                            <div className="view-card-content">
                                <h3 className="view-card-title">What Your Feed Isn't Telling You?</h3>
                                {expandedCard === 2 && (
                                    <p className="view-card-text">AwaaZ provides a comprehensive approach to managing your social media presence. Our platform integrates seamlessly with major social networks, allowing you to sync your profiles, cross-post content, and maintain consistency across all your channels. We prioritize privacy and give you full control over what information is shared between platforms.</p>
                                )}
                                <button onClick={toggleCard2} className="view-expand-button">{expandedCard === 2 ? 'Collapse' : 'Expand'}</button>
                            </div>
                        </div>
                        <div className={expandedCard === 3 ? "view-card expanded" : "view-card"}>
                            <div className="view-card-image">
                                <img  src={blog3} alt="blog3"/>
                            </div>
                            <div className="view-card-content">
                                <h3 className="view-card-title">Meet the Candidates You Rarely See Online</h3>
                                {expandedCard === 3 && (
                                    <p className="view-card-text">AwaaZ provides a comprehensive approach to managing your social media presence. Our platform integrates seamlessly with major social networks, allowing you to sync your profiles, cross-post content, and maintain consistency across all your channels. We prioritize privacy and give you full control over what information is shared between platforms.</p>
                                )}
                                <button onClick={toggleCard3} className="view-expand-button">{expandedCard === 3 ? 'Collapse' : 'Expand'}</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq-section">
                    <div className="faq-container">
                        <div className="faq-left">
                            <div className="faq-item">
                                <input type="checkbox" id="faq1" className="faq-checkbox" />
                                <label htmlFor="faq1" className="faq-question">
                                    <span>What can awaaZ do?</span>
                                    <span className="faq-icon">+</span>
                                </label>
                                <div className="faq-answer">
                                    <p>
                                    AwaaZ is a comprehensive social media platform that helps you connect with 
                                    your community, share your voice, and stay informed about local and national 
                                    issues. You can create posts, participate in polls, follow candidates, and 
                                    engage in meaningful discussions with other users.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <input type="checkbox" id="faq2" className="faq-checkbox" />
                                <label htmlFor="faq2" className="faq-question">
                                    <span>How do I link socials?</span>
                                    <span className="faq-icon">+</span>
                                </label>
                                <div className="faq-answer">
                                    <p>
                                    Linking your social media accounts is easy! Go to your profile settings, 
                                    select "Connected Accounts," and choose which platforms you'd like to link. 
                                    You can connect Facebook, Twitter, Instagram, and other major social networks. 
                                    This allows you to cross-post content and maintain consistency across platforms.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <input type="checkbox" id="faq3" className="faq-checkbox" />
                                <label htmlFor="faq3" className="faq-question">
                                    <span>Can I link multiple profiles?</span>
                                    <span className="faq-icon">+</span>
                                </label>
                                <div className="faq-answer">
                                    <p>
                                    Yes! You can link multiple profiles from the same social media platform. 
                                    This is useful if you manage personal and professional accounts, or if you 
                                    want to aggregate content from different sources. Simply add each profile 
                                    separately in your settings.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <input type="checkbox" id="faq4" className="faq-checkbox" />
                                <label htmlFor="faq4" className="faq-question">
                                    <span>What is customized polls?</span>
                                    <span className="faq-icon">+</span>
                                </label>
                                <div className="faq-answer">
                                    <p>
                                    Customized polls allow you to create surveys with your own questions and 
                                    answer options. You can set the duration, choose who can participate, and 
                                    even add images or videos to your polls. Results can be shared publicly or 
                                    kept private, giving you full control over your polling experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="faq-right">
                            <div className="faq-header">
                                <h2 className="faq-title">Frequently Asked<br /><span className="highlight">Questions</span></h2>
                            </div>
                            <div className="faq-image-placeholder">
                                <img src={faq} alt="faq" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Email/>
            <Footer/>
        </div>
    );
};

export default Home;