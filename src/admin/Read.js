import React from "react";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
import "./Read.css";

function Read({ from, prayerData, messageData }) {
  return (
    <div className="read">
      <SideBar
        title={
          from === "prayer-request"
            ? "Prayer Requests"
            : from === "messages"
            ? "Messages"
            : ""
        }
      />
      <AdminNav />
      <div className="read__content">
        <div className="read__main">
          <div className="card">
            <div className="read__head">
              <h1>
                {from === "prayer-request"
                  ? "Prayer Request"
                  : from === "messages"
                  ? "Message "
                  : ""}{" "}
              </h1>
              <p>
                From: <span>{prayerData ? prayerData.name : messageData ? messageData.name : ''}</span>
              </p>
              <p>
                Phone: <span>{prayerData ? prayerData.phone : messageData ? messageData.phone : ''}</span>
              </p>
            </div>
            <div className="read__info">
              <p>{prayerData ? prayerData.message : messageData ? messageData.message : ''}</p>
              {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda vitae inventore veniam aliquid eius, quam non,
                accusantium molestiae quis veritatis sunt deserunt accusamus
                dicta, mollitia vero quia perspiciatis rem deleniti dignissimos
                optio consequatur corporis similique dolorum magni? Officiis
                illo vitae tenetur perferendis odio dolore praesentium veniam.
                Quaerat omnis architecto odio!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda vitae inventore veniam aliquid eius, quam non,
                accusantium molestiae quis veritatis sunt deserunt accusamus
                dicta, mollitia vero quia perspiciatis rem deleniti dignissimos
                optio consequatur corporis similique dolorum magni? Officiis
                illo vitae tenetur perferendis odio dolore praesentium veniam.
                Quaerat omnis architecto odio!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
