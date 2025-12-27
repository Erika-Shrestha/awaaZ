import './footer.css';
import logo from '../../assets/footerlogo.png';
import call from '../../assets/call.png';
import mail from '../../assets/mail.png';

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="footer-links">
            <div className="footer-column">
                <h3 className="footer-heading">Features</h3>
                <a href="#" className="footer-link">Media Bubble Analyze</a>
                <a href="#" className="footer-link">Summaries</a>
                <a href="#" className="footer-link">Customized Polls</a>
            </div>
            
            <div className="footer-column">
                <h3 className="footer-heading">Company</h3>
                <a href="#" className="footer-link">About Us</a>
                <a href="#" className="footer-link">Blogs</a>
                <a href="#" className="footer-link">FAQs</a>
                <a href="#" className="footer-link">Contact Us</a>
            </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <div className="social-links">
            <span className="social-text">Meta Business Partners</span>
            <span className="social-text">TikTok Partners</span>
            <span className="social-text">LinkedIn Partners</span>
            </div>
            <div className="contact-info">
                <div className="footer-icon">
                    <img src={call} alt="Logo" />
                    <span className="contact-text"> +977 9823733986</span>
                </div>
                <div className="footer-icon">
                    <img src={mail} alt="Logo" />
                    <span className="contact-text"> info@awaaZ.com</span>
                </div>
            </div>
        </div>
        
        <div className="copyright">
            <p>2025 © All Rights Reserved</p>
        </div>
    </footer>
    )
}

export default Footer;