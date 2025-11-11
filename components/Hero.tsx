import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/profile.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Henry Mccou Headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Henry 👋</h1>
        <p>
          I design and develop modern web solutions  from elegant business websites to
           dynamic web applications helping brands grow and connect with their audience online.
          </p>

        <div className="social-icons">
          <a
            href="https://twitter.com/henrymccou"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/henrymccou"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/henrymccou/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

