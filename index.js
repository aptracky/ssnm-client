const express = require("express");
const cors = require("cors");
const pool = require("./db");
const commands = require("./db_commands");

const app = express();
const PORT = 1337;

//Middleware
app.use(cors());
app.use(express.json());

//*****Routes******//

//Create
app.post("/devices", async (req, res) => {
  try {
    const { name, status, ip } = req.body;
    const lastUpdated = new Date(Date.now());
    const newDevice = await pool.query(commands.CREATE, [
      name,
      status,
      ip,
      lastUpdated,
    ]);
    res.json(newDevice.rows);
  } catch (err) {
    console.error(err);
  }
});

//Get All
app.get("/devices", async (req, res) => {
  try {
    const allDevices = await pool.query(commands.SELECT_ALL);
    res.json(allDevices.rows);
  } catch (error) {
    console.error(error);
  }
});

//Get One
app.get("/devices/:id", async (req, res) => {
  try {
    const device = await pool.query(commands.SELECT_ONE, [req.params.id]);
    res.json(device.rows);
  } catch (error) {
    console.error(error);
  }
});

//Update
app.put("/devices/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const device = await pool.query(commands.UPDATE, [name, id]);
    req.json(device.rows);
  } catch (error) {
    console.error(error);
  }
});

//Delete
app.delete("/devices/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const device = await pool.query(commands.DELETE, [id]);

    res.json("Device was removed");
  } catch (error) {
    console.error(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
