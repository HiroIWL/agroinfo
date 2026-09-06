function SoloEAdubacao() {
  return (
    <>
      <div className="container py-4">
        <div className="text-center mb-5">
          <h5 className="subtitulo">Fundamentos agronômicos</h5>
          <h1 className="titulo">Solo e Adubação</h1>
          <p className="descricao">
            O solo é a base de tudo na agricultura. Conheça os principais tipos
            de solo do Brasil e os nutrientes essenciais para suas culturas.
          </p>
        </div>

        <h3 className="secao-titulo">🪨 Tipos de Solo no Brasil</h3>

        <div className="row g-5 mt-2">
          <div className="col-md-6">
            <div className="solo-card latossolo">
              <h3>Latossolo</h3>
              <p>
                Solo profundo, bem drenado, alta permeabilidade. Comum no
                Cerrado.
              </p>
              <p>
                <strong>Adequado para:</strong> Soja, milho, algodão,
                cana-de-açúcar
              </p>
              <p>
                <strong>Correção:</strong> Adubação orgânica; cuidado com
                erosão.
              </p>
            </div>

            <div className="solo-card cambissolo mt-5">
              <h3>Cambissolo</h3>
              <p>Pouco desenvolvido, raso. Frequente em áreas serranas.</p>
              <p>
                <strong>Adequado para:</strong> Hortaliças, café, maçã
              </p>
              <p>
                <strong>Correção:</strong> Adubação orgânica; cuidado com
                erosão.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="solo-card argissolo">
              <h3>Argissolo</h3>
              <p>
                Textura argilosa, variável. Comum em SP, MG e Sul do Brasil.
              </p>
              <p>
                <strong>Adequado para:</strong> Cana, pastagens, fruticultura
              </p>
              <p>
                <strong>Correção:</strong> Controle de erosão; adubação
                balanceada.
              </p>
            </div>

            <div className="solo-card gleissolo mt-5">
              <h3>Gleissolo</h3>
              <p>Saturado de água, má drenagem. Presente em várzeas.</p>
              <p>
                <strong>Adequado para:</strong> Arroz irrigado, pastagens úmidas
              </p>
              <p>
                <strong>Correção:</strong> Drenagem artificial; calagem pesada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="titulo-area">
          <h2>🌱 Macronutrientes Essenciais</h2>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-lg-4 col-md-6">
            <div className="nutri-card">
              <div className="cabecalho">
                <div className="simbolo verde">N</div>
                <h3>Nitrogênio</h3>
              </div>
              <small>Função principal</small>
              <p>
                <strong>Desenvolvimento foliar e crescimento vegetativo</strong>
              </p>
              <small>Sintoma de deficiência</small>
              <p className="alerta">Folhas amarelas, crescimento lento</p>
              <small>Fontes</small>
              <p>
                <strong>Ureia, sulfato de amônio, nitrato</strong>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="nutri-card">
              <div className="cabecalho">
                <div className="simbolo laranja">P</div>
                <h3>Fósforo</h3>
              </div>
              <small>Função principal</small>
              <p>
                <strong>Enraizamento, floração e frutificação</strong>
              </p>
              <small>Sintoma de deficiência</small>
              <p className="alerta">Folhas roxo-avermelhadas, raízes fracas</p>
              <small>Fontes</small>
              <p>
                <strong>Superfosfato simples, MAP, DAP</strong>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="nutri-card">
              <div className="cabecalho">
                <div className="simbolo roxo">K</div>
                <h3>Potássio</h3>
              </div>
              <small>Função principal</small>
              <p>
                <strong>Resistência a doenças, qualidade dos frutos</strong>
              </p>
              <small>Sintoma de deficiência</small>
              <p className="alerta">
                Bordas das folhas queimadas, frutos pequenos
              </p>
              <small>Fontes</small>
              <p>
                <strong>Cloreto de potássio, sulfato de potássio</strong>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="nutri-card">
              <div className="cabecalho">
                <div className="simbolo cinza">Ca</div>
                <h3>Cálcio</h3>
              </div>
              <small>Função principal</small>
              <p>
                <strong>Estrutura celular, qualidade dos frutos</strong>
              </p>
              <small>Sintoma de deficiência</small>
              <p className="alerta">
                Podridão apical (tomate), folhas enroladas
              </p>
              <small>Fontes</small>
              <p>
                <strong>Calcário calcítico, gesso agrícola</strong>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="nutri-card">
              <div className="cabecalho">
                <div className="simbolo azul">Mg</div>
                <h3>Magnésio</h3>
              </div>
              <small>Função principal</small>
              <p>
                <strong>Componente da clorofila, fotossíntese</strong>
              </p>
              <small>Sintoma de deficiência</small>
              <p className="alerta">Clorose internerval (folhas velhas)</p>
              <small>Fontes</small>
              <p>
                <strong>Calcário dolomítico, sulfato de magnésio</strong>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="nutri-card">
              <div className="cabecalho">
                <div className="simbolo amarelo">S</div>
                <h3>Enxofre</h3>
              </div>
              <small>Função principal</small>
              <p>
                <strong>Síntese de proteínas, qualidade do grão</strong>
              </p>
              <small>Sintoma de deficiência</small>
              <p className="alerta">Clorose nas folhas jovens</p>
              <small>Fontes</small>
              <p>
                <strong>Superfosfato simples, gesso agrícola</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="ph-box mt-5">
          <div className="row align-items-center">
            <div className="col-md-1 text-center">
              <div className="icone">☂️</div>
            </div>

            <div className="col-md-9">
              <h4>A importância do pH do solo</h4>
              <p>
                O pH ideal para a maioria das culturas está entre{" "}
                <strong>5.5 e 7.0</strong>. Solos ácidos (pH abaixo de 5.5)
                bloqueiam a absorção de nutrientes mesmo que eles estejam
                presentes no solo. A calagem é a prática mais eficiente para
                corrigir a acidez - aplique 2 a 4 toneladas de calcário por
                hectare, de 3 a 6 meses antes do plantio.
              </p>
            </div>

            <div className="col-md-2 text-center">
              <div className="ph">
                pH <br />
                5.5-7.0
                <br />
                Ideal
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoloEAdubacao;
