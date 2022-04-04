
import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../../img/logo.jpg';

function Navbar() {

  return (

    <nav class={styles.navbar}>
      <Container>
        <Link to='/'>
          <img src={logo} alt='bons-drinks' width={100}></img>
        </Link>
        
        <Link to='/drinks'>Drinks</Link>
        <Link to='/drinksFunc'>DrinksFunc</Link>
        <Link to='/sobre'>Sobre nós</Link>
        <Link to='/NossoTime'>Nosso Time</Link>
        <Link to='/contato'>Contato</Link>
      </Container>
    </nav>

  )

}

export default Navbar;