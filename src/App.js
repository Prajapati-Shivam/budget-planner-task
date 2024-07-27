import React from 'react';
import { FormProvider } from './context/FormContext';
import MultiStepForm from './components/MultiStepForm';

const App = () => {
  return (
    <FormProvider>
      <div className='min-h-screen w-screen p-4 bg-yellow-200 text-[#1b294b] bg-[url(/public/background.png)] bg-contain sm:bg-cover bg-center'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-8 text-center'>
          Budget Planner
        </h1>
        <MultiStepForm />
        <p className='text-center text-sm mt-4 text-gray-700'>
          *Save after making changes
        </p>
      </div>
    </FormProvider>
  );
};

export default App;
