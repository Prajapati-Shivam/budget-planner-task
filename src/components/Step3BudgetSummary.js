// src/components/Step3BudgetSummary.js
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import CurrencyConverter from './CurrencyConverter';

const Step3BudgetSummary = () => {
  const { formData } = useContext(FormContext);
  const { income, expenses, currency } = formData;
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
      <CurrencyConverter
        baseCurrency={currency}
        targetCurrency='USD'
        amount={remainingBudget}
      />
    </div>
  );
};

export default Step3BudgetSummary;
