import React, { useState, useContext } from 'react';
import { FormContext } from '../context/FormContext';
import ExpenseTable from './ExpenseTable';
import Step from './Step';

const Step2IncomeExpenses = () => {
  const { formData, setFormData } = useContext(FormContext);
  const { income, expenses } = formData;
  const [expense, setExpense] = useState({ name: '', amount: '' });

  const addExpense = () => {
    setFormData({
      ...formData,
      expenses: [...expenses, expense],
    });
    setExpense({ name: '', amount: '' });
  };

  return (
    <div>
      <h2 className='text-xl font-semibold mb-6 flex items-center gap-x-2'>
        <Step num='2' />
        <span className='underline underline-offset-4 decoration-[#1b294b]'>
          Income and Expenses
        </span>
      </h2>
      <form className='space-y-4'>
        <label className='block'>
          Monthly Income:
          <input
            type='number'
            value={income}
            onChange={(e) =>
              setFormData({ ...formData, income: e.target.value })
            }
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
          />
        </label>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <label className='block'>
            Expense Name:
            <input
              type='text'
              value={expense.name}
              onChange={(e) => setExpense({ ...expense, name: e.target.value })}
              className='mt-1 flex-1 w-full border border-gray-300 rounded-md p-2'
            />
          </label>
          <label className='block'>
            Expense Amount:
            <input
              type='number'
              value={expense.amount}
              onChange={(e) =>
                setExpense({ ...expense, amount: e.target.value })
              }
              className='mt-1 flex-1 w-full border border-gray-300 rounded-md p-2'
            />
          </label>
        </div>
        <button
          type='button'
          disabled={!expense.name || !expense.amount}
          onClick={addExpense}
          className='mt-2 px-3 py-1 bg-[#1b294b] mx-auto text-white rounded-full'
        >
          Add Expense
        </button>
        {expenses.length > 0 && <ExpenseTable expenses={expenses} />}
      </form>
    </div>
  );
};

export default Step2IncomeExpenses;
