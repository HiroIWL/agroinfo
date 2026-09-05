import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Culturas from "./pages/culturas.jsx";
import SoloEAdubacao from "./pages/soloeadubacao.jsx";
import Pragas from "./pages/pragas.jsx";
import FaleConosco from "./pages/faleconosco.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culturas" element={<Culturas />} />
        <Route path="/soloeadubacao" element={<SoloEAdubacao />} />
        <Route path="/pragas" element={<Pragas />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
