import React from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/MemberDashboard.css';
import '../styles/Settings.css'; // New styles for this page

const Settings = () => {
    const ownerUser = {
        name: 'Josh Mojica',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
    };
    
    return (
        <div className="dashboard-container">
            <AdminSidebar currentUser={ownerUser} />
            <main className="main-content">
                <header className="page-header"><h1>Settings</h1></header>
                <div className="settings-widget">
                    <h2>Account Information</h2>
                    <form>
                        <div className="input-group">
                            <label>Admin Name</label>
                            <input type="text" defaultValue={ownerUser.name} />
                        </div>
                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" defaultValue="admin@musclehub.com" />
                        </div>
                        <button type="submit" className="save-button">Save Changes</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Settings;
