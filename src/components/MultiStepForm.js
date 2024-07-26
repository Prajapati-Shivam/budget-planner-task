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
    <div className='w-full max-w-lg mx-auto p-5 bg-white rounded-lg shadow-md border-dashed border-2 border-gray-500'>
      {renderStep()}
      <div className='mt-8 flex justify-between'>
        {step > 1 && (
          <button
            onClick={prevStep}
            className='px-3 py-1 bg-gray-300 rounded-full'
          >
            Previous
          </button>
        )}
        {step < 4 && (
          <button
            onClick={nextStep}
            className='px-3 py-1 bg-blue-500 text-white rounded-full'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
