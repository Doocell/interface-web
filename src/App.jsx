import { useEffect } from "react";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";


import Navbar from "./components/layout/Navbar";
import BackgroundPattern from "./components/layout/BackgroundPattern";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import BukuPanduan from "./pages/BukuPanduan";
import Leaderboard from "./pages/Leaderboard";
import QuestCollect from "./pages/QuestCollect";
import Vote from "./pages/Vote";
import GameDescription from "./pages/GameDescription";
import Map from "./pages/Map";
import FAQ from "./pages/FAQ";
import InterfaceInfo from "./pages/InterfaceInfo";


function RouteScrollReset() {
  const location = useLocation();


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);


  return null;
}


function AppRoutes() {
  return (
    <>
      <RouteScrollReset />

      <BackgroundPattern />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* TIMELINE */}
        <Route
          path="/timeline"
          element={<Timeline />}
        />


        {/* BUKU PANDUAN */}
        <Route
          path="/buku-panduan"
          element={<BukuPanduan />}
        />


        {/* LEADERBOARD */}
        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />


        {/* QUEST COLLECT */}
        <Route
          path="/quest-collect"
          element={<QuestCollect />}
        />


        {/* VOTE */}
        <Route
          path="/vote"
          element={<Vote />}
        />


        {/* GAME DESCRIPTION */}
        <Route
          path="/game-description"
          element={<GameDescription />}
        />


        {/* MAP */}
        <Route
          path="/map"
          element={<Map />}
        />


        {/* FAQ */}
        <Route
          path="/faq"
          element={<FAQ />}
        />


        {/* INTERFACE INFO */}
        <Route
          path="/info"
          element={<InterfaceInfo />}
        />


        {/*
          Route lain belum dibuat pada tahap ini.
          Jangan tampilkan halaman kosong.
        */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}