import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function About() {
  const { summary } = portfolioData;

  return (
    <section id="about" className="about-luxury section">
      <div className="container about-container-luxury">

        {/* Soft Ambient Visuals */}
        <div className="luxury-glow-1" />
        <div className="luxury-glow-2" />

        <div className="about-content-luxury">
          <motion.div
            className="section-header-ref"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="header-badge">The Story</span>
            <h2 className="section-title-luxe">About <em>Me.</em></h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="narrative-wrapper-luxury">
            <p className="narrative-p-luxury">
              <strong>Software Engineer</strong> with hands-on experience in <strong>full-stack development</strong>,
              <strong> Artificial Intelligence</strong>, and <strong>Machine Learning</strong>,
              building scalable, high-performance applications and AI-driven systems. Skilled in developing and deploying
              <strong> cloud-native solutions</strong>, including Generative AI, NLP, and intelligent automation.
              Experienced in end-to-end development, API design, and <strong>integrating machine learning models</strong> to enhance user experience and optimize workflows. Strong foundation in <strong>data-driven problem-solving</strong> and
              <strong> system design</strong>.
            </p>

            <div className="luxury-tech-list">
              <span className="tech-tag-luxe">Generative AI</span>
              <span className="tech-tag-luxe">Full-Stack Development</span>
              <span className="tech-tag-luxe">Cloud Native Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







