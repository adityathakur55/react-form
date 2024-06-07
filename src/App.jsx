// src/App.js
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import SuccessComponent from './SuccessComponent';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      {formData ? (
        <SuccessComponent formData={formData} />
      ) : (
        <FormComponent onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
