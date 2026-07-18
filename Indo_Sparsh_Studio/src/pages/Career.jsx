import "./Career.css";
import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import {
  FaRocket,
  FaBrain,
  FaGlobe,
  FaPaperPlane,
  FaComments,
  FaUpload,
} from "react-icons/fa";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import ScrollBeam from "./ScrollBeam";

export default function Career() {
  useEffect(() => {
    document.title = "Career | Indo Sparsh Studio";
  }, []);
  const [success, setSuccess] = useState(false);
  const [jobSuccess, setJobSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [resume, setResume] = useState(null);
  const [fileName, setFileName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const [jobForm, setJobForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    about: "",
  });

  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", jobForm.name);
      formData.append("email", jobForm.email);
      formData.append("phone", jobForm.phone);
      formData.append("experience", jobForm.experience);
      formData.append("about", jobForm.about);
      formData.append("role", jobTitle);
      formData.append("resume", resume);
      const res = await fetch("/backend-php/api/career.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setJobSuccess(true);
        setJobForm({
          name: "",
          email: "",
          phone: "",
          experience: "",
          about: "",
        });
        setJobTitle("");
        setResume("");
        setFileName("");

        setTimeout(() => {
          setJobSuccess(false);
          setShowForm(false);
        }, 3000);
      }
    } catch (err) {
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const handleJobChange = (e) => {
    setJobForm({
      ...jobForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    setFileName(file?.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `/backend-php/api/contact.php`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const openForm = (title) => {
    setJobTitle(title);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <section className="career-section">
        {/* HERO */}
        <div className="career-hero">
          <h1>
            Build Your <span>Future</span> With Us
          </h1>
          <p>
            Join Indo Sparsh Studio and work on futuristic products,
            cutting-edge technology, and meaningful digital experiences.
          </p>
        </div>

        {/* WHY WORK WITH US */}
        <div className="career-highlights">
          <div className="highlight-card">
            <h3>
              <FaRocket className="career-icon" />
              Growth Culture
            </h3>
            <p>Learn, build, and evolve with a team that pushes boundaries.</p>
          </div>

          <div className="highlight-card glow">
            <h3>
              <FaBrain className="career-icon" />
              Innovative Projects
            </h3>
            <p>Work on AI, immersive UI, and next-gen digital platforms.</p>
          </div>

          <div className="highlight-card">
            <h3>
              <FaGlobe className="career-icon" />
              Remote Friendly
            </h3>
            <p>Flexible work culture focused on results and creativity.</p>
          </div>
        </div>

        {/* ================= CAREER PIPELINE ================= */}
        <h2 className="career-title">Our Career Pipeline</h2>

        <div className="career-pipeline">
          <div className="pipeline-track"></div>

          <div className="pipeline-step s1">
            <div className="pipeline-core"></div>
            <div className="pipeline-card">
              <h3>
                <FaPaperPlane className="career-icon" />
                Apply
              </h3>
              <p>Submit your profile and portfolio.</p>
            </div>
          </div>

          <div className="pipeline-step s2">
            <div className="pipeline-core"></div>
            <div className="pipeline-card glow">
              <h3>
                <FaBrain className="career-icon" />
                Screening
              </h3>
              <p>We analyze skills and potential.</p>
            </div>
          </div>

          <div className="pipeline-step s3">
            <div className="pipeline-core"></div>
            <div className="pipeline-card">
              <h3>
                <FaComments className="career-icon" />
                Interview
              </h3>
              <p>Meet the Indo Sparsh team.</p>
            </div>
          </div>

          <div className="pipeline-step s4">
            <div className="pipeline-core"></div>
            <div className="pipeline-card glow">
              <h3>
                <HiOutlineClipboardDocumentList className="career-icon" />
                Task
              </h3>
              <p>Show how you think and build.</p>
            </div>
          </div>

          <div className="pipeline-step s5">
            <div className="pipeline-core"></div>
            <div className="pipeline-card">
              <h3>
                <FaRocket className="career-icon" />
                Welcome
              </h3>
              <p>You become part of Indo Sparsh.</p>
            </div>
          </div>
        </div>

        {/* JOB OPENINGS */}
        <h2 className="career-title">Open Positions</h2>

        <div className="job-grid">
          <div className="job-card">
            <h3>Frontend Developer (React)</h3>
            <p>Build immersive, high-performance user interfaces.</p>
            <span>Experience: 1–3 Years</span>
            <button onClick={() => openForm("Frontend Developer (React)")}>
              Apply Now
            </button>
          </div>

          <div className="job-card glow">
            <h3>Backend Developer (Node.js)</h3>
            <p>Design secure, scalable backend systems and APIs.</p>
            <span>Experience: 2–4 Years</span>
            <button onClick={() => openForm("Backend Developer (Node.js)")}>
              Apply Now
            </button>
          </div>

          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Create futuristic, human-centered digital experiences.</p>
            <span>Experience: 1–3 Years</span>
            <button onClick={() => openForm("UI/UX Designer")}>
              Apply Now
            </button>
          </div>
        </div>

        {showForm && (
          <div className="apply-modal">
            <div className="apply-form">
              <button className="close-btn" onClick={closeForm}>
                ✕
              </button>

              <h2>Apply for {jobTitle}</h2>

              <form onSubmit={handleJobSubmit}>
                <div className="form-group-contact">
                  <input
                    type="text"
                    name="name"
                    value={jobForm.name}
                    placeholder="Full Name"
                    onChange={handleJobChange}
                    required
                  />
                </div>

                <div className="form-group-contact">
                  <input
                    type="email"
                    name="email"
                    value={jobForm.email}
                    placeholder="Email Address"
                    onChange={handleJobChange}
                    required
                  />
                </div>

                <div className="form-group-contact">
                  <input
                    type="tel"
                    name="phone"
                    value={jobForm.phone}
                    placeholder="Phone Number"
                    onChange={handleJobChange}
                    required
                  />
                </div>

                <div className="form-group-contact">
                  <input
                    type="text"
                    name="experience"
                    value={jobForm.experience}
                    placeholder="Years of Experience"
                    onChange={handleJobChange}
                  />
                </div>

                <div className="form-group-contact file-upload">
                  <label className="upload-label">
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                    />
                    <span className="upload-btn">
                      <FaUpload /> Upload Resume
                    </span>
                  </label>

                  {fileName && <p className="file-name">{fileName}</p>}
                </div>

                <div className="form-group-contact">
                  <textarea
                    value={jobForm.about}
                    name="about"
                    placeholder="Tell us about yourself"
                    onChange={handleJobChange}
                  ></textarea>
                </div>

                <button className="submit-btn">{loading ? "Request Sending..":"Submit Application"}</button>
              </form>
              {jobSuccess && (
                <div className="success-overlay">
                  <div className="success-box">
                    <div className="success-check">✓</div>
                    <h2>Application Sent</h2>
                    <p>Our team will review your profile soon.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      <ScrollBeam />

      <section className="contact-section">
        {/* Header */}
        <div className="contact-header">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            Feel free to contact us with any questions or concerns. We will get
            back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="contact-card">
          <form className="contact-form-page" onSubmit={handleSubmit}>
            <div className="form-row-page">
              <div className="form-group-contact">
                <label>Name *</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group-contact">
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="form-group-contact">
              <label>Conatct No. *</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
            </div>
            <div className="form-group-contact">
              <label>Email Id *</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group-contact">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              />
            </div>

            <button className="contact-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {success && (
            <div className="success-overlay">
              <div className="success-box">
                <div className="success-check">✓</div>
                <h2>Message Sent</h2>
                <p>We’ll contact you very soon.</p>
              </div>
            </div>
          )}
        </div>

        <div className="info-card">
          <h2>Contacts</h2>
          <p className="info-highlight">contact@indosparsh.com</p>
          <p>+91 80053 51770</p>
        </div>

        <div className="info-card">
          <h2>Address</h2>
          <p>
            Incuspaze, 11th Floor Rohtas Summit, Vibhuti Khand, Gomtinagar,
            Lucknow – 226010, Uttar Pradesh, India
          </p>
        </div>

        <div className="info-card">
          <h2>Opening Hours</h2>
          <p>
            Monday – Saturday: <span>10:00 AM – 5:00 PM</span>
          </p>
          <p>
            Sunday: <span className="closed">Closed</span>
          </p>
        </div>

        {/* MAP CARD */}
        <div className="map-card">
          <iframe
            title="Indo Sparsh Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2887749198094!2d80.99241317414739!3d26.862564862246256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c9d61cb27b%3A0x2b7487eae56b0919!2sSumit%20Complex%2C%20Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1769161850031!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
