// src/SuccessComponent.js
import React from 'react';

const SuccessComponent = ({ formData }) => {
  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessComponent;
