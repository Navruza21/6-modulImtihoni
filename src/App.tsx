// import React, { useState } from "react";
// import "./App.css";
// import { CssBaseline } from "@mui/material";
// import { CardType, PageType } from "./types";
// import { Layout } from "./components/layout";
// import { createContext } from "react";
// import { Newcard } from "./pages";
// import { Mycard } from "./pages";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Layout />
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { Mycard, MyContext, Newcard } from "../src/pages";
import { CssBaseline } from "@mui/material";
import { CardType, PageType } from "./types";
const dataCards = [
  {
    id: "1",
    userName: "Navruza Sadinova",
    CardNumber: 123456789,
    ExpiryData: "10/24",
    Country: " Uzbekistan",
  },
  {
    id: "2",
    userName: "Navruza Sadinova",
    CardNumber: 7758496,
    ExpiryData: "10/29",
    Country: " Uzbekistan",
  },
  {
    id: "3",
    userName: "Navruza Sadinova",
    CardNumber: 123456789,
    ExpiryData: "12/27",
    Country: " Uzbekistan",
  },
  {
    id: "4",
    userName: "Navruza Sadinova",
    CardNumber: 123456789,
    ExpiryData: "1/35",
    Country: " Uzbekistan",
  },
];
export const AppContext = React.createContext({
  activePage: "newCard" as PageType,
  setActivePage: (page: PageType) => {},
});

function App() {
  const [cardsArray, setCardsArray] = useState<CardType[]>(dataCards);
  const [activePage, setActivePage] = React.useState<PageType>("newCard");
  return (
    <AppContext.Provider value={{ activePage, setActivePage }}>
      <CssBaseline />
      <Layout>
        <MyContext.Provider value={{ cardsArray, setCardsArray }}>
          {activePage === "newCard" && <Newcard />}
          {activePage === "myCard" && <Mycard />}
        </MyContext.Provider>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
