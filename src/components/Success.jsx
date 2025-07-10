// src/components/Success.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Thanks for Signing Up!</h1>
      <h2>Your Details:</h2>
      <p>First Name: {state.firstName}</p>
      <p>Last Name: {state.lastName}</p>
      <p>Username: {state.username}</p>
      <p>Email: {state.email}</p>
      <p>Phone No: {state.phoneNo}</p>
      <p>Country: {state.country}</p>
      <p>City: {state.city}</p>
      <p>PAN No: {state.panNo}</p>
      <p>Aadhar No: {state.aadharNo}</p>
    </div>
  );
};

export default Success;
