import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/MemberDashboard.css'; // Reuses the main dashboard container layout
import '../styles/Users.css';           // The dedicated CSS for this page

// --- Add User Modal Component ---
const AddUserModal = ({ onClose, onAddUser }) => {
    const [newUser, setNewUser] = useState({ fullName: '', email: '', password: '', role: 'member' });
    const handleChange = (e) => setNewUser({ ...newUser, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddUser(newUser);
        onClose();
    };
    return (
        <div className="modal-overlay">
            <div className="modal-content add-user-modal">
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h2>Add New User</h2>
                <form onSubmit={handleSubmit} className="add-user-form">
                    <div className="input-group"><label>Full Name</label><input type="text" name="fullName" onChange={handleChange} required /></div>
                    <div className="input-group"><label>Email</label><input type="email" name="email" onChange={handleChange} required /></div>
                    <div className="input-group"><label>Password</label><input type="password" name="password" onChange={handleChange} required /></div>
                    <div className="input-group"><label>Role</label><select name="role" value={newUser.role} onChange={handleChange}><option value="member">Member</option><option value="staff">Staff</option></select></div>
                    <button type="submit" className="add-user-button modal-button">Create User</button>
                </form>
            </div>
        </div>
    );
};

const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, name: 'John Ryan Reyes', email: 'jr.reyes@example.com', role: 'member', status: 'Active' },
        { id: 2, name: 'Johaina Aguado', email: 'j.aguado@example.com', role: 'member', status: 'Active' },
        { id: 3, name: 'Ivan Paul Beltran', email: 'ip.beltran@example.com', role: 'member', status: 'Inactive' },
        { id: 4, name: 'Kurt Justine Perez', email: 'kurt.perez.staff@email.com', role: 'staff', status: 'Active' },
    ]);
    const ownerUser = { name: 'Josh Mojica', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop' };
    const handleAddUser = (newUser) => {
        const userToAdd = { ...newUser, id: users.length + 1, status: 'Active' };
        setUsers([userToAdd, ...users]);
        alert(`${newUser.role.charAt(0).toUpperCase() + newUser.role.slice(1)} account for ${newUser.fullName} created!`);
    };
    return (
        <div className="dashboard-container">
            <AdminSidebar currentUser={ownerUser} />
            <main className="main-content">
                <header className="users-header">
                    <h1>Users</h1>
                    <div className="header-actions">
                        <input type="text" placeholder="Search users..." className="search-bar" />
                        <button className="add-user-button" onClick={() => setIsModalOpen(true)}>Add New User</button>
                    </div>
                </header>
                <div className="user-list-container">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><span className={`role-tag ${user.role}`}>{user.role}</span></td>
                                    <td><span className={`status-tag ${user.status.toLowerCase()}`}>{user.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            {isModalOpen && <AddUserModal onClose={() => setIsModalOpen(false)} onAddUser={handleAddUser} />}
        </div>
    );
};

export default Users;