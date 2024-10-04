/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import { Info } from 'lucide-react';

const Input = forwardRef(({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  errorMessage,
  required = false,
  disabled = false,
  className = '',
  helpText,
  autoComplete,
  maxLength,
  pattern,
  readOnly = false,
  'aria-describedby': ariaDescribedBy,
}, ref) => {
  const inputId = name || Math.random().toString(36).substring(7);
  const helpTextId = `${inputId}-help`;
  const errorId = `${inputId}-error`;

  return (
    <div className={`w-full mb-4 ${className}`}>
      {label && (
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor={inputId}
            className={`block text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'}`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {helpText && (
            <div className="group relative">
              <Info className="h-4 w-4 text-gray-400 hover:text-gray-500" />
              <span className="invisible group-hover:visible absolute right-0 w-48 p-2 mt-1 text-xs text-white bg-gray-800 rounded-md shadow-lg z-10">
                {helpText}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          maxLength={maxLength}
          pattern={pattern}
          readOnly={readOnly}
          aria-invalid={!!errorMessage}
          aria-describedby={`${errorMessage ? errorId : ''} ${helpText ? helpTextId : ''} ${ariaDescribedBy || ''}`}
          className={`
            block w-full px-3 py-2 
            border rounded-md shadow-sm 
            text-sm
            placeholder:text-gray-400
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${errorMessage 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            }
            ${readOnly ? 'bg-gray-50 cursor-default' : ''}
            focus:outline-none focus:ring-2 
            transition-colors duration-200
          `}
        />
        {type === 'password' && value && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-1.5 flex space-x-1">
              <div className={`w-6 h-full rounded-full ${value.length < 8 ? 'bg-red-400' : value.length < 12 ? 'bg-yellow-400' : 'bg-green-400'}`} />
            </div>
          </div>
        )}
      </div>
      {errorMessage && (
        <p id={errorId} className="mt-1.5 text-sm text-red-500" role="alert">
          {errorMessage}
        </p>
      )}
      {helpText && (
        <p id={helpTextId} className="mt-1.5 text-sm text-gray-500">
          {helpText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;