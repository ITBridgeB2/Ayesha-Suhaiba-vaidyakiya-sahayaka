import { useState } from "react";
import patientService from "./patientService"
import { useNavigate } from "react-router-dom";

export default function PatientReview() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patientService.reviewPatient(formData).then(()=>{
      navigate('/userdashboard')
    }) 
    console.log("Patient Review Submitted:", formData);
    alert("Thank you for your review!");
    setFormData({
      name: "",
      rating: "",
      comments: "",
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
      maxWidth: "500px",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "10px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      backgroundColor: "#6a1b9a", // Purple header
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      height: "100px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#6a1b9a", // Purple button
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      fontSize: "14px",
      border: "1px solid #ccc",
    }
  };

  return (
    <>
      {/* Header Section */}
      <div style={styles.header}>
        Patient Review
        <div style={styles.headerLinks}>
          <a href="/" style={{ color: "white", marginRight: "15px" }}>Home</a>
          <a href="/userdashboard" style={{ color: "white" }}>User Dashboard</a>
        </div>
      </div>

      {/* Review Form */}
      <div style={styles.container}>
        <h2 style={styles.title}>Patient Review Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">Rate your experience</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
          <textarea
            name="comments"
            placeholder="Additional Comments"
            value={formData.comments}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>Submit Review</button>
        </form>
      </div>
    </>
  );
}
