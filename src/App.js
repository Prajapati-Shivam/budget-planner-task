import React from 'react';
import { FormProvider } from './context/FormContext';

const App = () => {
  return (
    <FormProvider>
      <div className='min-h-screen w-screen p-4 bg-yellow-200 text-[#1b294b]'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>
          Budget Planner
        </h1>
      </div>
    </FormProvider>
  );
};

export default App;
