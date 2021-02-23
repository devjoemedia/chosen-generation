import React from "react";
import "./Events.css";
import p1 from '../images/p4.jpg'
import p2 from '../images/p3.jpg'
import p3 from '../images/p5.jpg'

function Events() {
  return (
    <div className="events">
      <div className="wrapper">
        <h1 className="title-md">Events</h1>
        <div className="events__content">
          <div className="event">
            <div className="event__text">
              <h2 className="title-sm">SUNDAY SERVICE</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell Ninson.
              </p>
              <div >
                Host: <i class="fas fa-user"></i> Maxwell Ninson
              </div>
              <span >
                <i class="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="event__image">
              <img src={p1} alt="poster-img"/>
            </div>
          </div>
          <div className="event">
            <div className="event__image">
              <img src={p2} alt="poster-img"/>
            </div>
            <div className="event__text">
              <h2 className="title-sm">COUPLES WEEK</h2>
              <p>
                Sunday Worship and empowerment service with Apostel Maxwell Ninson.
              </p>
              <div >
                Host: <i class="fas fa-user"></i> Maxwell Ninson
              </div>
              <span >
                <i class="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
          </div>
          <div className="event">
            <div className="event__text">
              <h2 className="title-sm">WORSHIP NIGHT</h2>
              <p>
                Sunday Worship and empowerment service with Praise Choir.
              </p>
              <div >
                Host: <i class="fas fa-user"></i> Maxwell Ninson
              </div>
              <span >
                <i class="far fa-calendar-alt"></i>25 july, 2018
              </span>
              <span>Time: 8:00AM-10:30AM</span>
            </div>
            <div className="event__image">
              <img src={p3} alt="poster-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
