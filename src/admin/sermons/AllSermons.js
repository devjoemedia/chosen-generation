import React from "react";
import "./AllSermons.css";
import AdminNav from "../AdminNav";
import SideBar from "../SideBar";

function AllSermons() {
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
                  <th>Title</th>
                  <th>Category</th>
                  <th>Sermon</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSermons;
