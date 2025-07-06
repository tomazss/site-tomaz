import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div className="page" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="highlight">TOMAZ SAMPAIO</h1>
      <p className="tagline">Desenvolvimento de soluções digitais.</p>
    </motion.div>
  );
}

export default Home;