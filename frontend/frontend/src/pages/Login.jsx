import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dob: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const submit = (e) => {

    e.preventDefault();

    const success = login(formData);

    if (success) {

      navigate("/");

    } else {

      // clear form if login fails
      setFormData({
        name: "",
        age: "",
        gender: "",
        dob: "",
        email: "",
        password: ""
      });

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="login-left">

          <h1>Welcome to MotorMart</h1>

          <p>
            Explore <strong>100+ premium riding accessories</strong> including helmets,
            gloves, jackets and advanced riding gear designed for
            safety, comfort and performance.
          </p>

          <div className="login-features">

            <span>✔ 100+ Products</span>
            <span>✔ Secure Payments</span>
            <span>✔ Fast Delivery</span>
            <span>✔ Trusted Brands</span>

          </div>

        </div>

        <form className="login-form" onSubmit={submit}>

          <h2>Login</h2>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

      </div>

    </div>

  );

};

export default Login;