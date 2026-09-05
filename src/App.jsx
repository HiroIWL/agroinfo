import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Culturas from "./pages/Culturas";
import SoloEAdubacao from "./pages/SoloEAdubacao";
import Pragas from "./pages/Pragas";
import FaleConosco from "./pages/FaleConosco";
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
