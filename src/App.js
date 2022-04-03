import React from 'react';

import {Route, Router, Switch, Link} from 'react-router-dom';
import Drinks from './components/pages/Drinks';
import DrinksFunc from './components/pages/DrinksFunc';
import Sobre from './components/pages/Sobre';
import NossoTime from './components/pages/NossoTime';
import Contato from './components/pages/Contato';

import Container from './components/pages/layout/Container';

function App() {

  return (
  <Router>

    <div>
    <Link to='/drinks'>Drinks</Link>
    <Link to='/drinksFunc'>DrinksFunc</Link>
    <Link to='/sobre'>Sobre nós</Link>
    <Link to='/NossoTime'>Nosso Time</Link>
    <Link to='/contato'>Contato</Link>
    </div>

    <Switch>

      {/* Em cada Route tem um componente/pagina, no atributo path colocamos o nome do caminho da route */}

      <Container>

        <Route exact path='/drinks'>
          {/* "exact" para executar a home quando a rotta for exatamente a barra */}
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

    <p>Footer</p>
  </Router>

  )
}

export default App;


// Depois disso, é criar esses componentes, as páginas para estes componentes
//  primeiro vai em src e cria a pasta components
// cria a pasta pages
// cria um arquivo JS para cada componente
