import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Culturas from "./pages/Culturas.jsx";
import SoloEAdubacao from "./pages/SoloEAdubacao.jsx";
import Pragas from "./pages/Pragas.jsx";
import FaleConosco from "./pages/FaleConosco.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culturas" element={<Culturas />} />
        <Route path="/soloeadubacao" element={<SoloEAdubacao />} />
        <Route path="/Pragas" element={<Pragas />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
