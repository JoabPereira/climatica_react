import "../style/style.css";

const Sobre = () => {
  return (
    <div className="sobre">
      <h2 className="titulosobre">Sobre</h2>
      <p className="about1">
        Este projeto é um site web desenvolvido em React.js que permite ao
        usuário consultar a previsão do tempo em tempo real de qualquer cidade
        do mundo. Utilizando a API pública OpenWeatherMap, o site exibe
        informações como temperatura atual, condições climáticas, umidade e
        país.
      </p>
      <br />
      <p className="about2">
        O principal objetivo é oferecer uma ferramenta simples, intuitiva e
        acessível para que qualquer pessoa possa obter dados meteorológicos
        rapidamente, sem depender de aplicativos pesados ou portais complexos.
        Tudo isso é feito com integração via axios, sem a necessidade de
        backend.
      </p>
    </div>
  );
};

export default Sobre;
