import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { email, phone, linkedin, github } = portfolioData;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-luxe">
      <div className="container footer-grid">
        {/* Column 1: Identity */}
        <div className="footer-col-identity">
          <div className="footer-brand-luxe">
            Harshitha Chandaka
          </div>
          <p className="footer-bio">
            Passionate Software Developer & AI/ML Enthusiast dedicated to building innovative 
            solutions and stunning digital experiences.
          </p>
          <div className="footer-socials">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="footer-social-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub" className="footer-social-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="footer-col-nav">
          <h4 className="footer-col-title">EXPLORE</h4>
          <ul className="footer-nav-list">
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills & Tools</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="footer-col-contact">
          <h4 className="footer-col-title">GET IN TOUCH</h4>
          <ul className="footer-contact-list">
            <li><a href={`mailto:${email}`} className="footer-contact-item">Email: {email}</a></li>
            <li><span className="footer-contact-item">Location: Andhra Pradesh, India</span></li>
            <li><a href={`tel:${phone}`} className="footer-contact-item">Phone: +91 {phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <span className="footer-copyright">
            © {currentYear} Harshitha Chandaka. All rights reserved.
          </span>
          <a href="#home" className="footer-back-top">
            Back to Top
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
