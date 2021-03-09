import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CKEditor from "ckeditor4-react";
import AdminNav from "../AdminNav";
import SideBar from "../SideBar";
import "./EditEvent.css";

function EditEvent() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="editEvents">
      <AdminNav />
      <div className="editEvents__content">
        <SideBar title="Edit Event" />
        <div className="editEvents__main">
          <div className="formContainer">
            <div className="card">
              <h3 className="title-md">Edit Event</h3>
              <div className="inputCtn">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  className="inputField"
                  placeholder="title"
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="inputCtn">
                <label htmlFor="category">Host</label>
                <input
                  type="text"
                  name="category"
                  className="inputField"
                  placeholder="Host"
                  // onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="inputCtn">
                <label htmlFor="date">Date</label>
                <DatePicker
                  dateFormat="dd/MM/yyy"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="inputCtn">
                <label htmlFor="category">Event Photo</label>
                <input
                  type="file"
                  name="category"
                  className="inputField"
                  placeholder="Photo "
                  // onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="inputCtn bg-teal ">
                <label htmlFor="descripton">Descripton</label>
                <CKEditor
                  // data={descripton}
                  // onChange={(e) => setdescripton(e.editor.getData())}
                  name="descripton"
                  style={{
                    marginTop: "10px",
                  }}
                />
                {/* <textarea name="descripton" id="descripton"></textarea> */}
              </div>
              <div className="inputCtn">
                <button type="submit" className="btn">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEvent;
