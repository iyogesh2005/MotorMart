import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    register(name, email, password);
    navigate("/");
  };

  return (
    <div className="auth-container">

      <div className="auth-left">
        <h1>Join MotorMart 🚘</h1>
        <p>
          Create an account to explore exclusive
          car collections, manage orders,
          and get special discounts.
        </p>
      </div>

      <form onSubmit={submit} className="auth-form">
        <h2>Register</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button>Create Account</button>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </form>

    </div>
  );
};

export default Register;