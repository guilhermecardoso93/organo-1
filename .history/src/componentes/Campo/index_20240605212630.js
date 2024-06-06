import "./campo.css";

const Campo = ({
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
  type
}) => {
  return (
    <div className="campo">
      <label>{label}</label>
      <input
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
        type=""
      />
    </div>
  );
};

export default Campo;
