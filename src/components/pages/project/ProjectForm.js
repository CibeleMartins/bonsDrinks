import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import {useState} from 'react';

// recebe o texto do elemento pai do button
function ProjectForm({btnText}) {

    function cadastraUsuario(event) {

      event.preventDefault()
      console.log(`O usuário ${name} se cadastrou com o sobrenome ${lastName}.`)

    }

    const [name, setName] = useState("")

    const [lastName, setLastName] = useState("")



    return (

      <form className={styles.form} onSubmit={cadastraUsuario}>

        <Input type="text" value={name} placeholder="Nome" onChange={(event) => setName(event.target.value)}/>
      
        <Input type="text" value={lastName} placeholder="Sobrenome" onChange={(event) => setLastName(event.target.value)}/>
        <Input type="text" name="email" placeholder="E-mail"/>
        <Input type="password" name="senha" placeholder="Senha"/>
        <Input type="password" name="csenha" placeholder="Confirme sua senha"/>
        <Input type="text" name="mensagem" placeholder="Insira aqui a mensagem"/>

        <SubmitButton type="submit" text={btnText}/>
        {/* e insere aqui */}

      </form>
  
    )

}


export default ProjectForm;