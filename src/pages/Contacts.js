import React from "react";
import Map from "../components/Map";
import "./Contact.css";

function Contacts() {
  return (
    <div className="contacts">
      <div className="wrapper">
        <div className="contacts__content">
          <div className="contacts__text">
            <div>
              <h3 className="title-md">Contact us</h3>
              <p>Please fill the form and we will get back to you</p>
            </div>
            <ul>
              <li>
                <i className="fas fa-phone-alt  my-2"></i>
                +233 248 578 600 / +233 244 901 508
              </li>
              <li>
                <i className="fas fa-envelope  my-2"></i>
                worshipcenter@gmail.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt  my-2"></i>
                prampram water works (Accra Ghana)
              </li>
            </ul>
            <div className="social-links">
              <div>
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contacts__form">
            <form action="/">
              <div className="input-box">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="enter name..." />
              </div>
              <div className="input-box">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" placeholder="enter phone..." />
              </div>
              <div className="input-box">
                <label htmlFor="prayer">Message</label>
                <textarea
                  name="prayer"
                  id="prayer"
                  cols="30"
                  rows="10"
                  placeholder="enter a message..."
                ></textarea>
              </div>
              <button className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div id="map">
        <Map />
      </div>
    </div>
  );
}

export default Contacts;
