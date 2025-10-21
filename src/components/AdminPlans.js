import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import '../styles/AdminPlans.css'; // We will create this new CSS file next
import { FaCheckCircle } from 'react-icons/fa';

const AdminPlans = () => {
    // Mock data for existing plans, based on your design
    const [plans, setPlans] = useState([
        { id: 1, name: 'Day Pass', price: '129', interval: 'day', features: ['Single-day access to one club', 'Perfect for trying out a gym'] },
        { id: 2, name: '1 Month (Upfront)', price: '1,249', interval: 'day', features: ['One-time payment', 'No lock-in contract'] },
        { id: 3, name: '1 Month (Autodebit)', price: '1,149', interval: 'day', features: ['Convenient monthly billing', 'Cancel or pause anytime'] },
        { id: 4, name: '3 Months', price: '1,083', interval: 'day', total: 'P3,249', features: ['Total P3,249', 'Good value & flexibility'] },
        { id: 5, name: '6 Months', price: '999', interval: 'day', total: 'P5,994', features: ['Total P5,994', 'Popular mid-term option'] },
        { id: 6, name: '12 Months', price: '949', interval: 'day', total: 'P11,388', features: ['Total P11,388', 'Best value for Plus Tier'] },
    ]);

    // State for the "Add New Plan" form
    const [newPlan, setNewPlan] = useState({ name: '', price: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPlan(prev => ({ ...prev, [name]: value }));
    };

    const handleAddPlan = (e) => {
        e.preventDefault();
        if (!newPlan.name || !newPlan.price) {
            alert('Please fill out the plan name and price.');
            return;
        }
        const planToAdd = {
            id: plans.length + 1,
            name: newPlan.name,
            price: newPlan.price,
            interval: 'day',
            features: newPlan.description.split(',').map(item => item.trim()),
        };
        setPlans([...plans, planToAdd]);
        setNewPlan({ name: '', price: '', description: '' }); // Clear the form
    };
    
    const handleDeletePlan = (planId) => {
        setPlans(plans.filter(plan => plan.id !== planId));
    };
    
    const ownerUser = {
        name: 'Josh Mojica',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit-crop',
    };

    return (
        <div className="dashboard-container">
            <AdminSidebar currentUser={ownerUser} />
            <main className="main-content">
                <header className="admin-plans-header">
                    <h1>Membership Plans Management</h1>
                </header>

                <div className="plans-grid">
                    {plans.map(plan => (
                        <div key={plan.id} className="plan-card">
                            <h3>{plan.name}</h3>
                            <div className="plan-price">
                                ₱{plan.price}<span> / {plan.interval}</span>
                            </div>
                            <ul className="plan-features">
                                {plan.features.map((feature, index) => (
                                    <li key={index}><FaCheckCircle className="check-icon" /> {feature}</li>
                                ))}
                            </ul>
                            <div className="plan-actions">
                                <button className="edit-btn">Edit Plan</button>
                                <button className="delete-btn" onClick={() => handleDeletePlan(plan.id)}>Delete Plan</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="add-plan-container">
                    <h2>Add New Plan</h2>
                    <form className="add-plan-form" onSubmit={handleAddPlan}>
                        <div className="form-row">
                            <div className="input-group">
                                <label>Plan Name</label>
                                <input type="text" name="name" value={newPlan.name} onChange={handleInputChange} placeholder="Enter Plan Name" />
                            </div>
                            <div className="input-group">
                                <label>Price (PHP)</label>
                                <input type="number" name="price" value={newPlan.price} onChange={handleInputChange} placeholder="Enter Price" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Description (comma-separated features)</label>
                            <textarea name="description" value={newPlan.description} onChange={handleInputChange} placeholder="e.g., Feature one, Feature two"></textarea>
                        </div>
                        <div className="form-actions">
                             <button type="submit" className="add-new-plan-btn">Add New Plan</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AdminPlans;