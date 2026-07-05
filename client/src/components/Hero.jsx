export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Web development studio</p>
          <h1>
            Websites that help small businesses <span className="highlight">grow online</span>
          </h1>
          <p className="hero-sub">
            I design and build fast, modern, responsive sites — from landing
            pages to full-stack web apps — so you can focus on running your
            business.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollTo("services")} className="btn primary-btn">
              View services
            </button>
            <button onClick={() => scrollTo("contact")} className="btn secondary-btn">
              Get in touch
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="stack-layer layer-3"><span>DEPLOY</span></div>
          <div className="stack-layer layer-2"><span>BACKEND</span></div>
          <div className="stack-layer layer-1"><span>FRONTEND</span></div>
        </div>
      </div>
    </section>
  );
}