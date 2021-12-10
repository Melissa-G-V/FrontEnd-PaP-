import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
import { ClienteContext } from "./ClienteContext.js";

import NavBar from "./NavBar.js";
import Listagem from "./Listagem.js";
import UserLogin from "./UserLogin.js";
//import Form from "./Form.js";
//import FormTwo from "./FormTwo.js";
import Interesses from "./Interesses.js";
import "./App.css";
import Grafico from "./Grafico.js";





function App() {

  const [dados, setDados] = useState({})

  return (
    <ClienteContext.Provider value={{dados, setDados}}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
         
            <Listagem / >

          </Route>
          <Route path="/login">
            <UserLogin />
          </Route>
          <Route path="/graph1">
            <Grafico/>
          </Route>
          <Route path="/review">
           <Interesses/>
          </Route>
        </Switch>
      </Router>
    </ClienteContext.Provider>
  );
}

export default App;
