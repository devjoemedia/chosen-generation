import React from "react";
import './PrayerRequest.css'

function PrayerRequest() {
  return (
    <div className="prayerRequest">
        <div className="prayerRequest__content">
          <h1 className="title-md"> <i class="fas fa-book-open"></i> Request a Paryer</h1>
          <form action="/">
            <div className="input-box">
              <input type="text" name="name" placeholder="enter name..."/>
            </div>
            <div className="input-box">
              <input type="text" name="phone" placeholder="enter phone..."/>
            </div>
            <div className="input-box">
              <textarea name="prayer" id="prayer" cols="30" rows="10" placeholder="enter a message..."></textarea>
            </div>
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
    </div>
  );
}

export default PrayerRequest;
