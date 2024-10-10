import Select from "react-select";
import Creatable from "react-select/creatable";
function SelectComponent(props) {
  const {
    placeholder,
    options,
    onChange,
    label,
    value,
    name,
    onBlur,
    errorMessage,
    required = false,
    isMulti = false,
    isCreatable,
    disabled = false,
  } = props;

  const customStyle = {
    control: (provided, state) => ({
      ...provided,
      height: "50px",
      borderRadius: "5px",
      boxShadow: "none",
      textAlign: "left",
      border: errorMessage ? "1px solid red" : "1px solid #ccc",
      backgroundColor: state.isDisabled ? "#f9fafb" : "white",
      color: state.isDisabled ? "#6b7280" : "black",
      cursor: state.isDisabled ? "not-allowed" : "default",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: state.isSelected ? "black" : state.isFocused ? "black" : "grey",
      backgroundColor: state.isSelected
        ? "#fff8f6"
        : state.isFocused
        ? "#fff8f6"
        : "white",
      padding: "10px",
      margin: "5px 0",
    }),
  };

  return (
    <div className="w-full mb-4">
      {label && (
        <label
          className={`${
            disabled ? "text-gray-400" : "text-text"
          } block  text-lg font-bold mb-1`}
        >
          {label}
        </label>
      )}
      {isCreatable ? (
        <Creatable
          options={options}
          styles={customStyle}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          name={name}
          required={required}
          aria-invalid={!!errorMessage}
          aria-describedby={`${errorMessage ? name + "-error" : ""}`}
          isMulti={isMulti}
          isDisabled={disabled}
          onBlur={onBlur}
        />
      ) : (
        <Select
          options={options}
          styles={customStyle}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          name={name}
          required={required}
          aria-invalid={!!errorMessage}
          aria-describedby={`${errorMessage ? name + "-error" : ""}`}
          isMulti={isMulti}
          isDisabled={disabled}
          onBlur={onBlur}
        />
      )}
      {errorMessage && (
        <span id={`${name}-error`} className="text-red-500 text-sm mt-1">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default SelectComponent;
