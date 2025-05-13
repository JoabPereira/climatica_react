import "../style/style.css";
import { Github, Linkedin } from "lucide-react";

const Contato = () => {
  return (
    <div className="contato">
      <h3 className="equipe">Integrantes da Equipe</h3>
      <div className="devs">
        <div className="joab">
          <h3>Joab Pereira</h3>
          <a href="https://github.com/JoabPereira" className="joablink1">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/joabpereira/"
            className="joablink2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="vittor">
          <h3>Vittor Gabriel</h3>
          <a href="https://github.com/VittorSpi" className="vittorlink1">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vittor-gabriel-557983289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="vittorlink2"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="jose">
          <h3>José Lucas</h3>
          <a href="https://github.com/JoseLucas49" className="joselink1">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </div>

        <div className="kevin">
          <h3>Kevin Silva</h3>
          <Github size={20} />
          <span>GitHub</span>
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </div>
      </div>
    </div>
  );
};

export default Contato;
