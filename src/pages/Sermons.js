import React, { useEffect, useState } from "react";
import "./Sermons.css";
import axios from "../axios";
import parse from 'html-react-parser'

function Sermons() {
  const [sermons, setSermons] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/sermons");
      setSermons(data.data);
      return data;
    }
    fetchData();
  }, []);
  console.log(sermons);

  return (
    <div className="sermons">
      <div className="wrapper">
        <h1 className="title-md">sermons</h1>
        <div className="sermons__content">
          <div className="sermons__content--left">
            {sermons.map((sermon, index) => (
              <div key={index} className="sermon">
                <div className="count">
                  <div className="sermon__count">0{index + 1}</div>
                </div>
                <div className="sermon__content">
                  <a className="sermon__title"href={`/sermons/${sermon._id}`}>{sermon.title}</a>
                  <div className="sermon__info">
                    <span className="authur">
                      <i className="fas fa-user"></i>Maxwell Ninson
                    </span>
                    <span className="date">
                      <i className="far fa-calendar-alt"></i>
                      {new Date(sermon.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p>{parse(sermon.body.slice(0, 100))} ...</p>
                </div>
              </div>
            ))}
            {/* <div className="sermon">
              <div className="count">
                <div className="sermon__count">03</div>
              </div>
              <div className="sermon__content">
                <h3>The name of the Lord is Mighty</h3>
                <div className="sermon__info">
                  <span className="authur">
                    <i className="fas fa-user"></i>Maxwell Ninson
                  </span>
                  <span className="date">
                    <i className="far fa-calendar-alt"></i>25 july, 2018
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique reprehenderit labore libero sunt illo consectetur
                  quo. Dolores, quidem omnis nobis velit ab fugiat temporibus
                  autem ...
                </p>
              </div>
            </div>
            <div className="sermon">
              <div className="count">
                <div className="sermon__count">02</div>
              </div>
              <div className="sermon__content">
                <h3>The name of the Lord is Mighty</h3>
                <div className="sermon__info">
                  <span className="authur">
                    <i className="fas fa-user"></i>Maxwell Ninson
                  </span>
                  <span className="date">
                    <i className="far fa-calendar-alt"></i>25 july, 2018
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique reprehenderit labore libero sunt illo consectetur
                  quo. Dolores, quidem omnis nobis velit ab fugiat temporibus
                  autem ...
                </p>
              </div>
            </div>
            <div className="sermon">
              <div className="count">
                <div className="sermon__count">01</div>
              </div>
              <div className="sermon__content">
                <h3>The name of the Lord is Mighty</h3>
                <div className="sermon__info">
                  <span className="authur">
                    <i className="fas fa-user"></i>Maxwell Ninson
                  </span>
                  <span className="date">
                    <i className="far fa-calendar-alt"></i>25 july, 2018
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique reprehenderit labore libero sunt illo consectetur
                  quo. Dolores, quidem omnis nobis velit ab fugiat temporibus
                  autem ...
                </p>
              </div>
            </div> */}
          </div>
          <div className="sermons__content--right">
            <h1 className="title-md">Categories</h1>
            <div className="categories">
              <ul>
                <li className="category">
                  <a href="/">Mariage</a>
                </li>
                <li className="category">
                  <a href="/">Faith</a>
                </li>
                <li className="category">
                  <a href="/">Holliness</a>
                </li>
                <li className="category">
                  <a href="/">Prayer</a>
                </li>
                <li className="category">
                  <a href="/">Fasting</a>
                </li>
              </ul>
            </div>
            <div className="donation">
              <h1 className="title-md">Donations</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                placeat cupiditate laborum odit facilis minus.
              </p>
              <a href="/" className="btn ">
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sermons;
