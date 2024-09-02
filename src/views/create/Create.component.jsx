import "./Create.styles.css";
import { useState } from "react";
function Create() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "requerido",
    phone: "",
  });
  function validate(inputs) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)) {
      setError({
        ...error,
        email: "Formato invalido",
      })
      return
    }else{
      setError({
        ...error,
        email: "",
      })
    }
  }
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

    validate({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label>Nombre</label>
          <input name="name" value={inputs.value} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={inputs.value} onChange={handleChange} />
          <span>{error.email}</span>
        </div>
        <div>
          <label>Telefono</label>
          <input name="phone" value={inputs.value} onChange={handleChange} />
        </div>
        {error.email ? null : <button type="submit">Crear</button>}
       
      </form>
    </div>
  );
}

export default Create;
