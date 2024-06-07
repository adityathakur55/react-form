// src/FormComponent.js
import React, { useState, useEffect } from 'react';
import './FormComponent.css';

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.firstName) validationErrors.firstName = 'First Name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last Name is required';
    if (!formData.username) validationErrors.username = 'Username is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.phoneNo) validationErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) validationErrors.country = 'Country is required';
    if (!formData.city) validationErrors.city = 'City is required';
    if (!formData.panNo) validationErrors.panNo = 'PAN Number is required';
    if (!formData.aadharNo) validationErrors.aadharNo = 'Aadhar Number is required';

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
    setIsSubmitting(false);
  };

  useEffect(() => {
    const validationErrors = validate();
    setErrors(validationErrors);
  }, [formData]);

  const countries = [
    "India", "USA", "Canada", "Australia", "United Kingdom",
    "Germany", "France", "Japan", "China", "Russia",
    "Brazil", "South Africa", "New Zealand", "Singapore", "Mexico",
    "Italy", "Spain", "Netherlands", "Sweden", "Norway",
    "Denmark", "Finland", "Belgium", "Switzerland", "Austria"
  ];

  const cities = [
    "Delhi", "New York", "Toronto", "Sydney", "London",
    "Berlin", "Paris", "Tokyo", "Beijing", "Moscow",
    "Rio de Janeiro", "Cape Town", "Auckland", "Singapore", "Mexico City",
    "Rome", "Madrid", "Amsterdam", "Stockholm", "Oslo",
    "Copenhagen", "Helsinki", "Brussels", "Zurich", "Vienna"
  ];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type={formData.showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="showPassword"
            checked={formData.showPassword}
            onChange={handleChange}
          /> Show Password
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Phone No.:</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
        </div>
        <div className="form-group">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label>City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label>PAN No.:</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && <span className="error">{errors.panNo}</span>}
        </div>
        <div className="form-group">
          <label>Aadhar No.:</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
        </div>
        <button type="submit" disabled={isSubmitting || Object.keys(errors).length !== 0}>Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
