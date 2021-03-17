import React, { useState } from "react";
import "./AddSermon.css";
import AdminNav from "../AdminNav";
import SideBar from "../SideBar";
import CKEditor from "ckeditor4-react";
import axios from "../../axios";

function AddSermon() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [sermon, setSermon] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title === "" || title.length < 6) {
      console.log("Please title must above 6 charcters");
      return;
    }
    if (category === "" || category.length < 6) {
      console.log("Please category must above 6 charcters");
      return;
    }
    if (sermon === "" || sermon.length < 10) {
      console.log("Please enter a valid sermon");
      return;
    }

    try {
      const postData = await axios({
        method: "POST",
        url: "/sermons",
        data: {
          title,
          author: "6027bfa6b3c5023b5cf9d448",
          category,
          body: sermon,
        },
      });
      if (postData) {
        window.location = "/admin/sermons";
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="addSermon">
      <SideBar title="Add Sermon" />
      <div className="addSermon__content">
        <AdminNav />
        <div className="addSermon__main">
          <div className="formContainer">
            <div className="card">
              <h3 className="title-md">Add Sermon</h3>
              <div className="inputCtn">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  className="inputField"
                  placeholder="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="inputCtn">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  name="category"
                  className="inputField"
                  placeholder="category"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="inputCtn bg-teal ">
                <label htmlFor="sermon">Sermon</label>
                <CKEditor
                  data={sermon}
                  onChange={(e) => setSermon(e.editor.getData())}
                  name="sermon"
                  style={{
                    marginTop: "10px",
                  }}
                />
                {/* <textarea name="sermon" id="sermon"></textarea> */}
              </div>
              <div className="inputCtn">
                {loading ? (
                  <button disabled onClick={handleSubmit} className="btn">
                    Publish
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn">
                    Publish
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSermon;
