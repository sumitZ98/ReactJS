import { useState } from 'react';

function Conv() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setFahrenheit(celsiusToFahrenheit(celsiusValue));
  };

  const celsiusToFahrenheit = (celsius) => {
    if (!celsius) return '';
    return (celsius * 9 / 5) + 32;
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input
          type="text"
          value={fahrenheit}
          readOnly
        />
      </label>
    </div>
  );
}

export default Conv;
