import cors from 'cors';
import express from 'express';
import mysql from 'mysql2/promise';

const patientapp = express();

patientapp.use(express.json());
patientapp.use(express.urlencoded({ extended: true }));
patientapp.use(cors());

// Create DB connection
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'itbridge',
});

try {
  await db.connect();
  console.log('Connected to database');
} catch (err) {
  console.error('Database connection error:', err);
  process.exit(1);
}
//get all the details
patientapp.get("/patients", async function (req, res) {
  try {
    const [result] = await db.execute("SELECT * FROM patients");
    return res.json(result);
  } catch (err) {
    console.error("Error fetching patients:", err);
    return res.status(500).json({ error: "Error fetching patients" });
  }
});


// ✅ GET route to login patient
patientapp.get('/patients/:username/:password', async (req, res) => {
  const { username, password } = req.params;

  try {
    const [result] = await db.execute(
      'SELECT firstName FROM patients WHERE username = ? AND password = ?',
      [username, password]
    );

    if (result.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    return res.status(200).json({ firstName: result[0].firstName });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// ✅ POST route to register a new patient
patientapp.post('/patients', async (req, res) => {
  const data = req.body;

  // ✅ Check required fields
  if (!data.mobileNumber || !data.firstName || !data.lastName || !data.username || !data.password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = `
    INSERT INTO patients (
      mobileNumber, firstName, lastName, username, password, age, gender,
      aadharcard, bplcard, annualincome, bloodtype,
      illness, duration, diagnosis, tests, scans, reports, previousDoctor, pastPrescription,
      bp, sugar, kidney, thyroid, allergies,
      alternateNumber, email, address1, address2, address3,
      assistanceName, relation, assistanceTel, assistanceAddress
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.mobileNumber, data.firstName, data.lastName, data.username, data.password, data.age, data.gender,
    data.aadharcard, data.bplcard, data.annualincome, data.bloodtype,
    data.illness, data.duration, data.diagnosis, data.tests, data.scans, data.reports, data.previousDoctor, data.pastPrescription,
    data.bp, data.sugar, data.kidney, data.thyroid, data.allergies,
    data.alternateNumber, data.email, data.address1, data.address2, data.address3,
    data.assistanceName, data.relation, data.assistanceTel, data.assistanceAddress
  ].map(value => value === undefined ? null : value);

  try {
    await db.execute(sql, values);
    res.status(200).send('Patient data saved successfully');
  } catch (err) {
    console.error('Error saving patient:', err);
    res.status(500).send('Error saving patient data');
  }
});

// Get hospitals by specialty
patientapp.get("/hospitals/:specialty", async (req, res) => {
  const { specialty } = req.params;

  try {
    const [results] = await db.query(
      'SELECT name, location,phone_number FROM hospitalist WHERE specialty = ?',
      [specialty]
    );
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET all hospitals
patientapp.get('/hospitals', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM hospitalist');
    res.json(results);
  } catch (err) {
    console.error('Error fetching hospitals:', err);
    res.status(500).json({ error: 'Error fetching hospital list' });
  }
});



// ✅ GET route to login admin
patientapp.get('/admins/:username/:password/:admincode', async (req, res) => {
  const { username, password } = req.params;

  try {
    const [result] = await db.execute(
      'SELECT adminName FROM admins WHERE username = ? AND password = ?',
      [username, password]
    );

    if (result.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    return res.status(200).json({ adminName: result[0].adminName });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// ✅ POST route to register a new admin
patientapp.post('/admins', async (req, res) => {
  const data = req.body;

  // ✅ Check required fields
  if (!data.adminName || !data.username || !data.password || !data.admincode || !data.email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const sql = `
    INSERT INTO admins (
      adminName, username, password, admincode, email
    ) VALUES (?, ?, ?, ?, ?)
  `;

  const values = [
    data.adminName, data.username, data.password, data.admincode, data.email
  ];

  try {
    await db.execute(sql, values);
    res.status(200).send('Admin data saved successfully');
  } catch (err) {
    console.error('Error saving admin:', err);
    res.status(500).send('Error saving admin data');
  }
});

// More appropriate: POST /patients
patientapp.post('/getpatients', async (req, res) => {
  const { name, location, phone_number, specialty } = req.body;

  if (!name || !location || !phone_number || !specialty) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const sql = 'INSERT INTO hospitalist (name, location, phone_number, specialty) VALUES (?, ?, ?, ?)';
    await db.execute(sql, [name, location, phone_number, specialty]);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).json({ error: 'Failed to insert data' });
  }
});
//save review
patientapp.post('/reviews', async (req, res) => {
  const { name, rating, comments } = req.body;

  try {
    const sql = 'INSERT INTO patient_reviews (name, rating, comments) VALUES (?, ?, ?)';
    await db.execute(sql, [name, rating, comments]);
    res.status(200).json({ message: 'Review submitted successfully' });
  } catch (err) {
    console.error('Error inserting review:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

//get review
patientapp.get('/reviews', async (req, res) => {
  try {
    const [reviews] = await db.execute('SELECT * FROM patient_reviews');
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

patientapp.listen(9090, () => {
  console.log('App started on port 9090');
});
