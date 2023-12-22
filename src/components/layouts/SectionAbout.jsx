import { Link } from "react-router-dom"
import NavLink from "../elements/NavLink";

const SectionAbout = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="about">
      <h1 className="mb-6">Hi👋 i’m Dimas Rizky. Web Frontend and UI/UX Designer</h1>
      <div className="flex flex-col gap-3">
        <p>I am Dimas Rizky, an active computer engineering student with skills in web frontend development and UI/UX design. <NavLink to="#" id='awards'>I've won a few web design competitions</NavLink>, and I'm still learning and growing every day</p>
        <p>My passion is creating beautiful design solutions that can solve user problems with a good user experience. Proficient in modern web technologies, including HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React.js</p> 
        <p>I am currently serving as a <NavLink to="#" id="experience">Computer Lab Assistant</NavLink>, contributing to the academic environment and providing practical assistance to fellow student</p> 
        <p>Open to new challenges and collaborations, I am eager to connect with fellow enthusiasts, developers, and potential collaborators. <NavLink to="#" id='projects'>Exploring my projects</NavLink>, you'll find a diverse range of projects showcasing my dedication to creativity</p>
        <p>I am now seeking exciting opportunities to apply my skills and contribute to innovative projects. Let's explore potential collaborations and embark on a journey of creativity and innovation together!</p>
      </div>
    </div>
  )
}

export default SectionAbout