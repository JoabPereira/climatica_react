import { useState } from "react";
import axios from "axios";
import "../style/style.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "23375dfe8c51530f324b2de536cb3711";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
      );
      setData(response.data);
      setError("");
    } catch (err) {
      setError("Cidade não encontrada ou erro na requisição.");
      setData(null);
    }
  };

  return (
    <div className="previsao">
      <div className="tempo">
        <h2 className="text1">Previsão do Tempo</h2>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-cidade"
        />
        <button className="btn-buscar" onClick={fetchWeather}>
          Buscar
        </button>

        {error && <p>{error}</p>}

        {data && (
          <div className="dados">
            <h3>
              {data.name}, {data.sys.country}
            </h3>
            <p className="temp">Temperatura: {data.main.temp} °C</p>
            <p className="clim">Clima: {data.weather[0].description}</p>
            <p className="umid">Umidade: {data.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
