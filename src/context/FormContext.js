import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialFormData = () => {
    const savedData = localStorage.getItem('budgetData');
    return savedData
      ? JSON.parse(savedData)
      : {
          name: '',
          email: '',
          currency: 'INR',
          income: 0,
          expenses: [],
        };
  };

  const [formData, setFormData] = useState(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
