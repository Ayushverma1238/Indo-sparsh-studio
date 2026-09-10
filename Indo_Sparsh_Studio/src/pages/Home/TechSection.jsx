import "./TechSection.css";
const HomeTechStack = () => {
  return (
    <>
    <section className="tech-section">
      <div className="tech-hero">
        <h1>
          Technology <span>We Used</span>
        </h1>
        <p>
          We work with modern, powerful, and scalable technologies to build
          high-performance digital products.
        </p>
      </div>

      {/* ===== AUTO SCROLL TECHNOLOGY LOGOS ===== */}
      <div className="clients-marquee">
        <div className="marquee-track">
          <div className="marquee-item">
            <img src="/tech/html.webp" alt="HTML" />
          </div>
          <div className="marquee-item">
            <img src="/tech/css.png" alt="CSS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/bootstrap.png" alt="Bootstrap" />
          </div>
          <div className="marquee-item">
            <img src="/tech/javascript.png" alt="JavaScript" />
          </div>
          <div className="marquee-item">
            <img src="/tech/nodejs.png" alt="NodeJS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/expressjs.png" alt="ExpressJS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/git.png" alt="Git" />
          </div>
          <div className="marquee-item">
            <img src="/tech/github.png" alt="GitHub" />
          </div>
          <div className="marquee-item">
            <img src="/tech/mongodb.png" alt="MongoDB" />
          </div>
          <div className="marquee-item">
            <img src="/tech/mysql.png" alt="MySQL" />
          </div>
          <div className="marquee-item">
            <img src="/tech/postman.png" alt="Postman" />
          </div>
          <div className="marquee-item">
            <img src="/tech/aws.png" alt="AWS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/redis.png" alt="Redis" />
          </div>
          <div className="marquee-item">
            <img src="/tech/react.png" alt="React" />
          </div>

          {/* duplicate for smooth infinite loop */}
          <div className="marquee-item">
            <img src="/tech/html.webp" alt="HTML" />
          </div>
          <div className="marquee-item">
            <img src="/tech/css.png" alt="CSS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/bootstrap.png" alt="Bootstrap" />
          </div>
          <div className="marquee-item">
            <img src="/tech/javascript.png" alt="JavaScript" />
          </div>
          <div className="marquee-item">
            <img src="/tech/nodejs.png" alt="NodeJS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/expressjs.png" alt="ExpressJS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/git.png" alt="Git" />
          </div>
          <div className="marquee-item">
            <img src="/tech/github.png" alt="GitHub" />
          </div>
          <div className="marquee-item">
            <img src="/tech/mongodb.png" alt="MongoDB" />
          </div>
          <div className="marquee-item">
            <img src="/tech/mysql.png" alt="MySQL" />
          </div>
          <div className="marquee-item">
            <img src="/tech/postman.png" alt="Postman" />
          </div>
          <div className="marquee-item">
            <img src="/tech/aws.png" alt="AWS" />
          </div>
          <div className="marquee-item">
            <img src="/tech/redis.png" alt="Redis" />
          </div>
          <div className="marquee-item">
            <img src="/tech/react.png" alt="React" />
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default HomeTechStack;
