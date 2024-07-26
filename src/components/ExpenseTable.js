import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { Trash2Icon } from 'lucide-react';

const ExpenseTable = ({ expenses }) => {
  const { formData, setFormData } = useContext(FormContext);
  const removeExpense = (index) => {
    const updatedExpenses = expenses.filter((exp, i) => i !== index);
    setFormData({
      ...formData,
      expenses: updatedExpenses,
    });
  };
  return (
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
  );
};

export default ExpenseTable;
