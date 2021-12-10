import React, { useContext } from "react";
import { ClienteContext } from "./ClienteContext";

const ItemLista = (props) => {

  const cliente = useContext(ClienteContext);
  console.log(cliente)

  let likeButtons;
  if (cliente.dados.id) {
    likeButtons = (
      <>
      <div className="container">

        <button className="btn-warning btn-block" onClick={props.delClick}>
          <i class="fas fa-trash"></i>
        </button>
        <button className="btn-success btn-block" onClick={props.AddInt}>
        <span className="mx-2">Interesse 
        <i class="fas fa-search-dollar"></i>
        </span> 
        </button>
        <button className="btn-secondary btn-block" onClick={props.UpClick}>
  
            { props.destaque ? ( <span className="mx-2">Up <i class="fas fa-angle-double-up"></i></span> ): (<span className="mx-2">Organizar <i class="fas fa-angle-double-down"></i></span>)}
        </button>
      
      </div>
      </>
    );
  }

  return (
    <div className="card col-sm-3 col-6 my-2 mx-1 b-2">
      <img className="card-img-top" src={props.foto} alt="Veículo em Destaque" />
      <div className="card-body">
        <h4 className="card-title">
           {props.p_nome}
        </h4>
        <p>"{props.descricao}"</p>
        <h5 className="card-text">
          Preço R$: &nbsp;
          {Number(props.preco).toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </h5>
        {likeButtons}
      </div>
    </div>
  );
};

export default ItemLista;