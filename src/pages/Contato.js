import emailjs from 'emailjs-com';

function Contato() {
 function handleSubmit(e) {
  e.preventDefault();

  console.log(" SERVICE ID:", process.env.REACT_APP_EMAILJS_SERVICE);
  console.log(" TEMPLATE ID:", process.env.REACT_APP_EMAILJS_TEMPLATE);
  console.log(" USER (public key):", process.env.REACT_APP_EMAILJS_USER);

  emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE,
    process.env.REACT_APP_EMAILJS_TEMPLATE,
    e.target,
    process.env.REACT_APP_EMAILJS_USER
  )
  .then(() => alert('Enviado!'))
 
 }
  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input name="nome" placeholder="Seu nome" required />
      <input name="email" placeholder="Seu email" required />
      <textarea name="mensagem" placeholder="Digite sua mensagem" required />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default Contato;