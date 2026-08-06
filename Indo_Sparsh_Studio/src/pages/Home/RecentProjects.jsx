import React from "react";
import "./RecentProject.css";
import ScrollBeam from "../ScrollBeam";

const RecentProjects = () => {
  return (
    <>
    <section className="recent-projects-section" id="recent-project">
      <div className="recent-hero">
        <h1>
          Our <span>Recent Projects</span>
        </h1>
        <p>Latest work moving forward with innovation and performance.</p>
      </div>

      <div className="projects-marquee">
        <div className="projects-track">
          {[
            {
              title: "Hola 9",
              date: "Feb 2025",
              tag: "Website",
              image: "/tech/project1.jpeg",
              link: "https://hola9.com",
            },
            {
              title: "Procareers",
              date: "Feb 2025",
              tag: "Website",
              image: "/tech/project2.jpeg",
              link: "https://procareers.in/",
            },
            {
              title: "Laser Eye Institute",
              date: "Jul 2023",
              tag: "Website",
              image: "/tech/project3.jpeg",
              link: "https://www.lasereyeinstitute.com/",
            },
            {
              title: "I Smart Business Solutions",
              date: "Jan 2024",
              tag: "Website",
              image: "/tech/project4.jpeg",
              link: "https://ibspl.com/",
            },
          ]
            .concat([
              {
                title: "Hola 9",
                date: "Feb 2025",
                tag: "Website",
                image: "/tech/project1.jpeg",
                link: "https://hola9.com",
              },
              {
                title: "Procareers",
                date: "Feb 2025",
                tag: "Website",
                image: "/tech/project2.jpeg",
                link: "https://procareers.in/",
              },
              {
                title: "Laser Eye Institute",
                date: "Jul 2023",
                tag: "Website",
                image: "/tech/project3.jpeg",
                link: "https://www.lasereyeinstitute.com/",
              },
              {
                title: "I Smart Business Solutions",
                date: "Jan 2024",
                tag: "Website",
                image: "/tech/project4.jpeg",
                link: "https://ibspl.com/",
              },
            ])
            .map((p, i) => (
              <div className="project-card-home" key={i}>
                <div
                  className="project-img"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
                <h3>{p.title}</h3>
                <span className="project-date">{p.date}</span>
                <button
                  className="project-card-btn"
                  onClick={() => window.open(p.link, "_blank")}
                >
                  {p.tag}
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
    <ScrollBeam/>
    </>

  );
};

export default RecentProjects;
