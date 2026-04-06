import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education = [] } = portfolioData || {};

  return (
    <section id="education" className="education-luxe-section">
      <div className="container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '50px', textAlign: 'center' }}
        >
          <span className="header-badge">Academic Journey...</span>
          <h2 className="section-title-luxe">Education & <em>Learning.</em></h2>
        </motion.div>

        <div className="timeline-spine-container">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="edu-slate-luxe"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Technical Diamond Node */}
              <div className="edu-node-ref"></div>

              <div className="edu-info-side">
                <span className="edu-type-badge">{edu.sub}</span>
                <h3 className="edu-degree-luxe">{edu.degree}</h3>
                <p className="edu-institution-luxe">{edu.institution}</p>
                <div className="edu-meta-row">
                  <span className="edu-pill">{edu.location}</span>
                  <span className="edu-pill">{edu.period}</span>
                </div>
              </div>

              <div className="edu-score-side">
                <div className="edu-cgpa-badge">
                   {edu.cgpa} CGPA
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
