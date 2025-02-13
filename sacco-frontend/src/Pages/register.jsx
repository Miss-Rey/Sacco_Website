// Importing necessary hooks and libraries
import { useState, useEffect, useRef } from "react"; // React state and effect hooks
import { Button, Checkbox, Label, TextInput } from "flowbite-react"; // UI components from Flowbite
import { useNavigate } from "react-router-dom"; // Hook for navigation between pages
import axios from "axios"; // HTTP client for making API requests
import gsap from "gsap"; // Animation library for UI effects

const Register = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });

  // Uncomment if password validation is needed
  // const [passwordMatch, setPasswordMatch] = useState(true);

  // Reference to form element (used for animations)
  // const formRef = useRef(null);

  // Navigation hook to redirect users after registration
  // const navigateTo = useNavigate();

  // Endpoint for backend API requests (environment variable)
  // const endpoint = import.meta.env.VITE_ENDPOINT;

  useEffect(() => {
    // GSAP animation to fade in the form on mount
    gsap.fromTo(
      formRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  // Handles input changes and updates state
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    // Ensure terms and conditions checkbox is checked
    if (!formData.isChecked) {
      console.log("Please accept the terms and conditions.");
      return;
    }

    try {
      // Sending registration request to backend
      const response = await axios.post(`${endpoint}/api/register`, formData);
      if (response.status === 200) {
        // Apply GSAP animation before navigating
        gsap.to(formRef.current, { opacity: 0, y: -50, duration: 0.5 });
        setTimeout(() => navigateTo("/login"), 500); // Redirect to login after animation
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="w-full bg-blue-600 text-white text-xl font-bold py-4 px-10">
        <h2>SACCO Registration</h2>
      </div>

      {/* Form Container */}
      <div ref={formRef} className="mt-10 p-6 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Create an Account</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          {/* First & Last Name Fields */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label htmlFor="firstName" value="First Name" />
              <TextInput id="firstName" type="text" value={formData.firstName} onChange={handleChange} required shadow />
            </div>
            <div className="w-1/2">
              <Label htmlFor="lastName" value="Last Name" />
              <TextInput id="lastName" type="text" value={formData.lastName} onChange={handleChange} required shadow />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput id="email" type="email" value={formData.email} onChange={handleChange} required shadow />
          </div>

          {/* Phone Number Field */}
          <div>
            <Label htmlFor="phone" value="Phone Number" />
            <TextInput id="phone" type="tel" value={formData.phone} onChange={handleChange} required shadow />
          </div>

          {/* Password & Confirm Password Fields */}
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput id="password" type="password" value={formData.password} onChange={handleChange} required shadow />
          </div>

          <div>
            <Label htmlFor="confirmPassword" value="Confirm Password" />
            <TextInput id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required shadow />
            {/* Error message for password mismatch */}
            {!passwordMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match!</p>}
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox id="isChecked" checked={formData.isChecked} onChange={handleChange} />
            <Label htmlFor="isChecked" className="flex">
              I agree to the&nbsp;
              <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
            </Label>
          </div>

          {/* Register Button */}
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 transition duration-300">Register</Button>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full bg-blue-600 text-white text-center py-2">
        &copy; {new Date().getFullYear()} SACCO. All Rights Reserved.
      </div>
    </div>
  );
};

export default Register;
