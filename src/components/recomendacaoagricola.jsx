function gerarRecomendacaoAgricola(clima) {
  const temperatura = Number(clima.temperature_2m);
  const umidade = Number(clima.relative_humidity_2m);
  const codigoClima = Number(clima.weather_code);

  if (temperatura >= 32 && umidade < 45) {
    return {
      nivel: "alerta",
      titulo: "Atenção: clima quente e seco",
      mensagem:
        "As condições atuais indicam maior risco de estresse hídrico nas plantas. É recomendado reforçar o monitoramento da irrigação e evitar atividades em horários de sol intenso.",
      culturas: ["Mandioca", "Milho", "Laranja"],
      cuidados: [
        "Verificar necessidade de irrigação",
        "Evitar plantio em horários muito quentes",
        "Monitorar sinais de murcha nas plantas",
      ],
    };
  }

  if (umidade >= 80 || codigoClima >= 61) {
    return {
      nivel: "atencao",
      titulo: "Atenção: umidade elevada",
      mensagem:
        "A umidade alta pode favorecer o surgimento de doenças fúngicas e bacterianas. O produtor deve acompanhar a lavoura e observar sinais de manchas, ferrugens e apodrecimento.",
      culturas: ["Soja", "Feijão", "Tomate", "Alface"],
      cuidados: [
        "Monitorar doenças nas folhas",
        "Evitar excesso de irrigação",
        "Verificar drenagem do solo",
      ],
    };
  }

  if (
    temperatura >= 20 &&
    temperatura <= 30 &&
    umidade >= 50 &&
    umidade <= 75
  ) {
    return {
      nivel: "favoravel",
      titulo: "Condições favoráveis",
      mensagem:
        "A temperatura e a umidade estão dentro de uma faixa adequada para diversas culturas agrícolas. As condições favorecem o desenvolvimento vegetativo e o manejo da lavoura.",
      culturas: ["Soja", "Milho", "Feijão", "Mandioca"],
      cuidados: [
        "Manter o acompanhamento climático",
        "Verificar o solo antes do plantio",
        "Acompanhar a necessidade hídrica da cultura",
      ],
    };
  }

  if (temperatura < 15) {
    return {
      nivel: "atencao",
      titulo: "Atenção: temperatura baixa",
      mensagem:
        "Temperaturas mais baixas podem reduzir o crescimento de algumas culturas tropicais. É importante avaliar se a cultura escolhida é adequada para esse clima.",
      culturas: ["Café", "Alface"],
      cuidados: [
        "Evitar culturas muito sensíveis ao frio",
        "Acompanhar previsão dos próximos dias",
        "Proteger mudas jovens quando necessário",
      ],
    };
  }

  return {
    nivel: "moderado",
    titulo: "Condições moderadas",
    mensagem:
      "As condições climáticas atuais não indicam risco extremo, mas ainda exigem acompanhamento. A escolha da cultura deve considerar solo, irrigação e clima ideal.",
    culturas: ["Soja", "Milho", "Feijão", "Mandioca"],
    cuidados: [
      "Monitorar temperatura e umidade",
      "Conferir necessidade hídrica",
      "Observar sinais de pragas e doenças",
    ],
  };
}

function RecomendacaoAgricola({ clima }) {
  if (!clima) {
    return null;
  }

  const recomendacao = gerarRecomendacaoAgricola(clima);

  return (
    <section className={`recomendacao-card ${recomendacao.nivel}`}>
      <span className="recomendacao-label">Recomendação agrícola</span>

      <h3>{recomendacao.titulo}</h3>

      <p>{recomendacao.mensagem}</p>

      <div className="recomendacao-grid">
        <div>
          <h4>Culturas relacionadas</h4>

          <div className="recomendacao-tags">
            {recomendacao.culturas.map((cultura) => (
              <span key={cultura}>{cultura}</span>
            ))}
          </div>
        </div>

        <div>
          <h4>Cuidados sugeridos</h4>

          <ul>
            {recomendacao.cuidados.map((cuidado) => (
              <li key={cuidado}>{cuidado}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RecomendacaoAgricola;
