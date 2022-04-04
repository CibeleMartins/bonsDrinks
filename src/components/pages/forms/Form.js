
function Form() {

  return (
    <form>
      <div>
        <input type="text" placeholder="Nome"></input>
      </div>
      
      <div>
        <input type="text" placeholder="Sobrenome"></input>
      </div>
      <div>
        <input type="text" placeholder="E-mail"></input>
      </div>
      <div>
        <input type="password" placeholder="Senha"></input>
      </div>
      <div>
        <input type="password" placeholder="Confirme a senha"></input>
      </div>
      <div>
        <input type="text" placeholder="Insira aqui a mensagem"></input>
      </div>
      <div>
        <input type="submit" value="Cadastrar e enviar"></input>
      </div>

    </form>
  )
}


export default Form;