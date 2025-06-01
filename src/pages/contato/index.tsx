import CardIntegrante from "../../components/card-integrante";
import { integrantes } from "../../utils/integrantes";



const Contato: React.FC = () => {
  return (
    
    <main className="bg-[#0d7290] h-[65vh] flex flex-col items-center gap-2 !py-3">
      <h1 className="font-bold text-3xl text-white">Integrantes da Equipe</h1>

      <div className="flex flex-col gap-2">
         {integrantes.map((integrante, index) => (
          <CardIntegrante key={index} integrante={integrante}/>
        ))} 
      </div>
    </main>
  );
};

export default Contato;
