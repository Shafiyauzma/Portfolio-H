import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CLOUD-SYNCHRONIZED ACHIEVEMENT DATA
const certifications = [
  { 
    title: 'Introduction to Artificial Intelligence', 
    issuer: 'LinkedIn Learning', 
    image: 'https://lh3.googleusercontent.com/d/1EGPOW46hJ7Tvy-49D0xtqKUy78BjAJCd' 
  },
  { 
    title: 'Prompt Design in Vertex AI', 
    issuer: 'Google Cloud', 
    image: 'https://lh3.googleusercontent.com/d/1NF24H1nqd6rlhTR0ajI4k_6iw8uIR45i' 
  },
  { 
    title: 'Build intelligent agents with ADK', 
    issuer: 'Google Cloud', 
    image: 'https://lh3.googleusercontent.com/d/1yNzHALK8OjeivaJJakIP3bZ9StKFGZ7w' 
  },
  { 
    title: 'Use Machine Learning APIs on Google Cloud', 
    issuer: 'Google Cloud', 
    image: 'https://lh3.googleusercontent.com/d/1KmXZFssd6uR_vJYdMIFqdrXi05GqP92p' 
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="certifications-luxe-section">
      <div className="container">
        <motion.div 
          className="section-header-ref"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '50px', textAlign: 'center' }}
        >
          <span className="header-badge">Achievements...</span>
          <h2 className="section-title-luxe">Professional Certifications</h2>
        </motion.div>

        <div className="cert-gallery-row">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="cert-slate-luxe"
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cert-luxe-inner">
                <div className="cert-image-stage">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="cert-img-main"
                    loading="lazy"
                  />
                </div>

                <div className="cert-info-luxe">
                  <h3 className="cert-title-luxe">{cert.title}</h3>
                  <p className="cert-issuer-luxe">{cert.issuer}</p>
                  
                  <div className="cert-view-link">
                    View Certificate 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Seamless Exhibition Lightbox ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ cubicBezier: [0.16, 1, 0.3, 1], duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close Gallery"
              >
                ✕
              </button>
              
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="cert-modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
