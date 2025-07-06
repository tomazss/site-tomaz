import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Início</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
export default Navbar;