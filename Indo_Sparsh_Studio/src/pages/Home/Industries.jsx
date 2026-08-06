import React from "react";
import "./Industries.css";
import ScrollBeam from "../ScrollBeam";

const HomeIndustries = () => {
  return (
    <>
    <section className="industries-section">
      <div className="industries-hero">
        <h1>
          Industries <span>We Serve</span>
        </h1>

        <p>
          We design and develop powerful digital products across multiple
          industries, combining technology, creativity, and innovation.
        </p>
      </div>

      <div className="industries-grid">
        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/real-estate.jpeg" />
          </div>
          <p>Real Estate</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/education.jpeg" />
          </div>
          <p>Education</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/ecommerce.jpeg" />
          </div>
          <p>Ecommerce</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/automotive.jpeg" />
          </div>
          <p>Automotive</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/finance.jpeg" />
          </div>
          <p>Banking & Finance</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/healthcare.jpeg" />
          </div>
          <p>Healthcare</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/tourism.jpeg" />
          </div>
          <p>Hospitality & Tourism</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/media.jpeg" />
          </div>
          <p>Entertainment</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/organization.jpeg" />
          </div>
          <p>Non-Profit Organization</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/sports.jpeg" />
          </div>
          <p>Sports & Fitness</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/solar.jpeg" />
          </div>
          <p>Solar Energy</p>
        </div>

        <div className="industry-item">
          <div className="industry-img-wrap">
            <img src="/tech/technology.jpeg" />
          </div>
          <p>Technology & Software</p>
        </div>
      </div>
    </section>
    <ScrollBeam/>
    </>

  );
};

export default HomeIndustries;
