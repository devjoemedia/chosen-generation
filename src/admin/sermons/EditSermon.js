import React, { useEffect, useState } from "react";
import { CKEditor } from "ckeditor4-react";
import AdminNav from "../AdminNav";
import SideBar from "../SideBar";

function EditSermon() {
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()
  const [sermon, setSermon] = useState('')

 useEffect(() => {
   console.log(sermon,title, category);
   
 }, [sermon,title, category])
 
  return (
    <div className="addSermon">
      <AdminNav />
      <div className="addSermon__content">
        <SideBar title="Edit Sermon" />
        <div className="addSermon__main">
          <div className="formContainer">
            <div className="card">
              <h3 className="title-md">Edit Sermon</h3>
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
                {/* <CKEditor
                  data={sermon}
                  onChange={(e) => setSermon(e.editor.getData())}
                  name="sermon"
                  style={{
                    marginTop: "10px",
                  }}
                /> */}
                {/* <textarea name="sermon" id="sermon"></textarea> */}
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

export default EditSermon;
