// src/components/SignupForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const { firstName, lastName, username, email, password, phoneNo, country, city, panNo, aadharNo } = formData;
    const newErrors = {};
    let isValid = true;

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!password || password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }
    if (!phoneNo) {
      newErrors.phoneNo = 'Phone Number is required';
      isValid = false;
    }
    if (!country) {
      newErrors.country = 'Country is required';
      isValid = false;
    }
    if (!city) {
      newErrors.city = 'City is required';
      isValid = false;
    }
    if (!panNo) {
      newErrors.panNo = 'PAN Number is required';
      isValid = false;
    }
    if (!aadharNo) {
      newErrors.aadharNo = 'Aadhar Number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      navigate('/success', { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      {errors.firstName && <span className="error">{errors.firstName}</span>}

      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      {errors.lastName && <span className="error">{errors.lastName}</span>}

      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      {errors.username && <span className="error">{errors.username}</span>}

      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      {errors.password && <span className="error">{errors.password}</span>}

      <input type="text" name="phoneNo" placeholder="Phone No." onChange={handleChange} />
      {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}

      <select name="country" onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
      {errors.country && <span className="error">{errors.country}</span>}

      <select name="city" onChange={handleChange}>
        <option value="">Select City</option>
        <option value="Delhi">Delhi</option>
        <option value="New York">New York</option>
      </select>
      {errors.city && <span className="error">{errors.city}</span>}

      <input type="text" name="panNo" placeholder="PAN No." onChange={handleChange} />
      {errors.panNo && <span className="error">{errors.panNo}</span>}

      <input type="text" name="aadharNo" placeholder="Aadhar No." onChange={handleChange} />
      {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}

      <button type="submit" disabled={Object.keys(errors).length > 0}>Sign Up</button>
    </form>
  );
};

export default SignupForm;
