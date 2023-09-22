import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import Downloads from "./Downloads";
import GameInfo from "./GameInfo";
import Community from "./Community";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/game-info" element={<GameInfo />} />
      <Route path="/community" element={<Community />} />
      <Route path="/" element={<Navigate to="/homepage" />} />
    </Routes>
  );
};

export default AppRoutes;
