import React, { useState } from "react";

const ForgotPassword = ({ onBackToLogin }) => {
  const [userData, setUserData] = useState({
    username: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleResetRequest = async () => {
    const { username, newPassword, confirmPassword } = userData;

    // Validation
    if (!username || !newPassword || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Call backend API
    try {
      const response = await fetch("http://localhost:3001/patients/reset-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, newPassword }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Password reset successful!");
        onBackToLogin(); // redirect to login
      } else {
        alert(result.message || "Reset failed.");
      }
    } catch (err) {
      console.error("Reset error:", err);
      alert("Server error.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Reset Password</h1>
        <p>Enter your new password below</p>
        <input
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          name="newPassword"
          type="password"
          value={userData.newPassword}
          onChange={handleInputChange}
          placeholder="New Password"
        />
        <input
          name="confirmPassword"
          type="password"
          value={userData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />
        <button onClick={handleResetRequest} className="login-btn">
          submit
        </button>
        <button onClick={onBackToLogin} className="forgot-text">
          Back to Login
        </button>
      </div>

      <style jsx>{`
        /* Global styles */
        body {
          background-color: #f0ebff; /* Light purple */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
        }

        /* Login container centering */
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        /* Login box styling */
        .login-box {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(147, 112, 219, 0.2); /* Light purple shadow */
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        /* Heading */
        .login-box h1 {
          color: #6a0dad; /* Deep purple */
          margin-bottom: 10px;
        }

        /* Subheading */
        .login-box p {
          color: #666666;
          margin-bottom: 30px;
        }

        /* Input styling */
        input[type="tel"],
        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          border: 1px solid #ccc;
          border-radius: 6px;
          background-color: #f9f5ff; /* Very light purple */
        }

        /* Login button */
        .login-btn {
          width: 100%;
          background-color: #9a5ed2; /* Main purple */
          color: white;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 15px;
        }

        .login-btn:hover {
          background-color: #7d3ccf; /* Darker purple on hover */
        }

        /* Forgot password text */
        .forgot-text {
          margin-top: 15px;
          font-size: 0.9em;
        }

        .forgot-text a {
          color: #9a5ed2;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
