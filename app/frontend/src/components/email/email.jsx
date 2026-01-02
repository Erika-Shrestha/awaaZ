import './email.css';
import iconlogo from '../../assets/icon-logo.png';

const Email = () => {
    return(
        <div className="email-container">
            <div className="email-box">
                <img src={iconlogo} alt="bubble" className="icon-bubble first" />
                <label className="email-title">Ready To Find Your Echo <br/>Chambers?</label>
                <img src={iconlogo} alt="bubble" className="icon-bubble second" />
                <img src={iconlogo} alt="bubble" className="icon-bubble third" />
                <button className="email-btn">Get Started</button>
            </div>
        </div>
    )
}

export default Email;