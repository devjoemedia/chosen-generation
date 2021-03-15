import React from 'react'
import AdminNav from './AdminNav';
import './Dashboard.css';
import SideBar from './SideBar';

function Dashboard(props) {
  return (
    <div className="dashboard">
        <SideBar title="Dashboard" />
      <div className="dashboard__content">
        <AdminNav />
        <div className="dashboard__main">
          Dashboard
        </div>
      </div>
    </div>
  )
}

export default Dashboard
