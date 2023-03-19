// komponent służy jako loader - pokazuje szare boxy z przewijającym się gradientem, który "mówi" userowi że czekamy na dane

import classNames from "classnames";

//times = ilość szarych boxów
// className = przekazujemy wielkość boxów
function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    "mt-2 mb-2 border rounded relative overflow-hidden bg-slate-900",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return boxes;
}

export default Skeleton;
