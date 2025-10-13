import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/MemberDashboard.css'; // Reuses main layout styles
import '../styles/ProgressTracking.css'; // Styles for this page

// Import Chart components
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressTracking = () => {
    // State for the BMI Calculator
    const [bmiInputs, setBmiInputs] = useState({
        gender: 'Male',
        age: '',
        height: '',
        weight: '',
    });
    const [bmiResult, setBmiResult] = useState(null);

    const handleBmiChange = (e) => {
        setBmiInputs({ ...bmiInputs, [e.target.name]: e.target.value });
    };

    const calculateBmi = (e) => {
        e.preventDefault();
        const { height, weight } = bmiInputs;
        if (height > 0 && weight > 0) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            let category = '';
            if (bmi < 18.5) category = 'Underweight';
            else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal';
            else if (bmi >= 25 && bmi <= 39.9) category = 'Overweight';
            else category = 'Obese';
            setBmiResult({ value: bmi, category: category });
        }
    };
    
    const clearBmi = () => {
        setBmiInputs({ gender: 'Male', age: '', height: '', weight: '' });
        setBmiResult(null);
    };

    const currentUser = {
        name: 'Josh Mojica',
        goal: 'Gaining Weight',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto-format&fit=crop',
    };

    const bmiProgressData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'BMI',
            data: [28, 27.5, 27, 26, 25.5],
            borderColor: '#ADFF2F',
            backgroundColor: 'rgba(173, 255, 47, 0.1)',
            tension: 0.4,
            fill: true,
        }],
    };

    const chartOptions = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { 
            x: { ticks: { color: '#aaa' }, grid: { color: '#333' } }, 
            y: { ticks: { color: '#aaa' }, grid: { color: '#333' }, min: 15, max: 50 } 
        },
    };

    return (
        <div className="dashboard-container">
            <Sidebar currentUser={currentUser} />
            <main className="main-content">
                <header className="progress-header">
                    <h1><span className="gradient-text">Track</span> your progress</h1>
                    <p>Would you like to keep up on your BMI?</p>
                </header>
                
                <div className="progress-grid">
                    {/* Top Row for Calculator and Allocator */}
                    <div className="top-row">
                        <div className="progress-card bmi-calculator">
                            <h3>BMI Calculator</h3>
                            <form onSubmit={calculateBmi}>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Gender</label>
                                        <select name="gender" value={bmiInputs.gender} onChange={handleBmiChange}>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <label>Age</label>
                                        <input type="number" name="age" value={bmiInputs.age} onChange={handleBmiChange} placeholder="e.g., 25" />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label>Height (cm)</label>
                                    <input type="number" name="height" value={bmiInputs.height} onChange={handleBmiChange} placeholder="e.g., 175" />
                                </div>
                                <div className="input-group">
                                    <label>Weight (Kg)</label>
                                    <input type="number" name="weight" value={bmiInputs.weight} onChange={handleBmiChange} placeholder="e.g., 70" />
                                </div>
                                {bmiResult && (
                                    <div className="bmi-result">
                                        <p>Your BMI is</p>
                                        <span className={`bmi-value ${bmiResult.category.toLowerCase()}`}>{bmiResult.value}</span>
                                        <span className={`bmi-category ${bmiResult.category.toLowerCase()}`}>{bmiResult.category}</span>
                                    </div>
                                )}
                                <div className="button-group">
                                    <button type="button" className="clear-btn" onClick={clearBmi}>Clear</button>
                                    <button type="submit" className="calculate-btn">Calculate BMI</button>
                                </div>
                            </form>
                        </div>
                        <div className="progress-card bmi-allocator">
                            <h3>BMI Allocator</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>BMI</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>≤ 18.4</td><td className="status-underweight">Underweight</td></tr>
                                    <tr><td>18.9-24.99</td><td className="status-normal">Normal</td></tr>
                                    <tr><td>25-39.99</td><td className="status-overweight">Overweight</td></tr>
                                    <tr><td>≥ 40</td><td className="status-obese">Obese</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom Row for the Graph */}
                    <div className="progress-card">
                        <h3>BMI Progress Overview</h3>
                        <Line options={chartOptions} data={bmiProgressData} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProgressTracking;