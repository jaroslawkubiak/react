import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button.js";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button primary outline className="mb-5" onClick={handleClick}>
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
    </div>
  );
}

export default ButtonPage;
