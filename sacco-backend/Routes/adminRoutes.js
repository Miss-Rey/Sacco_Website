const express = require("express");
const db = require(".../Config/db");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Middleware to verify if the user is an admin
const isAdmin = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err || decoded.role !== "admin") {
      return res.status(403).json({ message: "You are not authorized" });
    }
    req.userId = decoded.id;  // Store the userId to use later
    next();
  });
};

// Admin: Get all employees
router.get("/employees", isAdmin, async (req, res) => {
  try {
    const [employees] = await db.execute("SELECT * FROM users WHERE role = 'employee'");
    res.json({ employees });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Admin: Get all customers
router.get("/customers", isAdmin, async (req, res) => {
  try {
    const [customers] = await db.execute("SELECT * FROM users WHERE role = 'customer'");
    res.json({ customers });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Admin: Create new employee
router.post(
  "/employees",
  isAdmin,
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

    const { name, email, password } = req.body;

    try {
      const [existingUser] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "Email already in use" });
      }

      // Hash password (same as in register)
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert employee
      await db.execute("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [
        name,
        email,
        hashedPassword,
        "employee",
      ]);

      res.status(201).json({ message: "Employee created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
);

// Admin: Update employee role
router.put("/employees/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!role || !["employee", "customer"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  try {
    const [user] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update role
    await db.execute("UPDATE users SET role = ? WHERE id = ?", [role, id]);

    res.json({ message: `User role updated to ${role}` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Admin: Delete an employee or customer
router.delete("/users/:id", isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const [user] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user
    await db.execute("DELETE FROM users WHERE id = ?", [id]);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
