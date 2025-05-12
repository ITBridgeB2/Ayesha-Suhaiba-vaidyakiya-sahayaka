import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import patientService from "./patientService";

export default function LoginPage() {
  const [userType, setUserType] = useState("patient");
  const navigate = useNavigate();

  const [patientData, setPatientData] = useState({ username: "", password: "" });
  const [adminData, setAdminData] = useState({ username: "", password: "", adminCode: "" });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "patient") {
      setPatientData((prev) => ({ ...prev, [name]: value }));
    } else {
      setAdminData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userType === "patient") {
        const response = await patientService.validatePatient(patientData.username, patientData.password);
        if (response.status === 200) {
          alert("Login successful!");
          navigate("/userdashboard", { state: { patient: patientData } });
        }
      } else {
        if (!/^[a-zA-Z0-9]{6}$/.test(adminData.adminCode)) {
          alert("Admin code must be alphanumeric and 6 characters long.");
          return;
        }
        const response = await patientService.validateAdmin(adminData.username, adminData.password, adminData.adminCode);
        if (response.status === 200) {
          alert("Welcome, Admin: " + adminData.username);
          navigate("/admindashboard", { state: { admin: adminData } });
        }
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Invalid credentials.");
      } else {
        console.error(error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

.login-header {
  position: relative;
  width:98%;
  background-color: #6a0dad;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.login-header h1 {
  margin: 0;
  font-size: 1.8rem;
  color: white;
}

.login-header a {
  position: absolute;
  right: 30px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.login-header a:hover {
  background-color: #ffcc00;
  color: black;
}


        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: calc(100vh - 60px);
          background-color: #f4f0fa;
          padding-top: 10px; /* Reduced top space */
        }

        .login-box {
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
        }

        .tab-buttons {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .tab-buttons button {
          padding: 10px 20px;
          margin: 0 5px;
          border: 1px solid #6a0dad;
          background-color: #fff;
          color: #6a0dad;
          cursor: pointer;
          border-radius: 5px;
        }

        .tab-buttons button.active {
          background-color: #6a0dad;
          color: white;
        }

        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          background-color: #6a0dad;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
        }

        .login-btn:hover {
          background-color: #9932cc;
        }

        .forgot-text {
          text-align: center;
          margin-top: 10px;
        }

        .forgot-text a {
          color: #6a0dad;
          text-decoration: none;
        }

        .forgot-text a:hover {
          text-decoration: underline;
        }
        `}
      </style>

      {/* Header */}
      <div className="login-header">
        <h1>Login Page</h1>
        <a href="/">Home</a>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <div className="login-box">
          <div className="tab-buttons">
            <button className={userType === "patient" ? "active" : ""} onClick={() => setUserType("patient")}>Patient</button>
            <button className={userType === "admin" ? "active" : ""} onClick={() => setUserType("admin")}>Admin</button>
          </div>
          <form onSubmit={handleSubmit}>
            {userType === "patient" ? (
              <>
                <input type="text" name="username" value={patientData.username} onChange={(e) => handleChange(e, "patient")} placeholder="Username" required />
                <input type="password" name="password" value={patientData.password} onChange={(e) => handleChange(e, "patient")} placeholder="Password" required />
              </>
            ) : (
              <>
                <input type="text" name="username" value={adminData.username} onChange={(e) => handleChange(e, "admin")} placeholder="Username" required />
                <input type="password" name="password" value={adminData.password} onChange={(e) => handleChange(e, "admin")} placeholder="Password" required />
                <input type="text" name="adminCode" value={adminData.adminCode} onChange={(e) => handleChange(e, "admin")} placeholder="Admin Code" maxLength={6} required />
              </>
            )}
            <button type="submit" className="login-btn">Login</button>
            <p className="forgot-text"><a href="/forget">Forgot your password?</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}
