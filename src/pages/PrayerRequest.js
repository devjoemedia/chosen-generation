import React, { useState } from "react";
import "./PrayerRequest.css";
import axios from "../axios";

function PrayerRequest() {
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
        url: "/prayer-requests",
        data: {
          name,
          phone: phone * 1,
          message,
        },
      });
      if(postData) {
        setName('')
        setPhone()
        setMessage('')
        window.location = '/'
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="prayerRequest">
      <div className="prayerRequest__content">
        <h1 className="title-md">
          {" "}
          <i className="fas fa-book-open"></i> Request a Paryer
        </h1>
        <form action="/">
          <div className="input-box">
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="enter name..."
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="enter phone..."
            />
          </div>
          <div className="input-box">
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
  );
}

export default PrayerRequest;
