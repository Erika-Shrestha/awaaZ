import './candidatemanagement.css';
import AdminNavbar from '../../../components/customer_navbar/customer_navbar';
import AdminSidebar from '../../../components/admin_sidebar/admin_sidebar';
import ManagementTable from '../../../components/management_table/management_table';

const CandidateManagement = () => {
    return(
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
            <div className="candidate-management-main-content">
                <h1 className="management-users-title">All candidates<span className="management-users-count">  [24]</span></h1>
                <ManagementTable/>
            </div>
        </div>
    )
}

export default CandidateManagement