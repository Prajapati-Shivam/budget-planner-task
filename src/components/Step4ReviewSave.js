// src/components/Step4ReviewSave.js
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import ExpenseTable from './ExpenseTable';
import Step from './Step';

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
      <h2 className='text-xl font-semibold mb-6 flex items-center gap-x-2'>
        <Step num='4' />
        <span className='underline underline-offset-4 decoration-[#1b294b]'>
          Review and Save
        </span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Name:</p>
          <span>{name}</span>
        </div>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Email:</p>
          <span>{email}</span>
        </div>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Currency:</p>
          <span>{currency}</span>
        </div>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Monthly Income:</p>
          <span>{income}</span>
        </div>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Total Expenses:</p>
          <span>
            {expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)}
          </span>
        </div>
      </div>
      {expenses.length > 0 && <ExpenseTable expenses={expenses} />}
      <div className='flex items-center gap-x-2 mt-4'>
        <button
          onClick={saveData}
          className='px-3 py-1 bg-green-500 text-white rounded-full'
        >
          Save
        </button>
        <button
          onClick={clearData}
          className='px-3 py-1 bg-red-500 text-white rounded-full'
        >
          Clear Data
        </button>
      </div>
    </div>
  );
};

export default Step4ReviewSave;
