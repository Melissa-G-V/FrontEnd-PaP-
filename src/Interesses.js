import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Conecta from "./Conecta";
import { ClienteContext } from "./ClienteContext";
import ItemInteresse from "./ItemInteresse"

const Inters = () => {
const [inters, setInter] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const cliente = useContext(ClienteContext);

  const getInter = async () => {
    const lista = await Conecta.get("compras");
    //    console.log(lista);
    setInter(lista.data);
  };
  useEffect(() => {
    getInter();
  }, []);


  return (
    <div className="container">
<div className="row">
    {inters.map((inter, index) => (
      <ItemInteresse
        id={inter.id}
        descricao={inter.descricao}
        p_nome={inter.p_nome}
        usuario_id={inter.usuario_id}
        nome={inter.nome}
        foto={inter.foto}
        email={inter.email}
        preco={inter.preco}
        key={inter.id} />
    ))}
  </div>
</div>

  );
};
export default Inters;