import './contactus.css';
import Footer from '../../../components/footer/footer';
import Email from '../../../components/email/email';

const ContactUs = () => {
    return(
        <div className="wrapper">
            <section className="contact-us-header">
                <div className="contact-form-container">
                    <div className="contact-form-header">
                        <h1 className="contact-form-title"> Get In <span className="touch-text">Touch</span></h1>
                    </div>
                    <div className="contact-form">
                        <div className="contact-form-group">
                            <label>Full Name</label>
                            <input type="text" id="fullName" placeholder="Enter your name" className="contact-form-input"/>
                        </div>
                        <div className="contact-form-group">
                            <label>Email</label>
                            <input type="email" id="email" placeholder="Enter your number" className="contact-form-input"/>
                        </div>
                        <div className="contact-form-group">
                            <label>How can we help you?</label>
                            <textarea id="message" placeholder="How can we help you?" className="contact-form-textarea" rows="6"></textarea>
                        </div>
                        <button type="button" className="contact-submit-button"> Get Started</button>
                    </div>
                </div>
            </section>
            <Email/>
            <Footer/>
        </div>
    )
}

export default ContactUs;