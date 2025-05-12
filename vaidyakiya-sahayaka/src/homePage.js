import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    navigate('./login');
    e.preventDefault();
  };
  const handleSubmit2 = async (e) => {
    navigate('./Register');
    e.preventDefault();
  };
  
  const styles = {
    headerWrapper: {
      width: '75%',
      backgroundColor: '#6a0dad',
      padding: '20px 0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      margin: '0 auto', // centers the wrapper
    },
    header: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
    },
    navlinks: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      padding: '8px 12px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    h1: {
      color: 'white',
      margin: 0,
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px', // adds spacing between image and text
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      color: 'white',
    },
    button: {
      width: '200px', // ensures buttons are the same size
      padding: '10px 0', // adds vertical padding
      margin: '10px', // adds space between the buttons
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#6a0dad',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div className="home-container">
      <div style={styles.headerWrapper}>
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <img src="/hos.jpg" alt="Logo" style={{ height: '40px' }} />
            <h1 style={styles.h1}>Vaidyakiya Sahayaka</h1>
          </div>
          <div style={styles.headerRight}>
            <nav style={styles.navlinks}>
              <Link to="/rolebase" style={styles.navLink}>Register</Link>
              <Link to="/login" style={styles.navLink}>Login</Link>
            </nav>
          </div>
        </header>
      </div>

      <section className="features">
        <h2>About Vaidyakiya Sakayaka </h2>
        <p>
          Vaidyakiya Sakayaka is an NGO providing free medical assistance, bridging gaps between patients and hospitals, ensuring timely healthcare access.
        </p>
        <h2>Features:</h2>
        <p>
          🏥 Provides free medical assistance<br />
          📋 By registering patient details<br />
          🤝 Coordinating with government hospitals<br />
          📱 Offering an easy online platform<br />
          🧭 Guiding people to access healthcare services
        </p>
        <button style={styles.button} onClick={handleSubmit}>Login</button>
        <button style={styles.button} onClick={handleSubmit2}>New User</button>
      </section>
    </div>
  );
};

export default Home;
