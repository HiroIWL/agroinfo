import { useState, useEffect } from "react";
import culturasData from "../data/culturasData";
import RecomendacaoAgricola from "../components/recomendacaoagricola.jsx";

function Culturas() {
  const [cardAtivo, setCardAtivo] = useState(null);

  const [clima, setClima] = useState(null);
  const [carregandoClima, setCarregandoClima] = useState(false);
  const [erroClima, setErroClima] = useState("");

  // Cultura que está aberta no modal (ou undefined se nenhuma)
  const culturaSelecionada = culturasData.find((c) => c.id === cardAtivo);
  // Fecha o modal ao apertar ESC
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") setCardAtivo(null);
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Trava a rolagem da página enquanto o modal está aberto
  useEffect(() => {
    document.body.style.overflow = cardAtivo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cardAtivo]);

  function descreverClima(codigo) {
    const codigos = {
      0: "Céu limpo",
      1: "Predominantemente limpo",
      2: "Parcialmente nublado",
      3: "Nublado",
      45: "Neblina",
      51: "Garoa fraca",
      61: "Chuva fraca",
      63: "Chuva moderada",
      65: "Chuva forte",
      80: "Pancadas de chuva",
      95: "Tempestade",
    };
    return codigos[codigo] || "Condição desconhecida";
  }

  function buscarClima() {
    setCarregandoClima(true);
    setErroClima("");
    setClima(null);

    if (!navigator.geolocation) {
      setErroClima("Seu navegador não suporta geolocalização.");
      setCarregandoClima(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`,
          );

          if (!response.ok) {
            throw new Error("Falha ao buscar dados do clima.");
          }

          const data = await response.json();
          setClima(data.current);
        } catch (error) {
          setErroClima("Não foi possível carregar o clima agora.");
        } finally {
          setCarregandoClima(false);
        }
      },
      () => {
        setErroClima("Não foi possível obter sua localização.");
        setCarregandoClima(false);
      },
    );
  }

  return (
    <main>
      <section className="hero">
        <video
          className="hero-video"
          src="/videos/fazenda.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Tudo que o Agricultor Precisa Saber sobre
            <span>Plantas e Culturas</span>
          </h1>
          <p>
            Informações técnicas sobre culturas agrícolas, desde o preparo do
            solo até a colheita.
          </p>
          <span className="hero-badge">
            🌾 Guia técnico para o agricultor brasileiro
          </span>
        </div>
      </section>

      <section className="section-culturas">
        <div className="container py-5">
          <div className="text-center mb-4">
            <span className="label-top">Base de dados</span>
            <h2>Principais Culturas Agrícolas</h2>

            <button
              className="btn btn-outline-success mt-3"
              type="button"
              onClick={buscarClima}
              disabled={carregandoClima}
            >
              {carregandoClima ? "Carregando..." : "🌤️ Ver clima atual"}
            </button>

            {erroClima && <p className="text-danger mt-2">{erroClima}</p>}

            {clima && (
              <>
                <section className="clima-card">
                  <div className="clima-card-header">
                    <span className="clima-icon">🌤️</span>

                    <div>
                      <span className="clima-label">Clima atual</span>
                      <h3>Condições da sua região</h3>
                    </div>
                  </div>

                  <div className="clima-card-grid">
                    <div className="clima-info-box">
                      <span>🌡️</span>
                      <p>Temperatura</p>
                      <strong>{clima.temperature_2m}°C</strong>
                    </div>

                    <div className="clima-info-box">
                      <span>☁️</span>
                      <p>Condição</p>
                      <strong>{descreverClima(clima.weather_code)}</strong>
                    </div>

                    <div className="clima-info-box">
                      <span>💧</span>
                      <p>Umidade</p>
                      <strong>{clima.relative_humidity_2m}%</strong>
                    </div>
                  </div>
                </section>

                <RecomendacaoAgricola clima={clima} />
              </>
            )}

            <p className="subtitle">
              Clique em "Ver detalhes completos" para visualizar informações
              técnicas sobre plantio, clima, solo e necessidade hídrica.
            </p>
          </div>

          <div className="row g-4">
            {culturasData.map((cultura) => (
              <div key={cultura.id} className="col-12 col-lg-6 col-xl-4">
                <div className="cultura-card">
                  <div className="card-top">
                    <span className="icon">{cultura.icon}</span>
                    <span className="nome">{cultura.nome}</span>
                    <span className="badge-tipo">{cultura.tipo}</span>
                  </div>

                  <p className="info">{cultura.infoResumo}</p>

                  <button
                    className="ver-mais"
                    type="button"
                    onClick={() => setCardAtivo(cultura.id)}
                  >
                    Ver detalhes completos <span className="seta">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalhes */}
      {culturaSelecionada && (
        <div className="modal-overlay" onClick={() => setCardAtivo(null)}>
          <div
            className="modal-cultura"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
          >
            <button
              className="modal-fechar"
              type="button"
              onClick={() => setCardAtivo(null)}
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="card-top">
              <span className="icon">{culturaSelecionada.icon}</span>
              <span className="nome" id="modal-titulo">
                {culturaSelecionada.nome}
              </span>
              <span className="badge-tipo">{culturaSelecionada.tipo}</span>
            </div>

            <div className="modal-detalhes-grid">
              {culturaSelecionada.detalhes.map((d, index) => (
                <div className="detalhe-item" key={index}>
                  <span>{d.icon}</span>
                  <strong>{d.titulo}</strong>
                  <p>{d.texto}</p>
                </div>
              ))}

              <div className="solo-recomendado">
                <span>🪨</span>
                <strong>Solo recomendado</strong>
                <p>{culturaSelecionada.soloRecomendado}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Culturas;
