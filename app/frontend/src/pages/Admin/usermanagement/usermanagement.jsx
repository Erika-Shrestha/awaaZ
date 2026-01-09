import './usermanagement.css';
import AdminNavbar from '../../../components/customer_navbar/customer_navbar';
import AdminSidebar from '../../../components/admin_sidebar/admin_sidebar';
import ManagementTable from '../../../components/management_table/management_table';

const UserManagement = () => {
    return(
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
            <div className="user-management-main-content">
                <h1 className="management-users-title">All users <span className="management-users-count">[44]</span></h1>
                <ManagementTable/>
            </div>
        </div>
    )
}

export default UserManagement