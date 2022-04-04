import React from "react";

import styles from './Contato.module.css';
import Form from "./forms/Form";

function Contato () {

  return (

    <div className={styles.container_forms}>

      <h1>Cadastre-se e fale com a gente!</h1>
      
      <Form></Form>


    </div>

  )

}

export default Contato;