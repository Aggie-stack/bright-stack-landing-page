export default function Contact() {
  return (
    <main id="contact" className="contact">
      <p className="eyebrow center">Let's work together</p>
      <h2>Contact me</h2>
      <p className="contact-sub">
        Have a project in mind? Reach out directly — I usually reply within 24 hours.
      </p>

      <div className="contact-info">
        <a className="contact-card" href="mailto:rukwaroagatha7@gmail.com">
          <span className="contact-icon">✉</span>
          <span>
            <strong>Email</strong>
            <span>rukwaroagatha7@gmail.com</span>
          </span>
        </a>

        <a className="contact-card" href="tel:+254701592594">
          <span className="contact-icon">☎</span>
          <span>
            <strong>Phone</strong>
            <span>+254 701 592 594</span>
          </span>
        </a>
      </div>
    </main>
  );
}