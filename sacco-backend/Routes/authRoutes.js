const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const db = require("../config/db"); // Ensure you have a MySQL connection setup
require("dotenv").config();

const router = express.Router();

// Register Route
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;

    try {
      // Check if user already exists
      const [existingUser] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "Email already in use" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert user
      await db.execute("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [
        name,
        email,
        hashedPassword,
        role || "customer",
      ]);

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
);

// Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
      if (user.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Compare passwords
      const validPassword = await bcrypt.compare(password, user[0].password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate token
      const token = jwt.sign({ id: user[0].id, role: user[0].role }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token, user: { id: user[0].id, name: user[0].name, role: user[0].role } });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
);

module.exports = router;
