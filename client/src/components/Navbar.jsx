export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#hero" className="logo">
          <img src="/logo.png" alt="Bright Stack Technologies" className="logo-img" />
          <span>Bright Stack Landing Page</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </nav>
      </div>
    </header>
  );
}