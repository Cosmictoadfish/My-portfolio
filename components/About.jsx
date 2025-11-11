import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
  I’m a passionate <strong>Software Developer</strong> based in <strong>Cameroon</strong> with a strong focus on crafting 
  clean, scalable, and user-centered digital experiences. My journey started with a deep curiosity 
  about how technology shapes everyday life, which led me to earn a <strong>Degree in Software Engineering</strong>.
</p>

<p>
  I specialize in building <strong>modern, responsive web applications</strong> using technologies like 
  <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. 
  I also enjoy working with <strong>PHP</strong> and <strong>MySQL</strong> for backend logic and data-driven systems.
</p>

<p>
  I’ve worked on projects such as a <strong>Smart House Rental Management System</strong> and a 
  <strong>Car Rental Management Platform</strong>, which helped me gain hands-on experience 
  in user authentication, CRUD operations, and real-world deployment using <strong>OpenStack</strong>.
</p>

<p>
  Beyond coding, I’m driven by problem-solving and debugging I find joy in untangling complex 
  issues and optimizing performance for smooth user experiences. I’m constantly learning and 
  exploring new technologies that push the boundaries of what’s possible on the web.
</p>

<p>
  My goal is to build intuitive, accessible, and performance-driven products that create 
  real-world impact. I’m currently expanding my expertise in <strong>Next.js 14</strong>, 
  <strong>Atomic Design principles</strong>, and <strong>Storybook</strong> for UI documentation, 
  while continuously refining my design sense to deliver modern, polished interfaces.
</p>

        </div>
        <div className="about-img">
          <Image
            src="/about.jpeg" 
            className="profile-img"
            width={300}
            height={500}
            alt="Henry Mccou About"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

