// src/components/Step2IncomeExpenses.js
import React, { useState, useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { Trash2Icon } from 'lucide-react';

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

  const removeExpense = (index) => {
    const updatedExpenses = expenses.filter((exp, i) => i !== index);
    setFormData({
      ...formData,
      expenses: updatedExpenses,
    });
  };

  return (
    <div>
      <h2 className='text-xl font-semibold mb-2'>Income and Expenses</h2>
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
        <div className='space-y-4'>
          <label className='block'>
            Expense Name:
            <input
              type='text'
              value={expense.name}
              onChange={(e) => setExpense({ ...expense, name: e.target.value })}
              className='mt-1 block w-full border border-gray-300 rounded-md p-2'
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
              className='mt-1 block w-full border border-gray-300 rounded-md p-2'
            />
          </label>
          <button
            type='button'
            disabled={!expense.name || !expense.amount}
            onClick={addExpense}
            className='mt-2 px-4 py-2 bg-[#1b294b] text-white rounded-md'
          >
            Add Expense
          </button>
        </div>
        {expenses.length > 0 && (
          <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
            <thead>
              <tr>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Name
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  Amount
                </th>
                <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'></th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-200 text-center'>
              {expenses.map((exp, index) => (
                <tr key={index} className='odd:bg-gray-50'>
                  <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                    {exp.name}
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                    {exp.amount}
                  </td>
                  <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                    <button onClick={() => removeExpense(index)}>
                      <Trash2Icon size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </form>
    </div>
  );
};

export default Step2IncomeExpenses;
