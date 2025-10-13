import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/MemberDashboard.css'; // Reuses the main dashboard container layout
import '../styles/AdminProfile.css';       // New styles specific to this page

const AdminProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

    // Mock data for the admin user
    const adminUser = {
        name: 'Josh Mojica',
        email: 'josh.mojica.owner@email.com',
        phone: '+63 912 345 6789',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
    };
    
    // Mock data for gym details
    const gymDetails = {
        name: 'MuscleHub Fitness',
        address: '123 Lasip Rd, Calasiao, Pangasinan',
        contact: '+63 915 678 6967',
    }

    return (
        <div className="dashboard-container">
            <AdminSidebar currentUser={adminUser} />
            <main className="main-content">
                <header className="admin-profile-header">
                    <h1>Admin Profile & Settings</h1>
                </header>

                <div className="admin-profile-grid">
                    {/* Your Account Details Card */}
                    <div className="settings-card">
                        <h2>Your Account</h2>
                        <form>
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" defaultValue={adminUser.name} readOnly={!isEditing} />
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" defaultValue={adminUser.email} readOnly={!isEditing} />
                            </div>
                             <div className="input-group">
                                <label>Phone Number</label>
                                <input type="text" defaultValue={adminUser.phone} readOnly={!isEditing} />
                            </div>
                        </form>
                    </div>

                    {/* Security Card */}
                    <div className="settings-card">
                        <h2>Security</h2>
                        <div className="security-setting">
                            <span>Change Password</span>
                            <button className="setting-button">Change</button>
                        </div>
                        <div className="security-setting">
                            <span>Two-Factor Authentication</span>
                            <div 
                                className={`toggle-switch ${isTwoFactorEnabled ? 'active' : ''}`}
                                onClick={() => setIsTwoFactorEnabled(!isTwoFactorEnabled)}
                            >
                                <div className="toggle-handle"></div>
                            </div>
                        </div>
                    </div>

                    {/* Gym Details Card */}
                    <div className="settings-card full-width">
                        <h2>Gym Details</h2>
                         <form>
                            <div className="input-group">
                                <label>Gym Name</label>
                                <input type="text" defaultValue={gymDetails.name} readOnly={!isEditing} />
                            </div>
                            <div className="input-group">
                                <label>Address</label>
                                <input type="text" defaultValue={gymDetails.address} readOnly={!isEditing} />
                            </div>
                             <div className="input-group">
                                <label>Public Contact Number</label>
                                <input type="text" defaultValue={gymDetails.contact} readOnly={!isEditing} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="update-profile-action">
                    <button className="update-profile-button" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Save Changes' : 'Edit Details'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AdminProfile;