import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "employee" });

  useEffect(() => {
    fetchEmployees();
    fetchCustomers();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/customers");
      setCustomers(res.data);
    } catch (error) {
      console.error("Error fetching customers", error);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users", newUser);
      if (newUser.role === "employee") fetchEmployees();
      else fetchCustomers();
      setNewUser({ name: "", email: "", role: "employee" });
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Add Employee or Customer */}
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
          <option value="employee">Employee</option>
          <option value="customer">Customer</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      {/* Employee List */}
      <h3>Employees</h3>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.email} <button onClick={() => console.log("Delete Employee", emp.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Customer List */}
      <h3>Customers</h3>
      <ul>
        {customers.map((cust) => (
          <li key={cust.id}>
            {cust.name} - {cust.email} <button onClick={() => console.log("Delete Customer", cust.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
