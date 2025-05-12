import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import patientService from "./patientService";

const HospitalInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone_number: "",
    specialty: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patientService.saveHospitalDetails(formData).then(() => {
      navigate("/gethospital");
      alert("Hospital data saved successfully!");
    });
    console.log("Form Data:", formData);
  };

  const styles = {
    container: {
      backgroundColor: "#f0ebff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh",
      margin: 0,
    },
    header: {
      backgroundColor: "#4B0082",
      color: "white",
      padding: "20px 40px",
      position: "relative",
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
    },
    navLinks: {
      position: "absolute",
      right: "40px",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: "normal",
      fontSize: "14px",
    },
    formWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 0",
    },
    formBox: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 0 20px rgba(147, 112, 219, 0.2)",
      width: "100%",
      maxWidth: "350px",
      textAlign: "center",
    },
    heading: {
      color: "#6a0dad",
      marginBottom: "15px",
      fontSize: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "6px",
      backgroundColor: "#f9f5ff",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      backgroundColor: "#4B0082",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "6px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
      marginTop: "15px",
      fontSize: "14px",
    },
    label: {
      textAlign: "left",
      display: "block",
      marginTop: "12px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Add Hospital
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/admindashboard" style={styles.link}>Admin Dashboard</Link>
        </div>
      </div>

      <div style={styles.formWrapper}>
        <div style={styles.formBox}>
          <h2 style={styles.heading}>Hospital Form</h2>
          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Hospital Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>Mobile Number</label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <label style={styles.label}>Specialty</label>
            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HospitalInput;
