import React from 'react';

const Step = ({ num }) => {
  return (
    <div className='border-2 border-black size-8 flex items-center justify-center rounded-full'>
      {num}
    </div>
  );
};

export default Step;
