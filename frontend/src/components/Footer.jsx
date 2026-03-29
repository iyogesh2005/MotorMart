import { Link, useNavigate } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {

  const navigate = useNavigate();

  const goToCategory = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-col">
          <h2 className="footer-logo">MotorMart</h2>

          <p>
            MotorMart is your trusted destination for premium
            motorcycle accessories, helmets and riding gear.
            Ride safe with quality products built for safety
            and performance.
          </p>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

        {/* CATEGORIES */}

        <div className="footer-col">
          <h3>Categories</h3>

          <ul>

            <li onClick={() => goToCategory("Helmet")}>
              Helmets
            </li>

            <li onClick={() => goToCategory("Gloves")}>
              Gloves
            </li>

            <li onClick={() => goToCategory("Jacket")}>
              Jackets
            </li>

            <li onClick={() => goToCategory("Accessories")}>
              Riding Accessories
            </li>

            <li onClick={() => goToCategory("Gadgets")}>
              Bike Gadgets
            </li>

          </ul>
        </div>

        {/* CONTACT */}

        <div className="footer-col">
          <h3>Contact</h3>

          <p>Email: support@motormart.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MotorMart. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;