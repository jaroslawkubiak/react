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
  ...rest
}) {

  // lib classnames tworzy string, jeżęli key obiektu jest true.
  // jezeli klucz obiektu ma w nazwie '-' myślinik, to musimy całą nazwę wziąć w cudzysłów, podać jako string
  const classes = className(rest.className, "flex items-center m-5 px-3 py-1 border-2", {
    'border-sky-500': primary,
    'border-gray-600': secondary,
    'border-green-500': success,
    'border-yellow-400': warning ,
    'border-red-500': danger,
 
    'bg-sky-500': primary && !outline,
    'bg-gray-600': secondary && !outline,
    'bg-green-500': success && !outline,
    'bg-yellow-400': warning && !outline,
    'bg-red-500': danger && !outline,
    'bg-white': outline,
 
    'text-white': !outline && (primary || secondary || success || warning || danger),
    'text-sky-500': outline && primary,
    'text-gray-600': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  
    'rounded-full': rounded,
  });
  return <button {...rest} className={classes} >{children}</button>;
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
