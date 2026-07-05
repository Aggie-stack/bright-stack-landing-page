export default function Services() {
  const services = [
    {
      code: "LP",
      title: "Landing Pages",
      description: "High-converting landing pages for startups, products, and campaigns.",
    },
    {
      code: "BW",
      title: "Business Websites",
      description: "Professional websites for brands, salons, shops, and companies.",
    },
    {
      code: "FS",
      title: "Full-Stack Web Apps",
      description: "Custom web applications with React, Flask, and secure backend APIs.",
    },
    {
      code: "EC",
      title: "E-commerce Stores",
      description: "Online stores with payment integration, product catalogs, and smooth UX.",
    },
    {
      code: "PF",
      title: "Portfolio Websites",
      description: "Showcase your work professionally with modern, responsive designs.",
    },
    {
      code: "WM",
      title: "Website Maintenance",
      description: "Ongoing updates, backups, and optimizations for your existing website.",
    },
  ];

  return (
    <section id="services" className="services-page">
      <p className="eyebrow center">What I offer</p>
      <h2>Services built around your goals</h2>
      <p className="services-intro">
        A focused set of web development services to help your business grow online.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <div key={service.code} className="service-card">
            <span className="service-badge">{service.code}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}