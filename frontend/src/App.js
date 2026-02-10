import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PravdaPage from "./pages/PravdaPage";
import CinemaPage from "./pages/CinemaPage";
import QuizPage from "./pages/QuizPage";
import CronologiaPage from "./pages/CronologiaPage";
import MappaGulagPage from "./pages/MappaGulagPage";
import GenesiPage from "./pages/GenesiPage";
import EconomiaPage from "./pages/EconomiaPage";
import TerrorePage from "./pages/TerrorePage";
import CulturaPage from "./pages/CulturaPage";
import GuerraPage from "./pages/GuerraPage";
import TardoStalinismoPage from "./pages/TardoStalinismoPage";
import ConclusionePage from "./pages/ConclusionePage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App min-h-screen bg-[#0a0a0a]">
      <div className="grain-overlay" />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pravda" element={<PravdaPage />} />
          <Route path="/cinema" element={<CinemaPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/cronologia" element={<CronologiaPage />} />
          <Route path="/mappa" element={<MappaGulagPage />} />
          <Route path="/genesi" element={<GenesiPage />} />
          <Route path="/economia" element={<EconomiaPage />} />
          <Route path="/terrore" element={<TerrorePage />} />
          <Route path="/cultura" element={<CulturaPage />} />
          <Route path="/guerra" element={<GuerraPage />} />
          <Route path="/tardostalinismo" element={<TardoStalinismoPage />} />
          <Route path="/conclusione" element={<ConclusionePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
