import React, { useEffect, useState } from "react";
import "./AllSermons.css";
import AdminNav from "../AdminNav";
import SideBar from "../SideBar";
import axios from "../../axios";
import parse from 'html-react-parser'
import { Link } from "react-router-dom";

function AllSermons() {
  const [sermons, setSermons] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/sermons");
      setSermons(data.data);
      return data;
    }

    fetchData();
  }, [sermons]);

  const handleDelete = async(id)=> {
    console.log(id);
    const data = await axios({
      method: 'DELETE',
      url: `/sermons/${id}`,
    })
    if(data) {
      window.location = '/admin/sermons'
    }
  }
  return (
    <div className="allSermons">
      <SideBar title="Sermons" />
      <div className="allSermons__content">
        <AdminNav />
        <div className="allSermons__main">
          <div className="card">
            <h1 className="title-sm">All Sermons</h1>
            <table>
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Sermon</th>
                  <th>createdAt</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sermons.map((sermon, index) => (
                  <tr key={index}>
                    <td>Maxwell Ninson</td>
                    <td>
                      {sermon.title}
                    </td>
                    <td>{sermon.category}</td>
                    <td>
                      {parse(sermon.body.slice(0, 200))}...
                    </td>
                    <td>{new Date(sermon.createdAt).toLocaleDateString()}</td>
                    <td>
                      <Link to={`/admin/sermons/${sermon._id}/edit`} className="btn">
                        Edit
                      </Link>
                      <button onClick={()=> handleDelete(sermon._id)} className="btn">Delete</button>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </td>
                  <td>Lorem, ipsum.</td>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus, facere voluptatem. Quidem veniam ipsa
                    necessitatibus minus iusto a velit earum placeat optio
                    commodi, consequuntur atque?
                  </td>
                  <td>Maxwell Ninson</td>
                  <td>
                    <a href="/admin/sermons/1/edit" className="btn">
                      Edit
                    </a>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </td>
                  <td>Lorem, ipsum.</td>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus, facere voluptatem. Quidem veniam ipsa
                    necessitatibus minus iusto a velit earum placeat optio
                    commodi, consequuntur atque?
                  </td>
                  <td>Maxwell Ninson</td>
                  <td>
                    <a href="/admin/sermons/1/edit" className="btn">
                      Edit
                    </a>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </td>
                  <td>Lorem, ipsum.</td>
                  <td>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus, facere voluptatem. Quidem veniam ipsa
                    necessitatibus minus iusto a velit earum placeat optio
                    commodi, consequuntur atque?
                  </td>
                  <td>Maxwell Ninson</td>
                  <td>
                    <a href="/admin/sermons/1/edit" className="btn">
                      Edit
                    </a>
                    <button className="btn">Delete</button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSermons;
