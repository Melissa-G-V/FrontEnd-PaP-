import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ClienteContext } from "./ClienteContext";
import { useHistory } from "react-router-dom";

import "./NavBar.css";

const Header = () => {

  const cliente = useContext(ClienteContext);
  let history = useHistory();

  const loginLogout = () => {
    cliente.setDados({id: null, nome: "", token: ""});
    history.push("/login")
  }

  return (
    <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
      <Link className="navbar-brand" to="/">
        <img
          src="Atelier.png"
          alt="Atelier"
          width="50"
          className="float-left mr-2"
        />
        <h2>Atelier Ponto a Ponto</h2>
        
      </Link>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/graph1">
          <button className="btn btn-block">
          Estatisticas
     </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/review">
          <button className="btn btn-block">
          Interesses
         </button>
          </Link>
        </li>
        <li className="nav-item">
        <button className="btn btn-block">
          
     
          <span className="nav-link" onClick={loginLogout}>
            <i className="fas fa-user-friends mr-2"></i>
            { cliente.dados.nome ? cliente.dados.nome + " (sair)" : "(identifique-se)"}
          </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
