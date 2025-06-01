import { Github, Linkedin } from "lucide-react";
import { type Integrante } from "../../utils/integrantes";


interface Props {
  integrante: Integrante;
}

const CardIntegrante: React.FC<Props> = ({ integrante }) => {
  return (
    <div className=" border-zinc-300 border-2 h-[50px] rounded-lg shadow-md w-full max-w-sm grid grid-cols-2 items-center !px-5">
      <h2 className="text-xl font-semibold mb-2 text-white">{integrante.name}</h2>
      <div className="flex gap-2">
        <a
          href={integrante.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline flex gap-1"
        >
          <Github className="text-black"/>
          GitHub
          
        </a>
        <a
          href={integrante.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline flex gap-1"
        >
          <Linkedin className="text-blue-500"/>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default CardIntegrante;
