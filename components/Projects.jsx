export default function Projects() {
  const projects = [
    {
      name: "Smart House Rental System",
      description: "A web app for managing rental listings, tenants, and landlord interactions.",
      link: "https://github.com/Cosmictoadfish/smart-house-rental-system",
    },
    {
      name: "Car Rental System",
      description: "A car booking system with admin management and real-time updates.",
      link: "https://github.com/Cosmictoadfish/car-rental-system",
    },
    {
      name: "Developer Portfolio",
      description: "My personal portfolio built with Next.js and Tailwind CSS.",
      link: "https://github.com/Cosmictoadfish/my-portfolio",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index}>
            <i className="fa-regular fa-folder"></i>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

