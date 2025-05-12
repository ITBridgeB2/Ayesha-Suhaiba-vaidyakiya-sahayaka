import { Component } from "react";

class HospitalDisplayComponent extends Component {
    state = {};

    render() {
        const { hospitals } = this.props;

        return (
            <div className="table-container">
                {/* Internal CSS for styling */}
                <style>
                    {`
                    .table-container {
                        width: 100%;
                        padding: 20px;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #ffffff;
                        border-radius: 12px;
                        box-shadow: 0 4px 8px rgba(106, 13, 173, 0.1);
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }

                    th, td {
                        padding: 12px 20px;
                        text-align: left;
                        border: 1px solid #ddd;
                    }

                    th {
                        background-color: #6a0dad;
                        color: white;
                        font-weight: bold;
                    }

                    td {
                        background-color: #f9f4fd;
                        color: #333;
                    }

                    tr:nth-child(even) td {
                        background-color: #f0e7fe;
                    }

                    tr:hover td {
                        background-color: #d3a6f3;
                    }

                    .table-title {
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: #6a0dad;
                        margin-bottom: 10px;
                    }
                    `}
                </style>

                <div className="table-title">Hospital List</div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Phone Number</th>
                            <th>Specialty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitals.map((hospital, index) => (
                            <tr key={index}>
                                <td>{hospital.name}</td>
                                <td>{hospital.location}</td>
                                <td>{hospital.phone_number}</td>
                                <td>{hospital.specialty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HospitalDisplayComponent;
