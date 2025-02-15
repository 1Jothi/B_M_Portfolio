const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create a new user
router.post("/add", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
