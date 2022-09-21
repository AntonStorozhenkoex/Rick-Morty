import React from "react";
import { MainPage } from "./pages /MainPage";
import { Route, Routes } from "react-router-dom";
import { CharacterPage } from "./pages /CharacterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="character/" element={<CharacterPage />} />
    </Routes>
  );
}

export default App;
