import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button.js";

function App() {
  return (
    <div>
      <div>
        <Button primary outline>
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

export default App;
