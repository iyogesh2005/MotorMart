import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="profile-empty">
        <h2>Please login first</h2>
      </div>
    );
  }

  return (

    <div className="profile-page">

      <div className="profile-card">

        {/* HEADER */}
        <div className="profile-header">
          <h2>Welcome, {user.name}</h2>
          <p>
            Manage your MotorMart account information and security
            from your personal profile dashboard.
          </p>
        </div>

        {/* ACCOUNT INFO */}
        <div className="profile-section">

          <h3>Account Information</h3>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>

        </div>

        {/* CONTACT INFO */}
        <div className="profile-section">

          <h3>Contact Information</h3>

          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Status:</strong> Active Account</p>

        </div>

        {/* BENEFITS */}
        <div className="profile-section">

          <h3>MotorMart Benefits</h3>

          <p>✔ Access to premium riding gear and accessories</p>
          <p>✔ Fast delivery across India</p>
          <p>✔ Secure checkout and payment protection</p>
          <p>✔ Customer support for all orders</p>

        </div>

        {/* SECURITY */}
        <div className="profile-section">

          <h3>Account Security</h3>

          <p>Password: ********</p>
          <p>Account Protected</p>

        </div>

        {/* LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>

  );

};

export default Profile;