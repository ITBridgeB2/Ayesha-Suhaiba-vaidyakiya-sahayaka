import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <style>
        {`
          .dashboard-container {
            padding: 20px;
            background-color: #ffffff; /* White background for the container */
          }

          .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #6a0dad; /* Purple background for the header */
            color: #ffffff; /* White text color */
            padding: 10px;
          }

          .dashboard-header h1 {
            font-size: 2rem;
          }

          .dashboard-links {
            display: flex;
            gap: 10px;
          }

          .link-btn {
            padding: 10px;
            background-color: #6a0dad; /* Purple button background */
            color: #ffffff; /* White text color */
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }

          .dashboard-main {
            padding-top: 20px;
            color: #6a0dad; /* Purple text color for main section */
          }

          .image-links {
            display: flex;
            gap: 20px;
          }

          .nav-image-container {
          cursor: pointer;
            text-align: center;
           border: 2px solid #6a0dad; /* Purple border */
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}


          .image-text {
            margin-top: 10px;
            font-size: 1rem;
            color: #6a0dad; /* Purple text for image text */
          }
        `}
      </style>

      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-links">
          {/* <button onClick={() => navigate("/patients")} className="link-btn">Patient Details</button>
          <button onClick={() => navigate("/reviews")} className="link-btn">Manage Reviews</button>
          <button onClick={() => navigate("/add-hospital")} className="link-btn">Add Hospital</button> */}
          <button onClick={() => navigate("/")} className="link-btn">Logout</button>
        </div>
      </header>

      <main className="dashboard-main">
        <p>Welcome to the Admin Dashboard. Choose an option below:</p>
        <div className="image-links">
          <div className="nav-image-container" onClick={() => navigate("/patientdetails")}>
            <img
              src="/hospital1.jpeg"
              alt="Patient Details"
              className="nav-image"
            />
            <div className="image-text">Patient Details</div>
          </div>

          <div className="nav-image-container" onClick={() => navigate("/gethospital")}>
            <img
              src="/patient.png"
              alt="Manage Reviews"
              className="nav-image"
            />
            <div className="image-text">Hospital-list</div>
          </div>

          <div className="nav-image-container" onClick={() => navigate("/adminreview")}>
            <img
              src="/adminreview.jpg"
              alt="Manage Reviews"
              className="nav-image"
            />
            <div className="image-text">Reviews</div>
          </div>

          <div className="nav-image-container" onClick={() => navigate("/savehospital")}>
            <img
              src="/adminhospital.jpg"
              alt="Add Hospital"
              className="nav-image"
            />
            <div className="image-text">Add Hospital</div>
          </div>
        </div>
      </main>
    </div>
  );
}
