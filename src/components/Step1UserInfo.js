import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { currencies } from '../constants/currency';

const Step1UserInfo = () => {
  const { formData, setFormData } = useContext(FormContext);
  const { name, email, currency } = formData;

  return (
    <div>
      {/* TODO: Add a step component display step number */}
      <h2 className='text-xl font-semibold mb-2'>User Information</h2>
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
