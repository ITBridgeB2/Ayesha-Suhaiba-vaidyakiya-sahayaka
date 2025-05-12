import { useNavigate } from "react-router-dom";
import "./userDashboard.css";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className=".dashboard-header h1">User Dashboard</h1>
        <div className="dashboard-links">
          <button onClick={() => navigate("/review")} className="link-btn">Review</button>
          <button onClick={() => navigate("/")} className="link-btn">Logout</button>
        </div>
      </header>

      <main className="dashboard-main">
        <p>Welcome to dashboard. Choose an option below:</p>
        <div className="image-links">
          <div className="nav-image-container" onClick={() => navigate("/hospital")}>
            <img
              src="hospital.png"
              alt="Matching Hospital"
              className="nav-image"
            />
            <div className="image-text">Matching Hospital</div>
          </div>

          <div className="nav-image-container" onClick={() => navigate("/childreg")}>
            <img
              src="/register.png"
              alt="Child Registration"
              className="nav-image"
            />
            <div className="image-text">Child Registration</div>
          </div>

          <div className="nav-image-container" onClick={() => navigate("/review")}>
            <img
              src="/review.png"
              alt="User Review"
              className="nav-image"
            />
            <div className="image-text">User Review</div>
          </div>
        </div>
      </main>
    </div>
  );
}
