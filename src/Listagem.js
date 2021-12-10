import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Conecta from "./Conecta";
import ItemLista from "./ItemLista";
import { ClienteContext } from "./ClienteContext";

const Listagem = () => {
  const [produtos, setProdutos] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cliente = useContext(ClienteContext);

  const getProdutos = async () => {
    const lista = await Conecta.get("produtos");
    //    console.log(lista);
    setProdutos(lista.data);
  };

  // define o método que será executado após renderizar o componente
  useEffect(() => {
    getProdutos();
  }, []);
// define o método que será executado após renderizar o componente

  


//DELETA O produto
  const DelCar = async (id) =>{
    await Conecta.delete("produtos/" + id);
    await getProdutos();
  }
//FAVORITA O produto
  const UpDown = async (id) =>{
    await Conecta.put("produtos/destaque/" + id)
    await getProdutos();
  }

  const AddInt = async(id, data) =>{
    let item = {
      usuarios_id: cliente.dados.id,
      produtos_id: id,
    };
    await Conecta.post("interese", item);
  }


  const onSubmit = async (data)=>{
      //console.log("data", data);
      const propertyNames = Object.values(data); // get second json value
      //console.log(propertyNames[0]) // show json value
      axios.post(`http://localhost:3001/produtos/pesq/${propertyNames[0]}`,{}) // set axios on prop
        .then(function (response) {
          alert(`Pesquisa: ${propertyNames[0]}`)
          console.log(response);
          setProdutos(response.data)
        })
        .catch(function (error) {
          console.log(error);
          getProdutos();
        });
   };



  return (

    <div >
        <div className="container-fluid bg-danger  py-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input type="text" className="form-control rounded" placeholder="Search"
                id="palavra"
                {...register("palavra")} />
              <button type="submit" className="btn btn-dark">search</button>
            </div>
          </form>
        </div>
        <div className="container">
        <div className="row">
          {produtos.map((produto, index) => (
            <ItemLista
              id={produto.id}
              foto={produto.foto}
              p_nome={produto.p_nome}
              descricao={produto.descricao}
              preco={produto.preco}
              ano={produto.ano}
              destaque={produto.destaque}
              UpClick={() => UpDown(produto.id)}
              AddInt={() => AddInt(produto.id)}
              delClick={() => DelCar(produto.id)}
              
              key={produto.id} />
          ))}
        </div>
        </div>
      </div>
  );
};

export default Listagem;
