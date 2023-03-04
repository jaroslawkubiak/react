import className from "classnames";

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
  // lib classnames tworzy string, jeżęli key obiektu jest true.
  // jezeli klucz obiektu ma w nazwie '-' myślinik, to musimy całą nazwę wziąć w cudzysłów, podać jako string
  const classes = className("flex items-center m-3 px-3 py-1 border-2", {
    "border-blue-500 bg-blue-500 text-black": primary,
    "border-gray-900 bg-gray-900 text-black": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-red-500 bg-red-500 text-white": warning,
    "border-yellow-400 bg-yellow-400 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-red-500": outline && warning,
    "text-yellow-400": outline && danger,
  });
  console.log(classes);
  return <button className={classes}>{children}</button>;
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
