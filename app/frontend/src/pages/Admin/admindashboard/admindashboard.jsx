import './admindashboard.css';
import AdminNavbar from '../../../components/customer_navbar/customer_navbar';
import AdminSidebar from '../../../components/admin_sidebar/admin_sidebar';

const AdminDashboard = () => {
    return(
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
            <div className="admin-dashboard-main-content">
                ....
            </div>
        </div>
    )
}

export default AdminDashboard