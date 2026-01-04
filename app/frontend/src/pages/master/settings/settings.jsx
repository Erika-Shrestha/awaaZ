import './settings.css';
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';

const Settings = () => {
    return(
        <div>
            <CustomerNavbar/>
            <CustomerSidebar/>
            <div className="settings-main-content">
                ....
            </div>
        </div>
    )
}

export default Settings