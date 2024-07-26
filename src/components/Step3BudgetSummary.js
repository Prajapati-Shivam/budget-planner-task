import React, { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import CurrencyConverter from './CurrencyConverter';
import { currencies } from '../constants/currency';
import Step from './Step';

const Step3BudgetSummary = () => {
  const { formData } = useContext(FormContext);
  const { income, expenses, currency } = formData;
  const [targetCurrency, setTargetCurrency] = useState(currency);
  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );
  const remainingBudget = income - totalExpenses;

  return (
    <div>
      <h2 className='text-xl font-semibold mb-6 flex items-center gap-x-2'>
        <Step num='3' />
        <span className='underline underline-offset-4 decoration-[#1b294b]'>
          Budget Summary
        </span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Total Income:</p>
          <span>{income}</span>
        </div>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Total Expenses:</p>
          <span>{totalExpenses}</span>
        </div>
        <div className='flex items-center text-lg gap-2'>
          <p className='font-semibold'>Remaining Budget:</p>
          <span>{remainingBudget}</span>
        </div>

        <div className='flex items-center text-lg gap-2'>
          <CurrencyConverter
            baseCurrency={currency}
            targetCurrency={targetCurrency}
            amount={remainingBudget}
          />
          <label className='block'>
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              className='block border border-gray-300 rounded-md'
            >
              {currencies.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.code}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step3BudgetSummary;
