import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

// recebe o texto do elemento pai do button
function ProjectForm({btnText}) {

  return (
    <form className={styles.form}>
      <Input type="text" name="name" placeholder="Nome"/>
      
      <Input type="text" name="name" placeholder="Sobrenome"/>
      <Input type="text" name="name" placeholder="E-mail"/>
      <Input type="password" name="name" placeholder="Senha"/>
      <Input type="password" name="name" placeholder="Confirme sua senha"/>
      <Input type="text" name="name" placeholder="Insira aqui a mensagem"/>
      <SubmitButton text={btnText}/>
      {/* e insere aqui */}

    </form>
  )
}


export default ProjectForm;