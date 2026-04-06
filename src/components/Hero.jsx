import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, title, summary, linkedin } = portfolioData;

  return (
    <section id="home" className="hero section">
      <div className="ambient-blob" />
      
      <div className="container hero-container">
        {/* Profile Image (Oval) */}
        <div className="hero-image-side">
          <div className="profile-frame-oval">
            <img 
              src="/images/profile.jpg" 
              alt={name} 
              className="profile-img-oval"
            />
            <div className="profile-glow-oval" />
          </div>
        </div>

        {/* Text Content */}
        <div className="hero-text-side">
          <div className="hero-tagline">
            <span className="violet-dot" /> {title}
          </div>
          
          <h1 className="hero-name-large">
            {name.split(' ')[0]} <br />
            <span className="text-gradient-violet">{name.split(' ')[1]}</span>
          </h1>
          
          <p className="hero-about-text">
            Software Engineer with hands-on experience in full-stack development, Artificial Intelligence, and Machine Learning, building scalable, high-performance applications and AI-driven systems. Skilled in developing and deployments.
          </p>
          
          <div className="hero-actions-row">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-violet-primary rounded-full">
              LinkedIn Profile
            </a>
            <a href="#experience" className="btn btn-outline-violet rounded-full">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="indicator-mouse" />
        <span className="indicator-text">Scroll to explore</span>
      </div>
    </section>
  );
}

