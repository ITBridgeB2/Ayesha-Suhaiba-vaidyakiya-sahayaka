import { useEffect, useState } from "react";

export default function PatientReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const styles = {
    header: {
      backgroundColor: "#4B0082", // Purple background for header
      color: "white",
      padding: "20px 40px",
      position: "fixed", // Keep the header fixed at the top
      top: 0, // Align it to the top of the page
      width: "99%", // Ensure it spans the full width
      zIndex: 1000, // Ensure it stays above other content
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
    },
    navLinks: {
      position: "absolute",
      right: "80px",
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
    container: {
      maxWidth: "800px",
      margin: "80px auto 50px", // Adjust margin to make space for the fixed header
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#6a1b9a", // Purple color
    },
    reviewCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "15px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    reviewName: {
      fontWeight: "bold",
      color: "#333",
      fontSize: "16px",
    },
    reviewRating: {
      color: "#6a1b9a",
      fontWeight: "600",
    },
    reviewComments: {
      marginTop: "8px",
      color: "#444",
    },
  };

  return (
    <>
      {/* Header Section */}
      <div style={styles.header}>
        Patient Reviews
        <div style={styles.navLinks}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/admindashboard" style={styles.link}>Admin Dashboard</a>
        </div>
      </div>

      {/* Reviews List */}
      <div style={styles.container}>
        <h2 style={styles.title}>Patient Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews found.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <div style={styles.reviewName}>{review.name}</div>
              <div style={styles.reviewRating}>Rating: {review.rating}</div>
              <div style={styles.reviewComments}>{review.comments}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
