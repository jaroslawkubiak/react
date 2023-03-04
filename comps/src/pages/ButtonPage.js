import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button.js";

function ButtonPage() {
  const handleClick = () => {
    console.log("btn 1");
  };

  const handleOnMouse = () => {
    console.log("mouse over");
  };
  return (
    <div>
      <div>
        <Button
          primary
          outline
          className="mb-5"
          onClick={handleClick}
          onMouseOver={handleOnMouse}
        >
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoCloudDownload /> Kliknij mnie
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Kup teraz
        </Button>
      </div>
      <div>
        <Button success outline>
          Zamów do domu
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Dodaj do listy
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
