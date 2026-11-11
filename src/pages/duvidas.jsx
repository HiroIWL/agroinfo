import { useState } from "react";

function Duvidas() {
  const [pergunta, setPergunta] = useState("");
  const [perguntaEnviada, setPerguntaEnviada] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function enviar(event) {
    event.preventDefault();

    const texto = pergunta.trim();
    if (!texto) return;

    setCarregando(true);
    setErro("");
    setResposta("");
    setPerguntaEnviada(texto);

    try {
      const response = await fetch("/api/perguntar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();
      setResposta(data.resposta);
    } catch {
      setErro("Não foi possível obter a resposta agora. Tente de novo.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="container py-5 duvidas">
      <h1 className="title">Dúvidas do Agro</h1>
      <p className="subtitle">
        Pergunte sobre culturas, solo, adubação e pragas.
      </p>

      <form onSubmit={enviar} className="contact-form duvidas-form">
        <input
          className="form-control"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          maxLength={500}
          placeholder="Ex: qual o melhor solo para plantar milho?"
        />
        <button className="btn btn-send" type="submit" disabled={carregando}>
          {carregando ? "Pensando..." : "Perguntar"}
        </button>
      </form>

      {erro && <p className="duvidas-erro">{erro}</p>}

      {resposta && (
        <div className="resposta-card">
          <small>Sua pergunta</small>
          <p className="pergunta-enviada">{perguntaEnviada}</p>
          <div className="resposta-corpo">
            <small className="resposta-label">Resposta</small>
            <p>{resposta}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Duvidas;