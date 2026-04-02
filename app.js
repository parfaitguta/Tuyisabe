const express = require("express");
const { Pool } = require("pg");
const { DATABASE_URL } = require("./testdb");
const app = express();

// Parse JSON bodies for POST requests
app.use(express.json());

// Postgres pool (shared across requests)
const pool = new Pool({ connectionString: DATABASE_URL });



// POST /persons - insert a person into the DB
app.post('/persons', async (req, res) => {
	const { id, LastName, FirstName, Address, City } = req.body || {};
	if (!id || !LastName) {
		return res.status(400).json({ error: 'Missing required fields: id and LastName' });
	}
	const text = 'INSERT INTO persons(id, "LastName", "FirstName", "Address", "City") VALUES($1,$2,$3,$4,$5) RETURNING *';
	const values = [id, LastName, FirstName || null, Address || null, City || null];
	try {
		const result = await pool.query(text, values);
		res.status(201).json({ person: result.rows[0] });
	} catch (err) {
		console.error('DB insert error', err);
		res.status(500).json({ error: 'DB insert failed', details: err.message });
	}
});


app.listen(8080, () => {
	console.log("Server running on http://localhost:8080");
});


