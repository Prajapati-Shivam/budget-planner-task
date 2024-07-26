import React, { useState, useEffect } from 'react';

const CurrencyConverter = ({ baseCurrency, targetCurrency, amount }) => {
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchConversionRate = async () => {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[targetCurrency];
      setConvertedAmount(amount * rate);
    };

    fetchConversionRate();
  }, [baseCurrency, targetCurrency, amount]);

  return (
    <div>
      <p>
        {amount} {baseCurrency} = {convertedAmount}{' '}
      </p>
    </div>
  );
};

export default CurrencyConverter;
