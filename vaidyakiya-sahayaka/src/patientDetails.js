import { Component } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import patientService from "./patientService";
import PatientDisplayComponent from "./patientDisplayComponent";

class PatientDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: []
        };
        this.refreshPatients = this.refreshPatients.bind(this);
    }

    refreshPatients() {
        patientService.getpatients().then(
            response => {
                this.setState({ patients: response.data });
            },
            error => {
                console.error("Error fetching patients:", error);
            }
        );
    }

    componentDidMount() {
        this.refreshPatients();
    }

    render() {
        return (
            <div className="home-container">
                {/* Internal CSS for styling */}
                <style>
                    {`
                    .home-container {
                        display: flex;
                        gap:0px
                        flex-direction: column;
                        align-items: center;
                        padding: 40px 20px;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #ffffff;
                        min-height: 100vh;
                    }

                    .home-header {
                        text-align: center;
                        margin-bottom: 30px;
                    }

                    .home-header h1 {
                        font-size: 2.5rem;
                        color: #6a0dad;
                        margin-bottom: 10px;
                    }

                    .home-header p {
                        font-size: 1.1rem;
                        color: #4b0082;
                        border-bottom: 1px solid #4b0082;
                        border-top: 1px solid #4b0082;
                        padding: 10px;
                    }

                    .features {
                        width: 100%;
                        gap:1px
                        background-color: #f9f4fd;
                        padding: 20px 25px;
                        border-radius: 12px;
                        box-shadow: 0 4px 8px rgba(106, 13, 173, 0.1);
                        margin-bottom: 30px;
                        text-align: center;
                    }

                    .features h2 {
                        color: #6a0dad;
                        margin-bottom: 15px;
                    }

                    .features p {
                        font-size: 1rem;
                        line-height: 1.6;
                        color: #333333;
                    }

                    .features p br {
                        margin-bottom: 5px;
                    }

                    .buttons {
                        display: flex;
                        gap: 15px;
                        justify-content: center;
                        margin-top: 20px;
                    }

                    button {
                        padding: 12px 24px;
                        font-size: 1rem;
                        color: #ffffff;
                        background-color: #800080;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    button:hover {
                        background-color: #9932cc;
                    }

                    .header-container {
                        display: flex;
                        width:100%;
                        justify-content: space-between;
                        align-items: center;
                        padding: 15px;
                        background-color: purple;
                        margin-bottom: 20px;
                        border-radius: 5px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .header-title {
                        font-size: 24px;
                        font-weight: bold;
                        color: white;
                    }

                    .nav-buttons a {
                        text-decoration: none;
                        color: white;
                        font-size: 16px;
                        margin: 0 10px;
                        padding: 8px 15px;
                        border-radius: 5px;
                        transition: background-color 0.3s, color 0.3s;
                    }

                    .nav-buttons a:hover {
                        background-color: #ffcc00;
                        color: black;
                    }
                    `}
                </style>

                {/* Header with navigation buttons */}
                <div className="header-container">
                    <div className="header-title">Patient Details</div>
                    <div className="nav-buttons">
                        <Link to="/admindashboard">Admin Dashboard</Link>
                        <Link to="/">Home</Link>
                    </div>
                </div>
                 <div className="features">
                

                {/* Patient display component */}
                <PatientDisplayComponent patients={this.state.patients} />
                </div>
            </div>
        );
    }
}

export default PatientDetailsComponent;
