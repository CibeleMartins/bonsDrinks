import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {

  return (
    <footer className= {styles.footer}>

      <main className={styles.icons}>
        <div>
          <FaFacebook/>
        </div>
        <div>
          <FaInstagram/>
        </div>
        <div>
          <FaLinkedin/>
        </div>
      </main>

      <p><span>Bons Drinks</span> &copy; 2022</p>
    </footer>
  )
}

export default Footer;