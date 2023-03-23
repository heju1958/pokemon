import { Routes, Route } from "react-router-dom";

import PokePage from "../pages/PokePage";
import Dashboard from "../pages/Dashboard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pokepage" element={<PokePage />} />
    </Routes>
  );
};

export default RoutesMain;
