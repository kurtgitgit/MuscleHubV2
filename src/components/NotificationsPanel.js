import React from 'react';
import '../styles/NotificationsPanel.css'; // We will create this next

const NotificationsPanel = ({ notifications }) => {
    return (
        <div className="notifications-panel">
            <div className="notifications-header">Notifications</div>
            <ul className="notification-list">
                {notifications.length > 0 ? notifications.map((notif, index) => (
                    <li key={index} className="notification-item">
                        <div className="notification-icon">{notif.icon}</div>
                        <div className="notification-content">
                            <p>{notif.message}</p>
                            <span>{notif.time}</span>
                        </div>
                    </li>
                )) : <li className="no-notifications">No new notifications</li>}
            </ul>
        </div>
    );
};

export default NotificationsPanel;