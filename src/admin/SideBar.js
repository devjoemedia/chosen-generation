import React from 'react'
import './SideBar.css'

function SideBar({title}) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>{title}</h2>
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li><a href="/admin"><i className="fas fa-home"></i> Dashboard</a></li>
          <li><a href="/admin/sermons/add"><i className="fas fa-plus"></i> Add Sermon</a></li>
          <li><a href="/admin/sermons"><i className="fas fa-book-reader"></i> Sermons</a></li>
          <li><a href="/admin/events/add"><i className="fas fa-folder-plus"></i> Add Event</a></li>
          <li><a href="/admin/events"><i className="fas fa-calendar-alt"></i> Events</a></li>
          <li><a href="/admin/prayer-request"><i className="fas fa-praying-hands"></i> Prayer Request</a></li>
          <li><a href="/admin/messages"><i className="fas fa-envelope"></i> Messages</a></li>
        </ul>
      </nav>
      <div className="sidebar__footer">
        <h3>&copy;cgwc 2021</h3>
      </div>
    </div>
  )
}

export default SideBar
