import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar({title}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h2>{title}</h2>
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li><Link to="/admin"><i className="fas fa-home"></i> Dashboard</Link></li>
          <li><Link to="/admin/sermons/add"><i className="fas fa-plus"></i> Add Sermon</Link></li>
          <li><Link to="/admin/sermons"><i className="fas fa-book-reader"></i> Sermons</Link></li>
          <li><Link to="/admin/events/add"><i className="fas fa-folder-plus"></i> Add Event</Link></li>
          <li><Link to="/admin/events"><i className="fas fa-calendar-alt"></i> Events</Link></li>
          <li><Link to="/admin/prayer-request"><i className="fas fa-praying-hands"></i> Prayer Request</Link></li>
          <li><Link to="/admin/messages"><i className="fas fa-envelope"></i> Messages</Link></li>
        </ul>
      </nav>
      <div className="sidebar__footer">
        <h3>&copy;cgwc 2021</h3>
      </div>
    </aside>
  )
}

export default SideBar
