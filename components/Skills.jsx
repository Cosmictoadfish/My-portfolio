export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "PHP", "MySQL",
    "Bootstrap", "Next.js", "Tailwind CSS", "Git", "Linux"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className="fa-solid fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
