import React, { useState } from 'react';
import Step1UserInfo from './Step1UserInfo';
import Step2IncomeExpenses from './Step2IncomeExpenses';
import Step3BudgetSummary from './Step3BudgetSummary';
import Step4ReviewSave from './Step4ReviewSave';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1UserInfo />;
      case 2:
        return <Step2IncomeExpenses />;
      case 3:
        return <Step3BudgetSummary />;
      case 4:
        return <Step4ReviewSave />;
      default:
        return null;
    }
  };

  return (
    <div className='w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md'>
      {renderStep()}
      <div className='mt-4 flex justify-between'>
        {step > 1 && (
          <button
            onClick={prevStep}
            className='px-4 py-2 bg-gray-300 rounded-md'
          >
            Previous
          </button>
        )}
        {step < 4 && (
          <button
            onClick={nextStep}
            className='px-4 py-2 bg-blue-500 text-white rounded-md'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
