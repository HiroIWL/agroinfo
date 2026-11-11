import {useState, useEffect} from "react";
import homeImg from "../assets/imgs/home.jpg";

function Home() {
  const [introducao, setIntroducao] = useState("");

  useEffect(() => {
    setIntroducao("Bem-vindo à AgroInfo");
  }, []);

  return (
  <div className="home" style={{ backgroundImage: `url(${homeImg})` }}>
    <div className="introducao">
      <h1>{introducao}</h1>
      <p>
        Sua fonte de conhecimento sobre agricultura e técnicas modernas de
        cultivo.
      </p>
      <p>
        Nesse projetos tentaremos desenvolver um website informativo sobre
        agricultura, que seja capaz de auxiliar não só o Brasil mas o mundo
        inteiro no combate contra a fome, conforme o projeto da FIAP ODS 2:
        Fome Zero e Agricultura Sustentável.
      </p>
    </div>
  </div>
);
}

export default Home;

// link da entrega da fase 5
//  https://youtu.be/54dRmarIV84
