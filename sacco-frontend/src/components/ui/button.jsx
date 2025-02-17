// import PropTypes from "prop-types";

const Button = ({ children, onClick, className, type = "button", variant = "primary" }) => {
    const baseStyles = "px-4 py-2 rounded-lg transition";
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: "bg-gray-600 hover:bg-gray-700 text-white",
      danger: "bg-red-600 hover:bg-red-700 text-white",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };
  export default Button
  