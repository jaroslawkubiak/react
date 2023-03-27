import { useState } from "react";
import FigureList from "./components/FigureList";
import Filters from './components/Filters';

import "./index.css";
import FigureAdd from "./components/FigureAdd";

function App() {
  const temp = [
    {
      id: "429",
      series: "Rogue One",
      number: "sw0784",
      releaseYear: 2016,
      mainName: "Rebel Trooper",
      secondaryName: "Lieutenant Sefla",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw0784",
      label: "tak",
      weapon: "Tak - mam",
      price: 25,
      priceBL: 21.84,
      purchaseDate: "22-01-2022",
    },
    {
      id: "428",
      series: "The Mandalorian",
      number: "sw1170",
      releaseYear: 2021,
      mainName: "The Mandalorian",
      secondaryName: "Red Christmas Scarf",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1170",
      label: "tak",
      weapon: "Nie posiada",
      price: 40,
      priceBL: 30.74,
      purchaseDate: "21-01-2022",
    },
    {
      id: "427",
      series: "The Mandalorian",
      number: "sw1173",
      releaseYear: 2021,
      mainName: "Grogu",
      secondaryName: "Christmas Sweater ",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1173",
      label: "tak",
      weapon: "Nie posiada",
      price: 40,
      priceBL: 32.44,
      purchaseDate: "21-01-2022",
    },
    {
      id: "426",
      series: "Clone Wars",
      number: "sw0313",
      releaseYear: 2011,
      mainName: "R8-B7",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw0313",
      label: "tak",
      weapon: "Nie posiada",
      price: 50,
      priceBL: 72.64,
      purchaseDate: "21-01-2022",
    },
    {
      id: "425",
      series: "Episode 4/5/6",
      number: "sw1178",
      releaseYear: 2021,
      mainName: "Snowtrooper",
      secondaryName: "Female",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1178",
      label: "tak",
      weapon: "Tak - mam",
      price: 15,
      priceBL: 41.49,
      purchaseDate: "15-01-2022",
    },
    {
      id: "424",
      series: "The Mandalorian",
      number: "sw1166",
      releaseYear: 2021,
      mainName: "The Mandalorian",
      secondaryName: "Jet Pack",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1166",
      label: "tak",
      weapon: "Tak - mam",
      price: 25,
      priceBL: 32.06,
      purchaseDate: "15-01-2022",
    },
    {
      id: "423",
      series: "Episode 3",
      number: "sw0536",
      releaseYear: 2014,
      mainName: "Neimoidian Warrior",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw0536",
      label: "tak",
      weapon: "Tak - mam",
      price: 49,
      priceBL: 41.46,
      purchaseDate: "13-01-2022",
    },
    {
      id: "422",
      series: "Rebels",
      number: "sw0574a",
      releaseYear: 2014,
      mainName: "Ezra Bridger",
      secondaryName: "with Helmet",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw0574a",
      label: "tak",
      weapon: "Tak - mam",
      price: 44,
      priceBL: 91.7,
      purchaseDate: "13-01-2022",
    },
    {
      id: "421",
      series: "Episode 4/5/6",
      number: "sw1136",
      releaseYear: 2021,
      mainName: "NI-L8",
      secondaryName: "Protocol Droid",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1136",
      label: "tak",
      weapon: "Nie posiada",
      price: 30,
      priceBL: 21.43,
      purchaseDate: "12-01-2022",
    },
    {
      id: "420",
      series: "Episode 4/5/6",
      number: "sw1127",
      releaseYear: 2020,
      mainName: "Garindan",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1127",
      label: "tak",
      weapon: "Tak - mam",
      price: 100,
      priceBL: 110.52,
      purchaseDate: "06-01-2022",
    },
    {
      id: "419",
      series: "Episode 4/5/6",
      number: "sw1129",
      releaseYear: 2020,
      mainName: "Kabe",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1129",
      label: "tak",
      weapon: "Nie posiada",
      price: 50,
      priceBL: 67.89,
      purchaseDate: "06-01-2022",
    },
    {
      id: "418",
      series: "Episode 4/5/6",
      number: "sw1124",
      releaseYear: 2020,
      mainName: "Ponda Baba",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1124",
      label: "tak",
      weapon: "Tak - mam",
      price: 50,
      priceBL: 85.56,
      purchaseDate: "06-01-2022",
    },
    {
      id: "417",
      series: "Episode 4/5/6",
      number: "sw1041",
      releaseYear: 2019,
      mainName: "Gonk Droid",
      secondaryName: "Dark Turquoise",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1041",
      label: "tak",
      weapon: "Nie posiada",
      price: 30,
      priceBL: 30.93,
      purchaseDate: "22-12-2021",
    },
    {
      id: "416",
      series: "The Bad Batch",
      number: "sw1149",
      releaseYear: 2021,
      mainName: "Wrecker",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1149",
      label: "tak",
      weapon: "Tak - mam",
      price: 69,
      priceBL: 55.93,
      purchaseDate: "16-12-2021",
    },
    {
      id: "415",
      series: "The Bad Batch",
      number: "sw1150",
      releaseYear: 2021,
      mainName: "Tech",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1150",
      label: "tak",
      weapon: "Tak - mam",
      price: 69,
      priceBL: 56.62,
      purchaseDate: "16-12-2021",
    },
    {
      id: "414",
      series: "The Bad Batch",
      number: "sw1148",
      releaseYear: 2021,
      mainName: "Hunter",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1148",
      label: "tak",
      weapon: "Tak - mam",
      price: 69,
      priceBL: 50.4,
      purchaseDate: "16-12-2021",
    },
    {
      id: "412",
      series: "The Bad Batch",
      number: "sw1151",
      releaseYear: 2021,
      mainName: "Echo",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1151",
      label: "tak",
      weapon: "Tak - mam",
      price: 69,
      priceBL: 54.3,
      purchaseDate: "16-12-2021",
    },
    {
      id: "411",
      series: "The Bad Batch",
      number: "sw1152",
      releaseYear: 2021,
      mainName: "Crosshair",
      secondaryName: "",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1152",
      label: "tak",
      weapon: "Tak - mam",
      price: 69,
      priceBL: 56.66,
      purchaseDate: "16-12-2021",
    },
    {
      id: "410",
      series: "The Bad Batch",
      number: "sw1153",
      releaseYear: 2021,
      mainName: "Gonk Droid",
      secondaryName: "GNK Power Droid",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1153",
      label: "tak",
      weapon: "Nie posiada",
      price: 12,
      priceBL: 11.21,
      purchaseDate: "16-12-2021",
    },
    {
      id: "409",
      series: "Clone Wars",
      number: "sw1096",
      releaseYear: 2021,
      mainName: "Ahsoka Tano (Adult)",
      secondaryName: "Dark Blue Jumpsuit",
      bricklink:
        "https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw1096",
      label: "tak",
      weapon: "Tak - mam",
      price: 50,
      priceBL: 34.37,
      purchaseDate: "03-12-2021",
    },
  ];

  const [figures, setFigures] = useState(temp);

  const handleAddFigure = figure => {
    console.log("handleAddFigure");
    console.log(figure);
    const updatedFigures = [figure, ...figures];
    setFigures(updatedFigures);
  };

  return (
    <div>
      <Filters />
      {/* <FigureAdd onSubmit={handleAddFigure} /> */}
      {figures.length}
      <div>
        <FigureList figures={figures} />
      </div>
    </div>
  );
}

export default App;
