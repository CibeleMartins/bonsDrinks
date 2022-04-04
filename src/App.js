import React from "react";


import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Drinks from './components/pages/Drinks';
import DrinksFunc from './components/pages/DrinksFunc';
import Sobre from './components/pages/Sobre';
import NossoTime from './components/pages/NossoTime';
import Contato from './components/pages/Contato';

import Container from "./components/pages/layout/Container.js";

import Navbar from './components/pages/layout/Navbar';
import Footer from './components/pages/layout/Footer';

function App() {
  return (
    <BrowserRouter>

     <Navbar/>

      <Switch>
        {/* Em cada Route tem um componente/pagina, no atributo path colocamos o nome do caminho da route */}

        <Container customClass= "min-height">

          <Route exact path='/drinks'>
        
          <Drinks/>

          </Route>

          <Route exact path='/drinksFunc'>
            <DrinksFunc/>
          </Route>

          <Route exact path='/sobre'>
            <Sobre/>
          </Route>

          <Route exact path='/NossoTime'>
            <NossoTime/>
          </Route>

          <Route exact path='/contato'>
            <Contato/>
          </Route>

        </Container>

      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;

// Depois disso, é criar esses componentes, as páginas para estes componentes
//  primeiro vai em src e cria a pasta components
// cria a pasta pages
// cria um arquivo JS para cada componente