import React from "react";

import styles from './Contato.module.css';
import ProjectForm from "./project/ProjectForm";
import { useState } from "react";

function Contato () {

  return (

    <div className={styles.container_forms}>

      <h1>Cadastre-se e fale com a gente!</h1>
      
      <ProjectForm btnText="Cadastrar e enviar"/>


    </div>

  )

}

export default Contato;