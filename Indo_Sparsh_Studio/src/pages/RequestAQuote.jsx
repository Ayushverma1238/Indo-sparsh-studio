import "./RequestAQuote.css";
import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import { countries } from "../utils/quoteData";
import { budget, timeLine, preferedContactMethod } from "../utils/quoteData";
import { services } from "../utils/quoteData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function RequestAQuota() {
  useEffect(() => {
    document.title = "Request a Quote | Indo Sparsh Studio";
  }, []);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Company Information
    companyName: "",
    website: "",

    // Project Information
    service: services[0],
    projectType: "",
    budget: budget[0],
    timeline: timeLine[0],
    country: countries[0],

    // Project Details
    projectTitle: "",
    projectDescription: "",

    // Attachment
    attachment: null,

    // Optional
    preferredContact: preferedContactMethod[0],
  });
  const [loading, setLoading] = useState(false);
  const [isServiceArrow, setIsServiceArrow] = useState(false);
  const [isBudgetArrow, setIsBudgetArrow] = useState(false);
  const [isTimeLineArrow, setIsTimeLineArrow] = useState(false);
  const [isCountryArrow, setIsCountryArrow] = useState(false);
  const [isPreferedContactMethod, setIsPreferedContactMethod] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };

  const handleSelectChange = (field, value, setDropdown) => {
    console.log(field, value, setDropdown);
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (setDropdown) {
      setDropdown(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          data.append(key, value);
        }
      });

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}/api/request-quote.php`,
        {
          method: "POST",
          body: data,
        },
      );

      const response = await res.json();

      if (response.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",

          // Company Information
          companyName: "",
          website: "",

          // Project Information
          service: services[0],
          projectType: "",
          budget: budget[0],
          timeline: timeLine[0],
          country: countries[0],

          // Project Details
          projectTitle: "",
          projectDescription: "",

          // Attachment
          attachment: null,

          // Optional
          preferredContact: preferedContactMethod[0],
        });

        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <h1>
          Request a <span>Quote</span>
        </h1>
        <p>
          Entrust with high professionalism we are offering pixel perfect web
          and mobile application development third party integration and
          solution to our.
        </p>
      </div>

      {/* Form Card */}
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name */}
          {/* <div className="form-row"> */}
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          {/* </div> */}

          {/* Contact */}
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>

          {/* Company */}
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Company Name"
            />
          </div>

          {/* Website */}
          <div className="form-group">
            <label>Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
            />
          </div>

          {/* Service */}
          <div style={{ position: "relative" }} className="form-group">
            <label>Service Required *</label>
            <div
              className="select-box"
              onClick={() => setIsServiceArrow(!isServiceArrow)}
            >
              <span>{formData.service}</span>
              {isServiceArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isServiceArrow && (
              <div
                style={{ position: "absolute", left: "15px", top: "80px" }}
                className="select-item"
              >
                {services.map((item, index) => (
                  <span
                    onClick={() =>
                      handleSelectChange("service", item, setIsServiceArrow)
                    }
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Project Type */}
          <div className="form-group">
            <label>Project Type *</label>
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="Business Website, Dashboard, Portfolio..."
              required
            />
          </div>

          {/* Budget */}
          <div style={{ position: "relative" }} className="form-group">
            <label>Estimated Budget *</label>
            <div
              className="select-box"
              onClick={() => setIsBudgetArrow(!isBudgetArrow)}
            >
              <span>{formData.budget}</span>
              {isBudgetArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isBudgetArrow && (
              <div
                style={{ position: "absolute", left: "15px", top: "80px" }}
                className="select-item"
              >
                {budget.map((item, index) => (
                  <span
                    onClick={() =>
                      handleSelectChange("budget", item, setIsBudgetArrow)
                    }
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }} className="form-group">
            <label>Project Timeline *</label>
            <div
              className="select-box"
              onClick={() => setIsTimeLineArrow(!isTimeLineArrow)}
            >
              <span>{formData.timeline}</span>
              {isTimeLineArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isTimeLineArrow && (
              <div
                style={{ position: "absolute", left: "15px", top: "80px" }}
                className="select-item"
              >
                {timeLine.map((item, index) => (
                  <span
                    onClick={() =>
                      handleSelectChange("timeline", item, setIsTimeLineArrow)
                    }
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Country */}
          <div style={{ position: "relative" }} className="form-group">
            <label>Country *</label>
            <div
              className="select-box"
              onClick={() => setIsCountryArrow(!isCountryArrow)}
            >
              <span>{formData.country}</span>
              {isCountryArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isCountryArrow && (
              <div
                style={{ position: "absolute", left: "15px", top: "80px" }}
                className="select-item"
              >
                {countries.map((item, index) => (
                  <span
                    onClick={() =>
                      handleSelectChange("country", item, setIsCountryArrow)
                    }
                    key={index}
                  >
                    {index + 1}. {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Project Title */}
          <div className="form-group">
            <label>Project Title *</label>
            <input
              type="text"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              placeholder="Project Title"
              required
            />
          </div>

          {/* Preferred Contact */}
          <div style={{ position: "relative" }} className="form-group">
            <label>Preferred Contact Method</label>
            <div
              className="select-box"
              onClick={() =>
                setIsPreferedContactMethod(!isPreferedContactMethod)
              }
            >
              <span>{formData.preferredContact}</span>
              {isPreferedContactMethod ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isPreferedContactMethod && (
              <div
                style={{ position: "absolute", left: "15px", top: "80px" }}
                className="select-item"
              >
                {preferedContactMethod.map((item, index) => (
                  <span
                    onClick={() =>
                      handleSelectChange(
                        "preferredContact",
                        item,
                        setIsPreferedContactMethod,
                      )
                    }
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Attachment */}
          <div className="form-group">
            <label>Upload Attachment</label>
            <input
              type="file"
              name="attachment"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
            />
          </div>

          {/* Project Description */}
          <div className="form-group">
            <label>Project Description *</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Describe your project requirements..."
              rows={6}
              required
            />
          </div>

          <button className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Request a Quote"}
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
      <SocialLinks />
    </section>
  );
}
