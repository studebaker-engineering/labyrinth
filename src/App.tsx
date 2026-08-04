import { Route, Routes } from "react-router";
import "./App.css";

import { MainNavigation } from "./layout/MainNavigation";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
