import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { currencies } from '../constants/currency';
import Step from './Step';

const Step1UserInfo = () => {
  const { formData, setFormData } = useContext(FormContext);
  const { name, email, currency } = formData;

  return (
    <div>
      <h2 className='text-xl font-semibold mb-6 flex items-center gap-x-2'>
        <Step num='1' />
        <span className='underline underline-offset-4 decoration-[#1b294b]'>
          User Information
        </span>
      </h2>
      <form className='space-y-4'>
        <label className='block'>
          Name:
          <input
            type='text'
            required
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
          />
        </label>
        <label className='block'>
          Email:
          <input
            type='email'
            required
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
          />
        </label>
        <label className='block'>
          Preferred Currency:
          <select
            value={currency}
            onChange={(e) =>
              setFormData({ ...formData, currency: e.target.value })
            }
            className='mt-1 block w-full border border-gray-300 rounded-md p-2'
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default Step1UserInfo;
