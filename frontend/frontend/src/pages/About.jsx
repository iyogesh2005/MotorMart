import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {

  /* ===== NUMBER ANIMATION ===== */

  useEffect(() => {

    const counters = document.querySelectorAll(".about-counter");

    counters.forEach(counter => {

      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCounter = () => {

        const increment = target / 80;

        if(count < target){

          count += increment;
          counter.innerText = Math.ceil(count);

          setTimeout(updateCounter,20);

        }else{

          counter.innerText = target + "+";

        }

      };

      updateCounter();

    });

  }, []);

  return (

    <div className="container about-page">

      <h1>About MotorMart</h1>

      {/* WHO WE ARE */}

      <section className="about-section">
        <h2>Who We Are</h2>

        <p>
          MotorMart is a premium online automobile marketplace built to deliver
          high-quality vehicle parts and accessories at competitive prices.
          Our mission is to simplify the buying experience for car and bike
          enthusiasts across India.
        </p>

      </section>

      {/* VISION */}

      <section className="about-section">

        <h2>Our Vision</h2>

        <p>
          We aim to become India's most trusted automobile e-commerce platform
          by ensuring transparency, quality products, fast delivery and secure
          payment systems.
        </p>

      </section>

      {/* OFFER */}

      <section className="about-section">

        <h2>What We Offer</h2>

        <ul>
          <li>✔ Genuine automobile spare parts</li>
          <li>✔ High-performance accessories</li>
          <li>✔ Secure online payments</li>
          <li>✔ Fast nationwide delivery</li>
          <li>✔ 24/7 Customer Support</li>
        </ul>

      </section>

      {/* TECHNOLOGY */}

      <section className="about-section">

        <h2>Our Technology</h2>

        <p>
          This platform is powered by React (Vite), Node.js, Express, MongoDB,
          and secure authentication with JWT. Our payment system integrates
          Razorpay for safe and reliable transactions.
        </p>

      </section>

      {/* ===== STATS ===== */}

      <div className="about-stats">

        <div className="about-stat">
          <h2 className="about-counter" data-target="100">0</h2>
          <span>Products</span>
        </div>

        <div className="about-stat">
          <h2 className="about-counter" data-target="500">0</h2>
          <span>Happy Customers</span>
        </div>

        <div className="about-stat">
          <h2 className="about-counter" data-target="10">0</h2>
          <span>Top Brands</span>
        </div>

      </div>

      {/* ===== TEAM ===== */}

      <section className="team-section">

        <h2>Our Team</h2>

        <div className="team-grid">

          <div className="team-card">
            <h3>Yogesh</h3>
            <span>Founder & Developer</span>
            <p>
              Passionate MERN stack developer building modern
              ecommerce experiences.
            </p>
          </div>

          <div className="team-card">
            <h3>Rider Team</h3>
            <span>Product Testing</span>
            <p>
              Professional riders who test and review
              all riding gear before listing.
            </p>
          </div>

          <div className="team-card">
            <h3>Support Team</h3>
            <span>Customer Service</span>
            <p>
              Our support team ensures fast responses
              and excellent customer service.
            </p>
          </div>

        </div>

      </section>

      {/* ===== TIMELINE ===== */}

      <section className="timeline">

        <h2>MotorMart Journey</h2>

        <div className="timeline-container">

          <div className="timeline-item">
            <h3>2024</h3>
            <p>MotorMart idea and planning phase started.</p>
          </div>

          <div className="timeline-item">
            <h3>2025</h3>
            <p>Development started using MERN stack.</p>
          </div>

          <div className="timeline-item">
            <h3>2026</h3>
            <p>MotorMart ecommerce platform launched.</p>
          </div>

        </div>

      </section>

    </div>

  );

};

export default About;