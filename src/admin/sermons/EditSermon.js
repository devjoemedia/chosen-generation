import React, { useEffect, useState } from "react";
import CKEditor from "ckeditor4-react";
import AdminNav from "../AdminNav";
import SideBar from "../SideBar";
import "./EditSermon.css";
import { useParams } from "react-router";
import axios from "../../axios";
import striptags from 'striptags'

function EditSermon() {
  const [sermonInfo, setSermonInfo] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [sermon, setSermon] = useState("");

  const { id } = useParams();

  useEffect(() => {
    setTitle(sermonInfo.title);
    setCategory(sermonInfo.category);
    setSermon(sermonInfo.body);
  }, [sermonInfo.body, sermonInfo.title, sermonInfo.category]);

  // Get sermon to Edits info
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/sermons/" + id);
      setSermonInfo(data.data);
      return data;
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = await axios({
        method: "PATCH",
        url: "/sermons/" + id,
        data: {
          title,
          category,
          body: striptags(sermon,['p','h1','h2','h3','h4','h5','h6','a','b','strong','ul','li']),
        },
      });
      if (updatedData) {
        console.log("update success!");
        window.location = '/admin/sermons'
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="editSermon">
      <SideBar title="Edit Sermon" />
      <div className="editSermon__content">
        <AdminNav />
        <div className="editSermon__main">
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
                  value={title}
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="inputCtn bg-teal ">
                <label htmlFor="sermon">Sermon</label>
                <CKEditor
                  data={sermon}
                  onChange={(e) => setSermon(e.editor.getData())}
                  name="sermon"
                />
                {/* <textarea name="sermon" id="sermon"></textarea> */}
              </div>
              <div className="inputCtn">
                <button onClick={handleSubmit} className="btn">
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
