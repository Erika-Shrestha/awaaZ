import './dashboard.css';
import CustomerNavbar from '../../../components/customer_navbar/customer_navbar';
import CustomerSidebar from '../../../components/customer_sidebar/customer_sidebar';

const Dashboard = () => {
    return(
        <div>
            <CustomerNavbar/>
            <CustomerSidebar/>
            <div className="dashboard-main-content">
                ....
            </div>
        </div>
    )
}

export default Dashboard