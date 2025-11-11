export default function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Henry Ofon</p>
        <div className="social-icons">
          <a
            href="https://x.com/stil_henry?t=nSQULgeenTWX1lNiorN8tA&s=09"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Cosmictoadfish"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ofon-henry-1165b8315?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

