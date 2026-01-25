const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: "postgres",
    password: "abdullah2006ali",
    database: "docker",
});

app.get("/", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json({
        message: "Docker + DB connected",
        time: result.rows[0],
    });
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});