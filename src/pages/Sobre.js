import { motion } from 'framer-motion';

function Sobre() {
  return (
    <motion.div className="page" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
      <h2>Sobre Nós</h2>
      <p>
        Olá! Sou <strong>Tomaz Silva Sampaio</strong>, desenvolvedor e empreendedor digital com atuação  na criação de soluções sob medida para negócios e pessoas.
      </p>
      <ul>
        <li><strong>Nome Empresarial:</strong>  TOMAZ SILVA SAMPAIO</li>
        <li><strong>CNPJ:</strong> 59.086.657/0001-66</li>
        
      </ul>
    </motion.div>
  );
}

export default Sobre;