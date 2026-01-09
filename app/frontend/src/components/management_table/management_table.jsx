import './management_table.css';
import filter from "../../assets/filter.png";
import add from "../../assets/more.png";
import avatar_1 from "../../assets/woman.png";
import avatar_2 from "../../assets/man.png";
import avatar_3 from "../../assets/old-man.png";

const ManagementTable = () => {
    return (
        <div className="management-table-container">
            <div className="management-users-header">
                <div className="management-users-actions">
                    <button className="management-filters-button">
                        <img src={filter} className="management-filters-icon"/>
                    </button>
                    <button className="add-user-button">
                        <img src={add} className="management-filters-icon"/>
                    </button>
                </div>
            </div>
            <table className="management-table">
                <thead>
                    <tr>
                        <th className="checkbox-column">
                            <input type="checkbox" className="management-header-checkbox" />
                        </th>
                        <th className="name-column">User name</th>
                        <th className="access-column">Contact Number</th>
                        <th className="social-column">Socials</th>
                        <th className="role-column">Role</th>
                        <th className="status-column">Status</th>
                        <th className="management-actions-column"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="management-row">
                        <td>
                            <input type="checkbox" className="row-checkbox" />
                        </td>
                        <td>
                            <div className="management-user-info">
                                <img src={avatar_1} alt="User" className="management-user-avatar"/>
                                <div className="management-user-details">
                                    <div className="management-user-name">Florence Shaw</div>
                                    <div className="management-user-email">florence@untitledui.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="role-row">9823733894</td>
                        <td className="social-row">
                            socials
                        </td>
                        <td>
                            <div className="management-access-badges">
                                <span className="management-user-badge admin">Admin</span>
                            </div>
                        </td>
                        <td className="status-row">Active</td>
                        <td className="management-actions-column">
                            <button className="crud-button">⋮</button>
                        </td>
                    </tr>
                    <tr className="management-row">
                        <td>
                            <input type="checkbox" className="row-checkbox" />
                        </td>
                        <td>
                            <div className="management-user-info">
                                <img src={avatar_2} alt="User" className="management-user-avatar"/>
                                <div className="management-user-details">
                                    <div className="management-user-name">Florence Shaw</div>
                                    <div className="management-user-email">florence@untitledui.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="role-row">9823733894</td>
                        <td className="social-row">
                            socials
                        </td>
                        <td>
                            <div className="management-access-badges">
                                <span className="management-user-badge admin">Admin</span>
                            </div>
                        </td>
                        <td className="status-row">Active</td>
                        <td className="management-actions-column">
                            <button className="crud-button">⋮</button>
                        </td>
                    </tr>
                    <tr className="management-row">
                        <td>
                            <input type="checkbox" className="row-checkbox" />
                        </td>
                        <td>
                            <div className="management-user-info">
                                <img src={avatar_3} alt="User" className="management-user-avatar"/>
                                <div className="management-user-details">
                                    <div className="management-user-name">Florence Shaw</div>
                                    <div className="management-user-email">florence@untitledui.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="role-row">9823733894</td>
                        <td className="social-row">
                            socials
                        </td>
                        <td>
                            <div className="management-access-badges">
                                <span className="management-user-badge admin">Admin</span>
                            </div>
                        </td>
                        <td className="status-row">Active</td>
                        <td className="management-actions-column">
                            <button className="crud-button">⋮</button>
                        </td>
                    </tr>
                    <tr className="management-row">
                        <td>
                            <input type="checkbox" className="row-checkbox" />
                        </td>
                        <td>
                            <div className="management-user-info">
                                <img src={avatar_2} alt="User" className="management-user-avatar"/>
                                <div className="management-user-details">
                                    <div className="management-user-name">Florence Shaw</div>
                                    <div className="management-user-email">florence@untitledui.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="role-row">9823733894</td>
                        <td className="social-row">
                            socials
                        </td>
                        <td>
                            <div className="management-access-badges">
                                <span className="management-user-badge admin">Admin</span>
                            </div>
                        </td>
                        <td className="status-row">Active</td>
                        <td className="management-actions-column">
                            <button className="crud-button">⋮</button>
                        </td>
                    </tr>
                    <tr className="management-row">
                        <td>
                            <input type="checkbox" className="row-checkbox" />
                        </td>
                        <td>
                            <div className="management-user-info">
                                <img src={avatar_3} alt="User" className="management-user-avatar"/>
                                <div className="management-user-details">
                                    <div className="management-user-name">Florence Shaw</div>
                                    <div className="management-user-email">florence@untitledui.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="role-row">9823733894</td>
                        <td className="social-row">
                            socials
                        </td>
                        <td>
                            <div className="management-access-badges">
                                <span className="management-user-badge admin">Admin</span>
                            </div>
                        </td>
                        <td className="status-row">Active</td>
                        <td className="management-actions-column">
                            <button className="crud-button">⋮</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManagementTable;
