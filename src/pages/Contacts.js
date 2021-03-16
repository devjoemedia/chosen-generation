import React, { useState } from "react";
import Map from "../components/Map";
import "./Contact.css";
import axios from "../axios";

function Contacts() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (name === "" || name.length < 6) {
      console.log("Please name must above 6 charcters");
      return;
    }
    if (message === "" || message.length < 6) {
      console.log("Please message must above 6 charcters");
      return;
    }
    if (!regex.exec(phone)) {
      console.log("Please enter a valid phone number");
      return;
    }
    console.log(name, phone, message);

    try {
      const postData = await axios({
        method: "POST",
        url: "/messages",
        data: {
          name,
          phone: phone * 1,
          message,
        },
      });
      if (postData) {
        window.location = "/";
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="enter name..."
                />
              </div>
              <div className="input-box">
                <label htmlFor="phone">Phone</label>

                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  placeholder="enter phone..."
                />
              </div>
              <div className="input-box">
                <label htmlFor="prayer">Message</label>
                <textarea
                  name="prayer"
                  id="prayer"
                  cols="30"
                  rows="10"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="enter a message..."
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="btn btn-primary">
                Send
              </button>
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
