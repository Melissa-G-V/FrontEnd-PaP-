import React, { useContext } from "react";
import { ClienteContext } from "./ClienteContext";


const ItemReview = (props) => {

  const cliente = useContext(ClienteContext);
  console.log(cliente)


  return (
    <div className="card col-sm-3 col-6 my-2 mx-1 b-2">
    <div class="card-header">
    <h4 className="card-title">
         {props.p_nome}
      </h4>
     </div>
    <img className="card-img" src={props.foto} alt="Veículo em Destaque" />
    <div className="card-body">
      
      <h5 className="card-text">
        Preço R$: &nbsp;
        {Number(props.preco).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}
      </h5>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Nome da interresada: {props.nome}</li>
    <li class="list-group-item">Email: {props.email}</li>
  </ul>
    
    </div>
  </div>

  );
};

export default ItemReview;