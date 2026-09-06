function Pragas() {
  return (
    <>
      <div className="container py-4">
        <div className="text-center topo">
          <h5>Fitossanidade</h5>

          <h1>Principais Pragas e Doenças</h1>

          <p>
            Identifique rapidamente as pragas e doenças mais comuns nas
            principais culturas do Brasil e saiba como controlá-las.
          </p>
        </div>

        <div className="text-center my-5">
          <span className="tipo inseto">🪲 Inseto</span>

          <span className="tipo fungo">🍄 Fungo</span>

          <span className="tipo bacteria">🦠 Bactéria</span>

          <span className="tipo nematoide">🪱 Nematoide</span>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="praga-card">
              <h3>🐛 Lagarta-do-cartucho</h3>

              <div className="mb-3">
                <span className="tag inseto">Inseto</span>

                <span className="nivel">Severidade Alta</span>
              </div>

              <small>Culturas afetadas:</small>

              <div className="mt-1">
                <span className="cultura">Milho</span>
                <span className="cultura">Soja</span>
                <span className="cultura">Arroz</span>
              </div>

              <div className="sintoma">
                🔍 Sintomas: Folhas com orifícios e serrilhadas; cartucho com
                excrementos
              </div>

              <div className="controle">
                ✅ Controle: Inseticidas (espinosade, clorantraniliprole);
                controle biológico com BT
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="praga-card">
              <h3>🍄 Ferrugem asiática da soja</h3>

              <div className="mb-3">
                <span className="tag fungo">Fungo</span>

                <span className="nivel">Severidade Alta</span>
              </div>

              <small>Culturas afetadas:</small>

              <div className="mt-1">
                <span className="cultura">Soja</span>
              </div>

              <div className="sintoma">
                🔍 Sintomas: Pústulas marrom-avermelhadas na parte inferior das
                folhas
              </div>

              <div className="controle">
                ✅ Controle: Fungicidas triazóis + estrobilurinas; plantio de
                cultivares resistentes
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="praga-card">
              <h3>🦠 Cancro Cítrico</h3>

              <div className="mb-3">
                <span className="tag bacteria">Bactéria</span>

                <span className="nivel">Severidade Alta</span>
              </div>

              <small>Culturas afetadas:</small>

              <div className="mt-1">
                <span className="cultura">Laranja</span>

                <span className="cultura">Limão</span>

                <span className="cultura">Tangerina</span>
              </div>

              <div className="sintoma">
                🔍 Sintomas: Lesões corticosas nas folhas, frutos e ramos; halo
                amarelo
              </div>

              <div className="controle">
                ✅ Controle: Calda cúprica, erradicação de plantas doentes;
                quarentena
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="praga-card">
              <h3>🪱 Nematoide de galha</h3>

              <div className="mb-3">
                <span className="tag nematoide">Nematoide</span>

                <span className="nivel">Severidade Alta</span>
              </div>

              <small>Culturas afetadas:</small>

              <div className="mt-1">
                <span className="cultura">Soja</span>

                <span className="cultura">Feijão</span>

                <span className="cultura">Tomate</span>

                <span className="cultura">Café</span>
              </div>

              <div className="sintoma">
                🔍 Sintomas: Galhas nas raízes, plantas raquíticas, amarelamento
              </div>

              <div className="controle">
                ✅ Controle: Rotação com gramíneas; uso de nematicidas;
                cultivares resistentes
              </div>
            </div>
          </div>
        </div>

        <div className="alerta-box mt-5">
          <div className="row align-items-center">
            <div className="col-md-1 text-center">
              <div className="icone-alerta">⚠️</div>
            </div>

            <div className="col-md-11">
              <h4>Atenção ao Manejo Integrado de Pragas (MIP)</h4>

              <p>
                Antes de aplicar qualquer defensivo agrícola, faça o
                monitoramento correto da lavoura e confirme se o nível de dano
                econômico foi atingido. O uso indiscriminado de agroquímicos
                gera resistência, elimina inimigos naturais e aumenta os custos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pragas;
