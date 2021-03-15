import React from "react";
import "./Home.css";
import p1 from "../images/p1.jpg";
import p2 from "../images/p3.jpg";
import p3 from "../images/p4.jpg";
import Map from "../components/Map";

function Home() {
  return (
    <div>
      <section className="banner">
        <div className="banner__content">
          <div className="wrapper">
            <h1 className="title title-lg">OUR CORE PURPOSE</h1>
            <p className="title-md">Changing and Transforming human lives </p>
            <a href="/" className="btn btn-primary">
              Join us
            </a>
            <a href="/" className="btn btn-primary">
              About us
            </a>
          </div>
        </div>
      </section>
      {/* Who we are */}
      <section className="whoweare">
        <div className="wrapper">
          <div className="whoweare__content">
            <h1>Welcome to CGWC</h1>
            <p>
              Chosen Generation Worship Center (CGWC) is a place where u can
              experience life at it's best it's a place for families, community
              and growth we are about faith, Friendship and Generousity. For a
              detailed overview of who we are and what we believe you can visit
              us at Our Prampram branch (Prampram Water Works Accra Ghana - West
              Africa) or email us at worshipcenter@gmail.com or Call us on +233
              248 578 600/+233 244 901 508
            </p>
            <a href="/" className="btn">
              Read more
            </a>
          </div>
        </div>
      </section>
      {/* pastors */}
      <section className="pastors">
        <div className="wrapper">
          <h1>Our Leaders</h1>
          <div className="pastors__content">
            <div className="pastor">
              <img src={p1} alt="pastor" />
              <h4 className="pastor__name">Apo. Maxwell Ninson</h4>
              <p className="pastor__role">Founder</p>
            </div>
            <div className="pastor">
              <img src={p2} alt="pastor" />
              <h4 className="pastor__name">Apo. Maxwell Ninson</h4>
              <p className="pastor__role">Founder</p>
            </div>
            <div className="pastor">
              <img src={p3} alt="pastor" />
              <h4 className="pastor__name">Apo. Maxwell Ninson</h4>
              <p className="pastor__role">Founder</p>
            </div>
          </div>
        </div>
      </section>
      {/* our vision */}
      <section className="vision">
        <div className="vision__content">
          <h1>Our Vision</h1>
          <p>
            <span className="qto">“ </span>Building People into leadership with
            Global pation deeply rooted in
            <span className="qto"> „</span>
          </p>
        </div>
      </section>
      {/* <!-- video --> */}
      <div id="video" className="py-5">
        <div className="video__content">
          <iframe
            className="embed-responsive-item"
            title="video"
            src="https://www.youtube.com/embed/GEQGDJNPIbE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* our vision */}
      <section className="mission">
        <div className="mission__content">
          <h1>Our mission</h1>
          <p>
            <span className="qto">“ </span> We are commited to the mission of
            raising leaders for the nation who are complete in Spirit, Mind and
            Body, that is contributing to the production of high leadership
            <span className="qto"> „</span>
          </p>
        </div>
      </section>
      {/* contact info */}
      <section className="contactInfo">
        <div className="wrapper">
          <div className="contactInfo__content">
            <div className="contactInfo__contentLeft">
              <h1>Contact Us</h1>
              <h4>Prampram, Ghana</h4>
              <p>Sunday Morning Classes: 9:30</p>
              <p>Sunday Service: 10:45</p>
              <p>Office Hours: Monday-Friday 9:00-5:00</p>
              <p>Email Us: worshipcenter@gmail.com</p>
              <p>Phone: +233 248 578 600 / +233 244 901 508</p>
            </div>
              <Map />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
