/* eslint-disable react/prop-types */

const Button = ({
  text,
  type,
  variant = "fill",
  size = "md",
  disabled = false,
  className = "",
  onClick=null
}) => {
  const baseClasses =
    "btn font-semibold rounded focus:outline-none  ";
  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };
  const variantClasses = {
    fill: "bg-main text-white p-4 ",
    outline: " border  border-main text-main  p-4",
  };

  const disabledClasses = disabled

    ? "opacity-50 cursor-not-allowed pointer-events-none bg-main "
    : "";

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabledClasses}
    ${className}
  `.trim();


  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
