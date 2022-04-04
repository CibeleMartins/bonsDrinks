import styles from './ProjectForm.module.css';
import Input from '../form/Input';


function Form() {

  return (
    <form className={styles.form}>
      <Input type="text" name="name" placeholder="Nome"/>
      
      <Input type="text" name="name" placeholder="Sobrenome"/>
      <Input type="text" name="name" placeholder="E-mail"/>
      <Input type="password" name="name" placeholder="Senha"/>
      <Input type="password" name="name" placeholder="Confirme sua senha"/>
      <Input type="text" name="name" placeholder="Insira aqui a mensagem"/>
      <div>
        <input type="submit" value="Cadastrar e enviar"></input>
      </div>

    </form>
  )
}


export default Form;