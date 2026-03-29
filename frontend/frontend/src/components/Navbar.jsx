import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar = () => {

  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        MotorMart
      </Link>

      {/* MENU BUTTON */}
      <div
        className="menu-btn"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        {/* CLOSE BUTTON (ONLY WHEN MENU OPEN) */}
        {menuOpen && (
          <span
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </span>
        )}

        <Link to="/" onClick={()=>setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/products" onClick={()=>setMenuOpen(false)}>
          Products
        </Link>

        <div
          className="cart-icon"
          onClick={()=>{
            navigate("/cart");
            setMenuOpen(false);
          }}
        >
          🛒
          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.length}
            </span>
          )}
        </div>

        <Link to="/contact" onClick={()=>setMenuOpen(false)}>
          Contact
        </Link>

        <Link to="/about" onClick={()=>setMenuOpen(false)}>
          About
        </Link>

        {user ? (
          <span
            className="profile"
            onClick={()=>{
              navigate("/profile");
              setMenuOpen(false);
            }}
          >
            👤
          </span>
        ) : (
          <Link to="/login" onClick={()=>setMenuOpen(false)}>
            Login
          </Link>
        )}

      </div>

    </nav>
  );
};

export default Navbar;