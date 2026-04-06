import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { email, phone, linkedin, github } = portfolioData;

  return (
    <section id="contact" className="contact-exhibition-section">
      <div className="container contact-luxe-container">
        <div className="contact-header-wrap">
          <div className="header-badge">Connect</div>
          <h2 className="section-title-luxe">Let's Work <em>Together.</em></h2>
          <p className="contact-desc-main">Drop me a line anytime or explore my professional profiles</p>
        </div>

        <div className="contact-cards-grid">
          {/* Card 1: Email */}
          <div className="contact-luxe-card">
            <div className="contact-card-icon"><Mail size={24} /></div>
            <h4 className="contact-card-title">Email</h4>
            <p className="contact-card-sub">Direct inquiry</p>
            <a href={`mailto:${email}`} className="contact-card-val" style={{ whiteSpace: 'nowrap', fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)', wordBreak: 'normal', letterSpacing: 0 }}>
              {email}
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="contact-luxe-card">
            <div className="contact-card-icon"><Phone size={24} /></div>
            <h4 className="contact-card-title">Phone</h4>
            <p className="contact-card-sub">Available for calls</p>
            <span className="contact-card-val">+91 {phone}</span>
          </div>

          {/* Card 3: Location */}
          <div className="contact-luxe-card">
            <div className="contact-card-icon"><MapPin size={24} /></div>
            <h4 className="contact-card-title">Location</h4>
            <p className="contact-card-sub">Global reach</p>
            <span className="contact-card-val">Andhra Pradesh, India</span>
          </div>

          {/* Card 4: Professional Profiles */}
          <div className="contact-luxe-card">
            <div className="contact-card-icon">🌐</div>
            <h4 className="contact-card-title">Social</h4>
            <p className="contact-card-sub">Follow my journey</p>
            <div className="contact-card-socials">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-pill">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub" className="social-pill">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
