import { useState } from "react";
import RegistrationForm from "./registerPage"; // Patient registration form
import AdminRegistrationForm from "./AdminRegistrationForm"; // Admin registration form

export default function RoleBasedRegistration() {
  const [role, setRole] = useState("patient");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h1>Registration Form</h1>
        <a href="/" className="home-link">Home</a>
      </div>

      {/* Role Selector and Forms */}
      <div className="role-selection-container">
        <h2>Select Registration Type</h2>
        <select onChange={handleRoleChange} value={role}>
          <option value="patient">Patient</option>
          <option value="admin">Admin</option>
        </select>

        {role === "patient" ? <RegistrationForm /> : <AdminRegistrationForm />}
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .page-header {
            background-color: purple;
            padding: 20px;
            position: relative;
            text-align: center;
          }

          .page-header h1 {
            margin: 0;
            color: white;
            font-size: 2rem;
          }

          .home-link {
            position: absolute;
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            text-decoration: none;
            font-size: 1rem;
            background: transparent;
            border: none;
            cursor: pointer;
            transition: color 0.3s;
          }

          .home-link:hover {
            color: #ffcc00;
          }

          .role-selection-container {
            margin: 20px auto;
            padding: 20px;
            max-width: 900px;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          select {
            padding: 10px;
            font-size: 16px;
            margin-bottom: 20px;
            width: 100%;
          }

          h2 {
            text-align: center;
            color: purple;
          }
        `}
      </style>
    </div>
  );
}
