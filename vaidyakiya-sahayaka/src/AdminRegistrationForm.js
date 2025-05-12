import { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "./patientService";
//import adminService from "./adminService"; // Create this service

export default function AdminRegistrationForm() {
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState({
    adminName: "",
    username: "",
    password: "",
    confirmPassword: "",
    admincode:"",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (adminData.password !== adminData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    patientService.saveAdminDetails(adminData).then(() => {
      alert("Admin registered successfully!");
      navigate("/login");
     });

    console.log("Admin submitted:", adminData);
  };

  return (
    <div className="form-container">
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adminName">Full Name</label>
        <input id="adminName" name="adminName" value={adminData.adminName} onChange={handleChange} required />

        <label htmlFor="username">Username</label>
        <input id="username" name="username" value={adminData.username} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={adminData.email} onChange={handleChange} required />

        <label htmlFor="username">Admin Code</label>
        <input id="admincode" name="admincode" value={adminData.admincode} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={adminData.password} onChange={handleChange} required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={adminData.confirmPassword} onChange={handleChange} required />

        <button type="submit">Register as Admin</button>
      </form>

      <style>
        {`
          .form-container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          h2 {
            color: purple;
            text-align: center;
          }

          label {
            font-weight: bold;
            margin-top: 10px;
            display: block;
          }

          input {
            display: block;
            margin: 10px 0;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            width: 100%;
          }

          button {
            background-color: purple;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
          }

          button:hover {
            background-color: darkviolet;
          }
        `}
      </style>
    </div>
  );
}
