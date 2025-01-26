import { FaGithub, FaGlobe, FaEnvelope, FaLinkedin, FaTrophy } from 'react-icons/fa';
import HorizontalPills from '../components/horizontalPills';

const sections = [
    {
      title: "Details",
      subsections: [
        {
          pos: 0,
          title: "Liam Murphy",
          body: "Software Engineer",
          model: "/models/computer_v2.glb",
          offset: [0.0, 0.0, 0.0],
          shift: 0.0,
          scale: 2,
          rotation: 2.3,
          detailBody: <>
          <p>
            Hello, I'm Liam Murphy and welcome to my website! Each section represents details about me, my experiences, or my projects - please explore!
          </p>
          <h3>How to Navigate</h3>
          <p>
            Use the arrows and dots at the bottom of the page to move between sections. On each section you can view more details by clicking anywhere on screen, taking you to information like this. To return to the section (and begin exploring) click the down arrow below!</p>
          </>
        },
        {
          pos: 0,
          title: "About Me",
          body: "The man behind the machine.",
          model: "/models/earth.glb",
          offset: [0.0, 0.5, 0.0],
          shift: 0.0,
          scale: 0.18,
          rotation: 0.4,
          detailBody: <>
          <p>
            I am me.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/liammurphy04/" target="_blank" style={{color: "inherit"}}>
              <FaLinkedin/>
              <p>LinkedIn</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "Education",
          body: "MSci Computing Science",
          model: "/models/book.glb",
          offset: [0,0.1,0],
          shift: 0.4,
          scale: 1.5,
          rotation: 1.5,
          detailBody: <>
          <p>
            I am me.
          </p>
          <h3>Awards</h3>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display:"flex", gap: "8px"}}>
              <FaTrophy/>
              <p>JP Morgan Class Prize in Level 2 Computing Science (23/24)</p>
            </div>
            <p style={{fontSize:"14px"}}>~ Top of Cohort for Computing 2nd Year University of Glasgow ~</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display:"flex", gap: "8px"}}>
              <FaTrophy/>
              <p>Class Prize in Level 1 Computing Science (22/23)</p>
            </div>
            <p style={{fontSize:"14px"}}>~ Top of Cohort for Computing 1st Year University of Glasgow ~</p>
          </div>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display:"flex", gap: "8px"}}>
              <FaTrophy/>
              <p>Lorimer Bursary for Level 1 Mathematics (22/23)</p>
            </div>
            <p style={{fontSize:"14px"}}>~ Top of Cohort for Mathematics 1st Year University of Glasgow ~</p>
          </div>
          </>
        },
        {
          pos: 0,
          title: "Contact Me",
          body: "If you need to get in touch.",
          model: "/models/phone.glb",
          offset: [0.3, 0.7, 0.1],
          shift: 0.0,
          scale: 0.6,
          rotation: 0.6,
          detailBody: <>
          <p>
            Please feel free to reach out!
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="mailto:liam7murphy@gmail.com" target="_blank" style={{color: "inherit"}}>
              <FaEnvelope/>
              <p>Email</p>
            </a>
            <a href="https://www.linkedin.com/in/liammurphy04/" target="_blank" style={{color: "inherit"}}>
              <FaLinkedin/>
              <p>LinkedIn</p>
            </a>
          </div>
          </>
        },
      ]
    },
    {
      title: "Experience",
      subsections: [
        {
          pos: 0,
          title: "JP Morgan",
          body: "Software Engineering Intern",
          model: "/models/letter_box.glb",
          offset: [-0.25, 0.0, -0.1],
          shift: 0.125,
          scale: 5,
          rotation: Math.PI / 4,
          detailBody: <>
          <p>
            <b>Created:</b> January 2025
          </p>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/portfolio-website" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "UGRacing",
          body: "Perception Software Engineer",
          model: "/models/orange_traffic_cone.glb",
          offset: [0.0, 0.0, 0.0],
          shift: 0.0,
          scale: 0.004,
          rotation: Math.PI / 4,
          detailBody: <>
          <p>
            <b>Created:</b> January 2025
          </p>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/portfolio-website" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "Voiceover Interpreting",
          body: "Software Engineer",
          model: "/models/headphones.glb",
          offset: [0.0, 0.7, 0.0],
          shift: -0.7,
          scale: 0.3,
          rotation: Math.PI / 4,
          detailBody: <>
          <p>
            <b>Created:</b> January 2025
          </p>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/portfolio-website" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "GreenFox Energy",
          body: "Business Analyst",
          model: "/models/house.glb",
          offset: [0.0, 0.0, 0.0],
          shift: 0.0,
          scale: 0.3,
          rotation: -Math.PI/4,
          detailBody: <>
          <p>
            <b>Created:</b> January 2025
          </p>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/portfolio-website" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "The Entertainer",
          body: "Software Engineering Intern",
          model: "/models/toy.glb",
          offset: [0.0, 0.3, -0.3],
          shift: 0.0,
          scale: 0.003,
          rotation: Math.PI/4,
          detailBody: <>
          <p>
            <b>Created:</b> January 2025
          </p>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/portfolio-website" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "GU Tech Society",
          body: "Board Member and Welfare Officer",
          model: "/models/cube.glb",
          offset: [0.0, 0.15, 0.0],
          shift: -0.3,
          scale: 0.15,
          rotation: Math.PI/4,
          detailBody: <>
          <p>
            <b>Created:</b> January 2025
          </p>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/portfolio-website" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
      ]
    },
    {
      title: "Projects",
      subsections: [
        {
          pos: 0,
          title: "Portfolio Website",
          body: "The Website you're Currently On!",
          model: "/models/pin.glb",
          offset: [0.35, 0.7, 0.2],
          shift: -0.4,
          scale: 0.3,
          rotation: -Math.PI/4,
          detailBody: <>
          <p>
            <b>Created:</b> January 2025
          </p>
          <HorizontalPills headings={["React", "Three.js", "TypeScript"]}/>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/portfolio-website" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "F1iS Website",
          body: "Freelance Web Developer",
          model: "/models/car.glb",
          offset: [-0.15, 0.0, 0.0],
          shift: 0.2,
          scale: 0.4,
          rotation: Math.PI/4,
          detailBody: <>
          <p>
            <b>Created:</b> Summer 2024
          </p>
          <HorizontalPills headings={["React", "Next.js", "Three.js", "TypeScript", "Firestore"]}/>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://www.vegaracingf1is.com" target="_blank" style={{color: "inherit"}}>
              <FaGlobe/>
              <p>Website</p>
            </a>
            <a href="https://github.com/LMurphy04/vegaracingf1" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
        {
          pos: 0,
          title: "DSA Visual",
          body: "Passion Project",
          model: "/models/eye.glb",
          offset: [0.0, 0.7, -0.25],
          shift: 0.2,
          scale: 0.006,
          rotation: Math.PI/4,
          detailTitle: "Liam Murphy",
          detailBody: <>
          <p>
            <b>Created:</b> August 2024
          </p>
          <HorizontalPills headings={["Python", "PyGame"]}/>
          <p>
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the creative 3D approach shown here.
          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: "16px"
            }}
          >
            <a href="https://github.com/LMurphy04/dsa-visualiser" target="_blank" style={{color: "inherit"}}>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </div>
          </>
        },
      ]
    },
  ]

export default sections;