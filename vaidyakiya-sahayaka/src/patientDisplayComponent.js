import { Component } from "react";

class PatientDisplayComponent extends Component {
    state = {};

    render() {
        const { patients } = this.props;

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
                        background-color: #6a0dad; /* Purple header */
                        color: white;
                        font-weight: bold;
                    }

                    td {
                        background-color: #f9f4fd; /* Light purple */
                        color: #333;
                    }

                    tr:nth-child(even) td {
                        background-color: #f0e7fe; /* Lighter purple for even rows */
                    }

                    tr:hover td {
                        background-color: #d3a6f3; /* Darker purple for hover */
                    }

                    .thead-dark {
                        background-color: #6a0dad;
                        color: white;
                    }

                    .table-title {
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: #6a0dad;
                        margin-bottom: 10px;
                    }
                    `}
                </style>

                <div className="table-title">Patient Information</div>

                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Mobile Number</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Illness</th>
                            <th>Address</th>
                            <th>Assistance Name</th>
                            <th>Relation</th>
                            <th>Assistance Telephone</th>
                            <th>Assistance Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.mobileNumber}>
                                <td>{patient.username}</td>
                                <td>{patient.mobileNumber}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.illness}</td>
                                <td>{patient.address1}</td>
                                <td>{patient.assistanceName}</td>
                                <td>{patient.relation}</td>
                                <td>{patient.assistanceTel}</td>
                                <td>{patient.assistanceAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PatientDisplayComponent;
