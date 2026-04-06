import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight, Terminal } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-luxe-section">
      <div className="container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="header-badge">career path</span>
          <h2 className="section-title-luxe">Professional <em>Experience.</em></h2>
        </motion.div>
        
        <div className="exp-timeline-advanced">
          <div className="timeline-line-advanced" />
          
          {experience.map((exp, i) => (
            <motion.div 
              key={i} 
              className="exp-item-advanced"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <div className="exp-dot-advanced">
                <Briefcase size={20} />
              </div>

              <div className="exp-card-advanced">
                <div className="exp-card-header-advanced">
                  <div className="exp-title-group-advanced">
                    <h3 className="role-title-advanced">{exp.role}</h3>
                    <div className="company-info-advanced">
                      <span>{exp.company}</span>
                      <div className="location-advanced">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="date-badge-advanced">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <div className="exp-card-body-advanced">
                  <ul className="exp-points-advanced">
                    {exp.points?.map((point, idx) => (
                      <li key={idx}>
                        <ChevronRight size={16} className="bullet-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <div className="exp-tech-stack-side">
                      <span className="tech-label-advanced">Technical Stack</span>
                      <div className="exp-tech-list-advanced">
                        {exp.tech.map((t, idx) => (
                          <span key={idx} className="tech-pill-advanced">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
