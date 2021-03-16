import React from "react";
import AdminNav from "../AdminNav";
import SideBar from "../SideBar";
import "./AdminEvents.css";
import p2 from "../../images/p3.jpg";

function AdminEvents() {
  return (
    <div className="adminEvents">
      <SideBar title="Events" />
      <div className="adminEvents__content">
        <AdminNav />
        <div className="adminEvents__main">
          <div className="eventItem">
            <div className="eventItem__header">
              <img src={p2} alt="poster-img" />
            </div>
            <div className="eventItem__body">
              <h2 className="title-sm">SUNDAY SERVICE</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell
                Ninson.
              </p>
              <div>
                Host: <i className="fas fa-user"></i> Maxwell Ninson
              </div>
              <span>
                <i className="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="eventItem__footer">
              <a href="/admin/events/1/edit" className="btn btn-primary">
                Edit
              </a>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
          <div className="eventItem">
            <div className="eventItem__header">
              <img src={p2} alt="poster-img" />
            </div>
            <div className="eventItem__body">
              <h2 className="title-sm">SUNDAY SERVICE</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell
                Ninson.
              </p>
              <div>
                Host: <i className="fas fa-user"></i> Maxwell Ninson
              </div>
              <span>
                <i className="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="eventItem__footer">
              <a href="/admin/events/1/edit" className="btn btn-primary">
                Edit
              </a>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
          <div className="eventItem">
            <div className="eventItem__header">
              <img src={p2} alt="poster-img" />
            </div>
            <div className="eventItem__body">
              <h2 className="title-sm">SUNDAY SERVICE</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell
                Ninson.
              </p>
              <div>
                Host: <i className="fas fa-user"></i> Maxwell Ninson
              </div>
              <span>
                <i className="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="eventItem__footer">
              <a href="/admin/events/1/edit" className="btn btn-primary">
                Edit
              </a>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
          <div className="eventItem">
            <div className="eventItem__header">
              <img src={p2} alt="poster-img" />
            </div>
            <div className="eventItem__body">
              <h2 className="title-sm">SUNDAY SERVICE</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell
                Ninson.
              </p>
              <div>
                Host: <i className="fas fa-user"></i> Maxwell Ninson
              </div>
              <span>
                <i className="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="eventItem__footer">
              <a href="/admin/events/1/edit" className="btn btn-primary">
                Edit
              </a>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
          <div className="eventItem">
            <div className="eventItem__header">
              <img src={p2} alt="poster-img" />
            </div>
            <div className="eventItem__body">
              <h2 className="title-sm">SUNDAY SERVICE</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell
                Ninson.
              </p>
              <div>
                Host: <i className="fas fa-user"></i> Maxwell Ninson
              </div>
              <span>
                <i className="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="eventItem__footer">
              <a href="/admin/events/1/edit" className="btn btn-primary">
                Edit
              </a>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
          <div className="eventItem">
            <div className="eventItem__header">
              <img src={p2} alt="poster-img" />
            </div>
            <div className="eventItem__body">
              <h2 className="title-sm">SUNDAY SERVICE</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell
                Ninson.
              </p>
              <div>
                Host: <i className="fas fa-user"></i> Maxwell Ninson
              </div>
              <span>
                <i className="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="eventItem__footer">
              <a href="/admin/events/1/edit" className="btn btn-primary">
                Edit
              </a>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminEvents;
