import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const [form, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhar: ""
  });

  const [errors, setErrors] = useState({});


  const validate = () => {
    let temp = {};
    temp.firstName = form.firstName ? "" : "First Name is required";
    temp.lastName = form.lastName ? "" : "Last Name is required";
    temp.userName = form.userName ? "" : "Username is required";
    temp.email = /\S+@\S+\.\S+/.test(form.email) ? "" : "Email is not valid";
    temp.password = form.password ? "" : "Password is required";
    temp.phone = /^\+\d{1,4}\s\d{10}$/.test(form.phone) ? "" : "Phone format: +91 8459317890";
    temp.country = form.country ? "" : "Country is required";
    temp.city = form.city ? "" : "City is required";
    temp.pan = /^[A-Z]{5}\d{4}[A-Z]$/.test(form.pan) ? "" : "PAN format: ABCDE1234F";
    temp.aadhar = /^\d{12}$/.test(form.aadhar) ? "" : "Aadhar format: 123456789012";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...form, [name]: value });
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      alert("Form submitted successfully!");
      navigate("/details",{state:form});
    }
  }

  return (
    <>
    <div className="min-h-screen bg-blue-300 py-10">
      <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <div className="error">{errors.firstName}</div>
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <div className="error">{errors.lastName}</div>
          </div>
          <div>
            <label className="block font-medium">Username</label>
            <input
              type="text"
              placeholder="Choose a Username"
              name="userName"
              value={form.userName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            /><div className="error">{errors.userName}</div>
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <div className="error">{errors.email}</div>
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <div className="flex">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-l-md px-3 py-2"
              />
              <button
                type="button"
                className="bg-gray-200 px-4 rounded-r-md"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="error">{errors.password}</div>
          </div>
          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="+91 9876543210"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <div className="error">{errors.phone}</div>
          </div>
          <div>
            <label className="block font-medium">Country</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2" name="country" value={form.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            <div className="error">{errors.country}</div>
          </div>
          <div>
            <label className="block font-medium">City</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2" name="city" value={form.city} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="New York">Kolkata</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
            <div className="error">{errors.city}</div>
          </div>
          <div>
            <label className="block font-medium">PAN Number</label>
            <input
              type="text"
              placeholder="Enter PAN Number"
              name="pan"
              value={form.pan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <div className="error">{errors.pan}</div>
          </div>
          <div>
            <label className="block font-medium">Aadhar Number</label>
            <input
              type="text"
              placeholder="Enter Aadhar Number"
              name="aadhar"
              value={form.aadhar}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            <div className="error">{errors.aadhar}</div>
          </div>
          <button
            onClick={handlesubmit}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Form;
