import './blog.css';
import { useState } from 'react';
import Footer from '../../../components/footer/footer';
import Email from '../../../components/email/email';
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";

const Blog = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <div>
            <section className="blog-section"> 
                <div className="blogs-subscribe-container">
                    <div className="blogs-badge">AwaaZ says</div>
                    <h2 className="blogs-title">Blogs & Articles</h2>
                    <p className="blogs-subtitle">Subscribe to learn more about AwaaZ and get newest tips for upcoming elections</p>
                    <div className="blogs-input-wrapper">
                        <input type="email" placeholder="Enter your email address" className="blogs-email-input"/>
                        <button className="blogs-subscribe-button">Subscribe</button>
                    </div>
                </div>
                <div className="all-blogs-container">
                    <div className={expandedCard === 1 ? "view-card expanded" : "view-card"}>
                        <div className="view-card-image">
                            <img src={blog1} alt="blog1"/>
                        </div>
                        <div className="view-card-content">
                            <h3 className="view-card-title">How does AwaaZ handle linked socials?</h3>
                            {expandedCard === 1 && (
                                <p className="view-card-text">
                                    AwaaZ provides a comprehensive approach to managing your social media presence. Our platform integrates seamlessly with major social networks...
                                </p>
                            )}
                            <button onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)} className="view-expand-button">
                                {expandedCard === 1 ? 'Collapse' : 'Expand'}
                            </button>
                        </div>
                    </div>
                    <div className={expandedCard === 2 ? "view-card expanded" : "view-card"}>
                        <div className="view-card-image">
                            <img src={blog2} alt="blog2"/>
                        </div>
                        <div className="view-card-content">
                            <h3 className="view-card-title">What Your Feed Isn't Telling You?</h3>
                            {expandedCard === 2 && (
                                <p className="view-card-text">
                                    AwaaZ analyzes your feed and highlights perspectives you might be missing. Stay informed and avoid echo chambers...
                                </p>
                            )}
                            <button onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)} className="view-expand-button">
                                {expandedCard === 2 ? 'Collapse' : 'Expand'}
                            </button>
                        </div>
                    </div>
                    <div className={expandedCard === 3 ? "view-card expanded" : "view-card"}>
                        <div className="view-card-image">
                            <img src={blog3} alt="blog3"/>
                        </div>
                        <div className="view-card-content">
                            <h3 className="view-card-title">Meet the Candidates You Rarely See Online</h3>
                            {expandedCard === 3 && (
                                <p className="view-card-text">
                                    Discover all candidates, including those you might have missed. Make informed decisions with AwaaZ insights...
                                </p>
                            )}
                            <button onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)} className="view-expand-button">
                                {expandedCard === 3 ? 'Collapse' : 'Expand'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Email/>
            <Footer/>
        </div>
    );
};

export default Blog;
