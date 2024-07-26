import React, { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import CurrencyConverter from './CurrencyConverter';
import { currencies } from '../constants/currency';

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
      <h2 className='text-xl font-semibold mb-2'>Budget Summary</h2>
      <p>Total Income: {income}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Remaining Budget: {remainingBudget}</p>
      <div className='flex items-center gap-2'>
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
  );
};

export default Step3BudgetSummary;
