import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Activities() {
  const { activities = [] } = portfolioData || {};

  return (
    <section id="activities" className="activities-luxe-section">
      <div className="container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="header-badge" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>leadership</span>
          <h2 className="section-title-luxe">Extra Curricular <em>Activities.</em></h2>
        </motion.div>

        <div className="activities-bento-grid">
          {activities.map((act, index) => (
            <motion.div 
              key={index}
              className="activity-bento-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="activity-icon-glass">
                {act.icon}
              </div>
              <div className="activity-header">
                <span className="activity-period">{act.period}</span>
                <h3 className="activity-role">{act.role}</h3>
                <h4 className="activity-org">{act.org}</h4>
              </div>
              <p className="activity-desc">{act.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
