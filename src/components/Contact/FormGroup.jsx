import React, { useState } from 'react';

const FormGroup = ({ label }) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-3/4 rounded-xl mb-4 focus:border-blue-500"
    style={{border: '2px solid rgba(0,0,0,.25'}}
    >
      <label
        className={`absolute left-2 transition-all ${
            (focused || inputValue) ? 'text-xs top-0 text-gray-600' : 'text-sm top-3 text-gray-400'
        }`}

      >
        {label}
      </label>
      <input
        type="text"

        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:border-blue-500 ${
          focused ? 'text-sm' : 'text-sm'
        } text-gray-700 `}
      />
    </div>
  );
};

export default FormGroup;
