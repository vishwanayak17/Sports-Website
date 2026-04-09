import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white-50 text-gray-800 min-h-screen mt-16">
      <div className="max-w-7xl mx-auto px-6">

        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-600">We're here to help you connect with the best sports academies.</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <a href="tel:+919876543210" className="card clickable">
            <div className="icon-box">
              <FaPhoneAlt className="text-green-500 text-xl" />
            </div>
            <h3>Call Us</h3>
            <p>+91 8320251290, +7698684784</p>
          </a>
          <a href="mailto:info@gujaratsportsacademy.com" className="card clickable">
            <div className="icon-box">
              <FaEnvelope className="text-yellow-500 text-xl" />
            </div>
            <h3>Email</h3>
            <p>abc01@gmail.com</p>
          </a>
          <a href="https://www.google.com/maps?q=Navrangpura,Ahmedabad" target="_blank" rel="noreferrer" className="card clickable">
            <div className="icon-box">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
            </div>
            <h3>Visit Us</h3>
            <p>Ahmedabad, Gandhinagar</p>
          </a>
        </section>

        <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input-style"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input-style"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="input-style"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {status === "success" && (
                <p style={{ color: "#16a34a", fontWeight: 600 }}>✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p style={{ color: "#dc2626", fontWeight: 600 }}>❌ Something went wrong. Try again.</p>
              )}
              <button className="send-btn" type="submit" disabled={status === "loading"}>
                <FaPaperPlane />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Contact Us?</h2>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li>✔ Quick Response Support</li>
              <li>✔ Academy Registration Help</li>
              <li>✔ Training Guidance</li>
              <li>✔ Partnership Opportunities</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <div className="map-box">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Ahmedabad&output=embed"
              className="w-full h-96 border-0"
            ></iframe>
          </div>
        </section>

        {/* <section className="text-center pb-20">
          <h2 className="text-3xl font-bold mb-3">Need Immediate Help?</h2>
          <p className="text-gray-600 mb-6">Our support team is ready to assist you.</p>
        </section> */}

      </div>

      <style>{`
        .card{ background:white; border-radius:20px; border:1px solid #e5e7eb; padding:30px; text-align:center; box-shadow:0 10px 25px rgba(0,0,0,0.05); transition:all 0.3s ease; }
        .clickable:hover{ transform:translateY(-8px) scale(1.02); box-shadow:0 20px 40px rgba(0,0,0,0.12); cursor:pointer; }
        .icon-box{ width:60px; height:60px; margin:auto; margin-bottom:15px; border-radius:50%; background:#f3f4f6; display:flex; align-items:center; justify-content:center; transition:0.3s; }
        .clickable:hover .icon-box{ background:#22c55e20; }
        .card h3{ font-weight:600; margin-bottom:5px; font-size:18px; }
        .card p{ color:#6b7280; font-size:14px; }
        .input-style{ width:100%; padding:14px 16px; border-radius:12px; border:1px solid #e5e7eb; outline:none; transition:0.3s; }
        .input-style:focus{ border-color:#22c55e; box-shadow:0 0 0 3px rgba(34,197,94,0.2); }
        .send-btn{ width:100%; background:#22c55e; color:white; padding:14px; border-radius:12px; font-weight:600; display:flex; align-items:center; justify-content:center; gap:8px; transition:0.3s; }
        .send-btn:hover{ background:#16a34a; transform:scale(1.03); box-shadow:0 10px 25px rgba(34,197,94,0.3); }
        .send-btn:disabled{ background:#86efac; cursor:not-allowed; transform:none; }
        .support-btn{ background:#22c55e; color:white; padding:14px 40px; border-radius:12px; font-weight:600; transition:0.3s; }
        .support-btn:hover{ background:#16a34a; transform:translateY(-3px); box-shadow:0 15px 35px rgba(34,197,94,0.3); }
        .map-box{ border-radius:20px; overflow:hidden; border:1px solid #e5e7eb; box-shadow:0 20px 40px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
};

export default Contact;