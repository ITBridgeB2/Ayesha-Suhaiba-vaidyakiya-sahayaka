import { useState } from "react";

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    number: "",
    specialty: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.specialty) {
      alert("Please select a medical specialty.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:9090/hospitals/${formData.specialty}`);
      const data = await response.json();

      const newWindow = window.open("", "_blank");
      const htmlContent = `
        <html>
        <head>
          <title>Available Hospitals</title>
          <style>
            body {
              margin: 0;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f4f4f4;
            }

            .page-header {
              background-color: #6a0dad;
              color: white;
              padding: 15px 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .page-header h1 {
              margin: 0;
              font-size: 1.8rem;
              color: white;
              text-align: center;
              flex: 1;
            }

            .header-links {
              display: flex;
              gap: 15px;
            }

            .header-links a {
              color: white;
              text-decoration: none;
              font-size: 1rem;
            }

            .header-links a:hover {
              color: #ffcc00;
            }

            .table-container {
              padding: 20px;
            }

            .table-title {
              font-size: 1.5rem;
              font-weight: bold;
              color: #6a0dad;
              margin-bottom: 10px;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 10px;
            }

            th, td {
              padding: 12px 20px;
              text-align: left;
              border: 1px solid #ddd;
            }

            th {
              background-color: #6a0dad;
              color: white;
            }

            td {
              background-color: #f9f4fd;
              color: #333;
            }

            tr:nth-child(even) td {
              background-color: #f0e7fe;
            }

            tr:hover td {
              background-color: #e0c7fb;
            }

            .button-group {
              margin-top: 20px;
            }

            .btn {
              padding: 10px 20px;
              margin-right: 10px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              color: white;
              background-color: #6a0dad;
            }

            .btn:hover {
              background-color: #5c099b;
            }
          </style>
        </head>
        <body>
          <div class="page-header">
            <h1>Available Hospitals</h1>
            <div class="header-links">
              <a href="/">Home</a>
              <a href="/userdashboard">User Dashboard</a>
            </div>
          </div>
          <div class="table-container">
            <div class="table-title">Hospitals for "${formData.specialty.charAt(0).toUpperCase() + formData.specialty.slice(1)}"</div>
            <table>
              <thead>
                <tr>
                  <th>Hospital Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                ${data.map(hospital => `
                  <tr>
                    <td>${hospital.name}</td>
                    <td>${hospital.location}</td>
                    <td>${hospital.phone_number}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
            <div class="button-group">
              <button class="btn" onclick="window.print()">Print</button>
              <button class="btn" onclick="window.location.href='/hospital'">Back</button>
            </div>
          </div>
        </body>
        </html>
      `;
      newWindow.document.write(htmlContent);
      newWindow.document.close();
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      alert("Failed to fetch hospital data.");
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1>Patient Registration</h1>
        <div className="header-links">
          <a href="/">Home</a>
          <a href="/userdashboard">User Dashboard</a>
        </div>
      </div>

      <div className="container">
        <div className="form-box">
          <h2>Register Patient</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Username"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="Age"
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit number"
            />
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
            >
              <option value="">Select Specialty</option>
              <option value="neurology">Neurology</option>
              <option value="dermatology">Dermatology</option>
              <option value="ophthalmology">Ophthalmology</option>
              <option value="nephrology">Nephrology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="cancer">Cancer</option>
              <option value="cardiology">Cardiology</option>
              <option value="urology">Urology</option>
              <option value="gynecologist">gynecologist</option>
            </select>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* Internal styling for main window */}
      <style>
        {`
        .page-header {
          background-color: #6a0dad;
          color: white;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .page-header h1 {
          margin: 0;
          font-size: 1.8rem;
          color: white;
          text-align: center;
          flex: 1;
        }

        .header-links {
          display: flex;
          gap: 15px;
        }

        .header-links a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
        }

        .header-links a:hover {
          color: #ffcc00;
        }

        .container {
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .form-box {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }

        input, select, button {
          display: block;
          width: 100%;
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        button {
          background-color: #6a0dad;
          color: white;
          cursor: pointer;
        }

        button:hover {
          background-color: #5c099b;
        }
        `}
      </style>
    </div>
  );
}
