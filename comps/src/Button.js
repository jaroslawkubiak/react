import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
}) {
  return <button className="m-3 px-3 py-1.5 border-2 border-blue-900 bg-blue-500 text-white">{children}</button>;
}

//tworzymy custom validator do przekazywanych props
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) return new Error("🔥 Too many arguments! 🔥");
  },
};

export default Button;
