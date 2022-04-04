import styles from '.SubmitButton.module.css';

// o botão recebe somente o texto, pode ser usado em outros lugares, textos diferentes.
function SubmitButton({text}) {

  return (

    <div>
      <button className={styles.btn}>{text}</button>
    </div>
)
    
    
}

export default SubmitButton;