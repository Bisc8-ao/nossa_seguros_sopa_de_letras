import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Start, Info, Game, Win, Lose } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/info" element={<Info />} />
        <Route path="/game" element={<Game />} />
        <Route path="/win" element={<Win />} />
        <Route path="/lose" element={<Lose />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
