import { motion } from 'framer-motion';
import { 
  Bot, 
  Layers, 
  Code2, 
  Database, 
  Cloud, 
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const categoryIcons = {
    "Machine Learning & AI": <Bot size={22} />,
    "Full-Stack Development": <Layers size={22} />,
    "Programming": <Code2 size={22} />,
    "Databases": <Database size={22} />,
    "Cloud & Tools": <Cloud size={22} />,
    "Fundamentals": <Cpu size={22} />
  };

  const gridClasses = [
    "c-span-5", // Machine Learning & AI
    "c-span-3", // Full-Stack Development
    "c-span-4", // Programming
    "c-span-3", // Databases
    "c-span-5", // Cloud & Tools
    "c-span-4"  // Fundamentals
  ];

  return (
    <section id="skills" className="skills-luxe-section section">
      <div className="container skills-luxe-container">
        <div className="luxe-ambient-orb orb-purple" />
        <div className="luxe-ambient-orb orb-cyan" />
        
        <div className="skills-luxe-content">
          <motion.div 
            className="section-header-ref"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="header-badge">Technological Arsenal</span>
            <h2 className="section-title-luxe">Technical <em>Skills.</em></h2>
          </motion.div>

          <div className="luxe-bento-grid">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx} 
                className={`luxe-bento-card ${gridClasses[idx] || "c-span-4"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.05,
                  ease: [0.23, 1, 0.32, 1]
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                <div className="card-header-luxe">
                  <div className="category-icon-luxe">
                    {categoryIcons[skillGroup.category] || <Code2 size={18} />}
                  </div>
                  <h3 className="category-title-luxe">{skillGroup.category}</h3>
                </div>
                
                <div className="pills-container-luxe">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="bubbly-pill-luxe"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.05) + (i * 0.01) }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
