import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignInForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


 

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="signin max-w-md mx-auto mt-20 mb-40  border    p-6 bg-white rounded-md shadow-2xl"
    >
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="flex justify-around  items-center">
          <button
            type="submit"
            className="bg-orange-600 px-4  text-white p-2 rounded hover:bg-orange-800"
          >
            Sign In
          </button>

          <p>
            Do not have an account ?{" "}
            <Link className="text-blue-800" to="/signup">
              Register now
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default SignInForm;
