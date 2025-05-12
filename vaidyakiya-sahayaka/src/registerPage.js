import { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "./patientService";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username:"",
    mobileNumber: "",
    password: "",
    cpassword: "",
    age: "",
    gender: "",
    aadharcard: "",
    bplcard: "",
    annualincome: "",
    bloodtype: "",

    illness: "",
    duration: "",
    diagnosis: "",
    tests: "",
    scans: "",
    reports: "",
    previousDoctor: "",
    pastPrescription: "",

    bp: false,
    sugar: false,
    kidney: false,
    thyroid: false,
    allergies: "",
    
    alternateNumber: "",
    email: "",
    address1: "",
    address2: "",
    address3: "",

    assistanceName: "",
    relation: "",
    assistanceTel: "",
    assistanceAddress: "",

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patientService.savePatientDetails(data).then(()=>{
      alert("patient resgister sucessfully!")
      navigate("/login");
    })
    console.log("Form submitted:", data);
    
  };

  return (
    <div className="form-container">
      <h2>Patient Registration Form</h2>
      <form onSubmit={handleSubmit}>
    
        <h3>Basic Details</h3>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="First Name" value={data.firstName} onChange={handleChange} />
        
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Last Name" value={data.lastName} onChange={handleChange} />
        
        <label htmlFor="name">UserName</label>
        <input id="username" name="username" placeholder="userName" value={data.username} required onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Password" value={data.password} onChange={handleChange} required />
        
        <label htmlFor="cpassword">Confirm Password</label>
        <input id="cpassword" name="cpassword" type="password" placeholder="Confirm Password" value={data.cpassword} onChange={handleChange} required />
        
        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="number" placeholder="Age" value={data.age} onChange={handleChange} />
        
        <label htmlFor="gender">Gender</label>
        <input id="gender" name="gender" placeholder="Gender" value={data.gender} onChange={handleChange} />
        
        <label htmlFor="aadharcard">Aadhar Card</label>
        <input id="aadharcard" name="aadharcard" placeholder="Aadhar Card" value={data.aadharcard} onChange={handleChange} />
        
        <label htmlFor="bplcard">BPL Card Number</label>
        <input id="bplcard" name="bplcard" placeholder="BPL Card Number" value={data.bplcard} onChange={handleChange} />
        
        <label htmlFor="annualincome">Annual Income</label>
        <input id="annualincome" name="annualincome" placeholder="Annual Income" value={data.annualincome} onChange={handleChange} />
        
        <label htmlFor="bloodtype">Blood Type</label>
        <input id="bloodtype" name="bloodtype" placeholder="Blood Type" value={data.bloodtype} onChange={handleChange} />

        <h3>Medical Details</h3>
        <label htmlFor="illness">Illness or Disease</label>
        <input id="illness" name="illness" placeholder="Illness or Disease" value={data.illness} onChange={handleChange} />
        
        <label htmlFor="duration">Duration</label>
        <input id="duration" name="duration" placeholder="Duration" value={data.duration} onChange={handleChange} />
        
        <label htmlFor="diagnosis">Diagnosis Done</label>
        <input id="diagnosis" name="diagnosis" placeholder="Diagnosis Done" value={data.diagnosis} onChange={handleChange} />
        
        <label htmlFor="tests">Tests</label>
        <input id="tests" name="tests" placeholder="Tests" value={data.tests} onChange={handleChange} />
        
        <label htmlFor="scans">Scans</label>
        <input id="scans" name="scans" placeholder="Scans" value={data.scans} onChange={handleChange} />
        
        <label htmlFor="reports">Reports</label>
        <input id="reports" name="reports" placeholder="Reports" value={data.reports} onChange={handleChange} />
        
        <label htmlFor="previousDoctor">Previous Doctor</label>
        <input id="previousDoctor" name="previousDoctor" placeholder="Previous Doctor" value={data.previousDoctor} onChange={handleChange} />
        
        <label htmlFor="pastPrescription">Past Prescription</label>
        <input id="pastPrescription" name="pastPrescription" placeholder="Past Prescription" value={data.pastPrescription} onChange={handleChange} />

        <h3>Other Complaints</h3>
        <label htmlFor="bp"><input type="checkbox" id="bp" name="bp" checked={data.bp} onChange={handleChange} /> BP</label>
        <label htmlFor="sugar"><input type="checkbox" id="sugar" name="sugar" checked={data.sugar} onChange={handleChange} /> Sugar</label>
        <label htmlFor="kidney"><input type="checkbox" id="kidney" name="kidney" checked={data.kidney} onChange={handleChange} /> Kidney</label>
        <label htmlFor="thyroid"><input type="checkbox" id="thyroid" name="thyroid" checked={data.thyroid} onChange={handleChange} /> Thyroid</label>
        
        <label htmlFor="allergies">Allergies</label>
        <input id="allergies" name="allergies" placeholder="Allergies" value={data.allergies} onChange={handleChange} />

        <h3>Contact Details</h3>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input id="mobileNumber" name="mobileNumber" type="tel" placeholder="Mobile Number" value={data.mobileNumber} onChange={handleChange} required />
        
        <label htmlFor="alternateNumber">Alternate Number</label>
        <input id="alternateNumber" name="alternateNumber" type="tel" placeholder="Alternate Phone" value={data.alternateNumber} onChange={handleChange} />
        
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" value={data.email} onChange={handleChange} />
        
        <label htmlFor="address1">Address Line 1</label>
        <input id="address1" name="address1" placeholder="Address Line 1" value={data.address1} onChange={handleChange} />
        
        <label htmlFor="address2">Address Line 2</label>
        <input id="address2" name="address2" placeholder="Address Line 2" value={data.address2} onChange={handleChange} />
        
        <label htmlFor="address3">Address Line 3</label>
        <input id="address3" name="address3" placeholder="Address Line 3" value={data.address3} onChange={handleChange} />

        <h3>Patient Assistance Details</h3>
        <label htmlFor="assistanceName">Assistant's Name</label>
        <input id="assistanceName" name="assistanceName" placeholder="Assistant's Name" value={data.assistanceName} onChange={handleChange} />
        
        <label htmlFor="relation">Relation to Patient</label>
        <input id="relation" name="relation" placeholder="Relation to Patient" value={data.relation} onChange={handleChange} />
        
        <label htmlFor="assistanceTel">Assistant Number</label>
        <input id="assistanceTel" name="assistanceTel" type="tel" placeholder="Assistant Phone" value={data.assistanceTel} onChange={handleChange} />
        
        <label htmlFor="assistanceAddress">Assistant Address</label>
        <input id="assistanceAddress" name="assistanceAddress" placeholder="Assistant Address" value={data.assistanceAddress} onChange={handleChange} />
       
        <button type="submit">Register</button>
      </form>

      <style>
        {`
          .form-container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          
          h2 {
            color: purple;
            text-align: center;
          }
          
          h3 {
            color: purple;
          }
          
          label {
            font-weight: bold;
            margin-top: 10px;
            display: block;
          }
          
          input {
            display: block;
            margin: 10px 0;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            width: 100%;
          }
          
          button {
            background-color: purple;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
          }
          
          button:hover {
            background-color: darkpurple;
          }
        `}
      </style>
    </div>
  );
}
