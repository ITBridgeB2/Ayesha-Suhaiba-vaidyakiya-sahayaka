import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChildRegistration() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    gender: "",
    parentContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/userdashboard')
    console.log("Child Registered:", formData);
    alert("Child registered successfully!");
    setFormData({
      childName: "",
      age: "",
      gender: "",
      parentContact: "",
    });
  };

  const styles = {
    header: {
      backgroundColor: "#6a1b9a", // Purple background for header
      color: "white",
      padding: "20px",
      textAlign: "center",
      fontSize: "30px",
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      position: "relative",
    },
    headerLinks: {
      position: "absolute",
      top: "20px",
      right: "30px",
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
    },
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "#ffffff", // white background
      borderRadius: "10px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      fontSize: "14px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#6a1b9a", // purple button
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <>
      {/* Header */}
      <div style={styles.header}>
        Children Registration
        <div style={styles.headerLinks}>
          <a href="/" style={{ color: "white", marginRight: "15px" }}>Home</a>
          <a href="/userdashboard" style={{ color: "white" }}>User Dashboard</a>
        </div>
      </div>

      {/* Registration Form */}
      <div style={styles.container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="childName"
            value={formData.childName}
            onChange={handleChange}
            placeholder="Child's Name"
            style={styles.input}
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            style={styles.input}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="tel"
            name="parentContact"
            value={formData.parentContact}
            onChange={handleChange}
            placeholder="Parent Contact Number"
            pattern="[0-9]{10}"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </>
  );
}
