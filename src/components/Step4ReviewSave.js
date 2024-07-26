// src/components/Step4ReviewSave.js
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import ExpenseTable from './ExpenseTable';

const Step4ReviewSave = () => {
  const { formData } = useContext(FormContext);
  const { name, email, currency, income, expenses } = formData;

  const saveData = () => {
    if (!name || !email || !currency || !income) {
      alert('Please fill all the details before saving!');
      return;
    }
    localStorage.setItem('budgetData', JSON.stringify(formData));
    alert('Budget data saved successfully!');
  };

  const clearData = () => {
    localStorage.removeItem('budgetData');
    let confirm = window.confirm('Are you sure you want to clear the data?');
    if (confirm) {
      alert('Budget data cleared successfully!');
    }
  };
  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>Review and Save</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Preferred Currency: {currency}</p>
      <p>Monthly Income: {income}</p>
      <p>
        Total Expenses:{' '}
        {expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)}
      </p>
      {expenses.length > 0 && <ExpenseTable expenses={expenses} />}
      <button
        onClick={saveData}
        className='mt-4 px-4 py-2 bg-green-500 text-white rounded-md'
      >
        Save
      </button>
      <button
        onClick={clearData}
        className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md'
      >
        Clear Data
      </button>
    </div>
  );
};

export default Step4ReviewSave;
