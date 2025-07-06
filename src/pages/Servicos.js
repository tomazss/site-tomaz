import { motion } from 'framer-motion';

function Servicos() {
  return (
    <motion.div className="page" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
      <h2>Nossos Serviços</h2>
      <ul className="servicos">
        <li>📱 Desenvolvimento de aplicativos Android personalizados</li>
        <li>🌐 Criação de sites institucionais</li>
        <li>🔧 Consultoria técnica em tecnologia e inovação</li>
        <li>🚀 Publicação e manutenção de apps na Play Store</li>
      </ul>
    </motion.div>
  );
}

export default Servicos;