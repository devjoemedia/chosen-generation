import React from 'react'
import './Sermons.css'

function Sermons() {
  return (
    <div className="sermons">
      <div className="wrapper">
        <h1 className="title-md">sermons</h1>
        <div className="sermons__content">
          <div className="sermons__content--left">
            <div className="sermon">
              <div className="count">
                <div className="sermon__count">04</div>
              </div>
              <div className="sermon__content">
                <h3>The name of the Lord is Mighty</h3>
                <div className="sermon__info">
                  <span className="authur"><i class="fas fa-user"></i>Maxwell Ninson</span>
                  <span className="date"><i class="far fa-calendar-alt"></i>25 july, 2018</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit labore libero sunt illo consectetur quo. Dolores, quidem omnis nobis velit ab fugiat temporibus autem ...
                </p>
              </div>
            </div>
            <div className="sermon">
              <div className="count">
                <div className="sermon__count">03</div>
              </div>
              <div className="sermon__content">
                <h3>The name of the Lord is Mighty</h3>
                <div className="sermon__info">
                  <span className="authur"><i class="fas fa-user"></i>Maxwell Ninson</span>
                  <span className="date"><i class="far fa-calendar-alt"></i>25 july, 2018</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit labore libero sunt illo consectetur quo. Dolores, quidem omnis nobis velit ab fugiat temporibus autem ...
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
                  <span className="authur"><i class="fas fa-user"></i>Maxwell Ninson</span>
                  <span className="date"><i class="far fa-calendar-alt"></i>25 july, 2018</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit labore libero sunt illo consectetur quo. Dolores, quidem omnis nobis velit ab fugiat temporibus autem ...
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
                  <span className="authur"><i class="fas fa-user"></i>Maxwell Ninson</span>
                  <span className="date"><i class="far fa-calendar-alt"></i>25 july, 2018</span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit labore libero sunt illo consectetur quo. Dolores, quidem omnis nobis velit ab fugiat temporibus autem ...
                </p>
              </div>
            </div>
          </div>
          <div className="sermons__content--right">
            <h1 className="title-md">Categories</h1>
            <div className="categories">
              <ul>
                <li className="category"><a href="/">Mariage</a></li>
                <li className="category"><a href="/">Faith</a></li>
                <li className="category"><a href="/">Holliness</a></li>
                <li className="category"><a href="/">Prayer</a></li>
                <li className="category"><a href="/">Fasting</a></li>
              </ul>
            </div>
            <div className="donation">
              <h1 className="title-md">Donations</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, placeat cupiditate laborum odit facilis minus.</p>
              <a href="/" className="btn ">Make a Donation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sermons
