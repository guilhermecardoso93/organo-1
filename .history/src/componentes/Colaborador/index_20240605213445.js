import { AiFillCloseCircle } from "react-icons/ai";

import "./colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
        size={25}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4  style={{
          color: corDeFundo
        }}>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
