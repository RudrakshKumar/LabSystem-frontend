import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {
  const [usn, setUsn] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isAuthenticated,setIsAuthenticated} = useAuth();
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { usn, password },
        { withCredentials: true } // Allows sending cookies
      );
      setError("");
      setIsAuthenticated(true);
      navigate("/home"); // Navigate to Home.js
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    if(isAuthenticated) 
      navigate("/home");
  }, []);

  return (
    <div className="body-container">
      <div className="container">
        <div className="login form">
          <header className="form-header">Login</header>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your usn"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="button" className="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
