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


/*
  Menghilangkan border/garis bawaan browser
  ketika sebuah gambar gagal dimuat.

  visibility: hidden digunakan agar ukuran dan
  posisi elemen tetap sama sehingga desain tidak bergeser.
*/
function BrokenImageGuard() {
  useEffect(() => {
    const hideBrokenImage = (image) => {
      image.style.setProperty(
        "visibility",
        "hidden",
        "important",
      );

      image.setAttribute(
        "aria-hidden",
        "true",
      );
    };

    const handleImageError = (event) => {
      const target = event.target;

      if (target instanceof HTMLImageElement) {
        hideBrokenImage(target);
      }
    };

    const checkExistingImages = () => {
      const images =
        document.querySelectorAll("img");

      images.forEach((image) => {
        const imageFailed =
          image.complete &&
          image.naturalWidth === 0;

        if (imageFailed) {
          hideBrokenImage(image);
        }
      });
    };

    document.addEventListener(
      "error",
      handleImageError,
      true,
    );

    checkExistingImages();

    return () => {
      document.removeEventListener(
        "error",
        handleImageError,
        true,
      );
    };
  }, []);

  return null;
}


function AppRoutes() {
  return (
    <>
      <RouteScrollReset />

      <BrokenImageGuard />

      <BackgroundPattern />

      <Navbar />

      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/timeline"
            element={<Timeline />}
          />

          <Route
            path="/buku-panduan"
            element={<BukuPanduan />}
          />

          <Route
            path="/leaderboard"
            element={<Leaderboard />}
          />

          <Route
            path="/quest-collect"
            element={<QuestCollect />}
          />

          <Route
            path="/vote"
            element={<Vote />}
          />

          <Route
            path="/game-description"
            element={<GameDescription />}
          />

          <Route
            path="/map"
            element={<Map />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/info"
            element={<InterfaceInfo />}
          />

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
      </div>
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