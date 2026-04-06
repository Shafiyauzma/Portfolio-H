import { motion } from 'framer-motion';
import { 
  Bot, 
  Target, 
  MessageSquare, 
  Microscope, 
  Code2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects = [] } = portfolioData || {};

  const getIcon = (emoji) => {
    switch(emoji) {
      case '🔬': return <Microscope size={32} />;
      case '🎯': return <Target size={32} />;
      case '💬': return <MessageSquare size={32} />;
      case '🔭': return <Bot size={32} />;
      default: return <Code2 size={32} />;
    }
  };

  return (
    <section id="projects" className="projects-holo-section">
      <div className="container" style={{ marginBottom: '2vh' }}>
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          <span className="header-badge">projects</span>
          <h2 className="section-title-luxe">Technical <em>Projects.</em></h2>
        </motion.div>
      </div>

      <div className="holo-grid">
        {projects.map((proj, index) => (
          <motion.div 
            key={index} 
            className="holo-project-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onClick={() => { if(proj.link) window.open(proj.link, '_blank'); }}
          >
            <div className="holo-card-header">
              <div className="holo-icon-wrapper">
                {getIcon(proj.emoji)}
              </div>
              <div className="holo-header-info">
                <span className="holo-node-id">PROJECT_0{index + 1}</span>
                <h3 className="holo-title">{proj.title}</h3>
              </div>
            </div>

            <div className="holo-card-body">
              <p className="holo-desc">{proj.description}</p>
              
              <ul className="holo-highlights">
                {proj.highlights?.map((h, i) => (
                  <li key={i}><span className="holo-bullet"></span>{h}</li>
                ))}
              </ul>
            </div>

            <div className="holo-card-footer">
              {proj.tags?.map((tag, i) => (
                <span className="holo-tag" key={i}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="projects-scroll-indicator">
        <ChevronLeft size={18} className="scroll-arrow" />
        <span>Swipe Card</span>
        <ChevronRight size={18} className="scroll-arrow" />
      </div>
    </section>
  );
}
