import React from 'react'
import AdminNav from './AdminNav'
import './Messages.css'
import SideBar from './SideBar'

function Messages() {
  return (
    <div className='messages'>
         <SideBar title="Messages" />
      <div className="messages__content">
        <AdminNav />
        <div className="messages__main">
        <div className="card">
            <h1 className="title-sm">All Contacts</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>CreatedAt</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Jane Doe
                  </td>
                  <td>+223 555 555 555</td>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus, facere voluptatem.
                  </td>
                  <td>June 25th, 2020</td>
                  <td>
                    <a href="/admin/messages/1" className="btn">
                      Read
                    </a>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Jane Doe
                  </td>
                  <td>+223 555 555 555</td>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus, facere voluptatem.
                  </td>
                  <td>June 25th, 2020</td>
                  <td>
                    <a href="/admin/messages/1" className="btn">
                      Read
                    </a>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Jane Doe
                  </td>
                  <td>+223 555 555 555</td>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus, facere voluptatem.
                  </td>
                  <td>June 25th, 2020</td>
                  <td>
                    <a href="/admin/messages/1" className="btn">
                      Read
                    </a>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Messages
