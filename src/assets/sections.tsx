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
          <p><b>Traditional:</b> Use the arrows and dots at the bottom of the screen to move between sections. To view more section details click anywhere on screen.</p>
          <p><b>Arrow Keys:</b> Use the left and right arrow keys to move between sections. To view more section details use the up arrow, and return with the down arrow.</p>
          <p><b>Mobile:</b> Swipe left and right to move between sections. To view more section details click anywhere on screen.</p>
          </>
        },
        {
          pos: 0,
          title: "About Me",
          body: "The muppet behind the screen",
          model: "/models/earth.glb",
          offset: [0.0, 0.5, 0.0],
          shift: 0.0,
          scale: 0.18,
          rotation: 0.4,
          detailBody: <>
          <p>
          I’m an ambitious and driven Computing Science student, working hard to establish a track record of academic excellence and high value professional experiences. I’m continually looking for new opportunities to learn - whether through studying theory or engaging with new experiences. None of this is a chore - I love what I do.
          <br/><br/>In my spare time I’m a swimmer, socialiser, enthusiastic (albeit inconsistent) chef, and a Mario Kart addict.
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
          I’m in my 3rd year at the University of Glasgow, studying for an Integrated Masters degree in Computer Science. Over the last three years I’ve explored a range of computing and mathematics subjects, with some of my favourites being: Algorithmics, Data Fundamentals, Text as Data, Object-Oriented Programming, Linear Algebra, and Discrete Mathematics.
          </p>
          </>
        },
        {
          pos: 0,
          title: "Awards",
          body: "Honours & Achievments",
          model: "/models/trophy_podium.glb",
          offset: [0.3,-0.35,0],
          shift: 0.05,
          scale: 1.0,
          rotation: 0,
          detailBody: <>
          <h3>Industry</h3>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display:"flex", gap: "8px"}}>
              <FaTrophy/>
              <p>UK Software Engineering Undergraduate of the Year (2025)</p>
            </div>
            <p style={{fontSize:"14px"}}>~ TargetJobs UK and SkyScanner ~</p>
          </div>
          <h3>Education</h3>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display:"flex", gap: "8px"}}>
              <FaTrophy/>
              <p>Honours Class Prize in Level 3 Computing Science (24/25)</p>
            </div>
            <p style={{fontSize:"14px"}}>~ Top of Cohort for Computing 3rd Year University of Glasgow ~</p>
          </div>
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
          <h3>Hackathon</h3>
          <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display:"flex", gap: "8px"}}>
              <FaTrophy/>
              <p>DYHTG JP Morgan Hackathon Winner (2024)</p>
            </div>
            <p style={{fontSize:"14px"}}>~ Winner of the DYHTG JP Morgan <a href="https://github.com/VaradK62442/simplegame" target="_blank" style={{color: "inherit"}}>Simple Game</a> Challenge ~</p>
          </div>
          </>
        },
        {
          pos: 0,
          title: "Contact Me",
          body: "If you need to get in touch",
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
            June 2025 – August 2025
          </p>
          <p>
            In summer 2025 I will be interning as a software engineer for JP Morgan in their Glasgow office. I’m thrilled to get the chance to gain further experience in industry, particularly with a company that's a global leader in its field with strong ties to University of Glasgow and international prominence in fintech.
          </p>
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
            October 2024 – Present
          </p>
          <HorizontalPills headings={["Python", "PyTorch"]}/>
          <p>
          UGRacing is the University of Glasgow’s Formula Student Team, in which I am a perception software engineer for the Driverless Vehicle division. As part of the perception team I help ensure that the autonomous vehicle knows where it is on the track at all times, manipulating data from a camera and LiDAR to enable the rest of the drive system to perform as required.
          <br/><br/>My current project is researching and developing a machine learning model to process point cloud LiDAR data and accurately detect and localize cones – alongside writing a research paper.
          </p>
          </>
        },
        {
          pos: 0,
          title: "Voiceover Interpreting",
          body: "Full Stack Web Developer",
          model: "/models/headphones.glb",
          offset: [0.0, 0.7, 0.0],
          shift: -0.7,
          scale: 0.3,
          rotation: Math.PI / 4,
          detailBody: <>
          <p>
          September 2024 – March 2025
          </p>
          <HorizontalPills headings={["Python", "Django Rest Framework", "React", "TypeScript"]}/>
          <p>
          I am part of a seven-person software development team at the University of Glasgow, working on a booking and billing system for Voiceover Interpreting. The team follows an agile methodology, conducting frequent requirements gathering and refinement sessions with our client to ensure alignment with their needs. Our development process includes a continuous integration pipeline and integration testing to maintain stability and prevent regressions as we iterate on the system.
          </p>
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
          August 2024 – January 2025
          </p>
          <HorizontalPills headings={["HubSpot"]}/>
          <p>
          GreenFox Energy is a fast growing & innovative solar energy business. At GreenFox, I optimized and streamlined business processes through website development and automated CRM workflows, enhancing task efficiency, customer conversion rates, and retention. I also identified system inefficiencies and faults, designing and deploying effective solutions to improve overall performance and scalability.
          </p>
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
          June 2024
          </p>
          <HorizontalPills headings={["JavaScript", "Power BI", "Dynamic Yield"]}/>
          <p>
          The Entertainer is Britain's leading toy retailer & developer of toys for children. During my software engineering internship at The Entertainer, I enhanced website engagement analysis by developing a Power BI dashboard using the GA4 API, enabling clear data visualization and comparison. I also leveraged Dynamic Yield and JavaScript to implement and analyze a social proofing A/B test, which increased revenue by 3% and was successfully deployed live. Additionally, I streamlined product price analysis by creating a Python web-scraping script, improving efficiency in data collection and comparison.
          </p>
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
          April 2023 – December 2023
          </p>
          <p>
          As a Board Member of the Glasgow University Tech Society, I became the society’s first Welfare Officer - establishing welfare principles, creating a complaints procedure, and collaborating with the Glasgow SRC to shape the role’s impact. I also led social media and marketing efforts, achieving 3x follower growth through targeted event promotion and improved content strategy. Additionally, I played a key role in organizing the university’s flagship hackathons, managing event planning and sponsor collaboration to ensure their success.
          </p>
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
            This website was created to showcase my development as a software engineer, giving others an insight into my work and projects. I didn't want to create "just another portfolio website", hence the 3D approach shown here.
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
            <b>Created:</b> July 2024 – September 2024
          </p>
          <HorizontalPills headings={["React", "Next.js", "Three.js", "TypeScript", "Firestore"]}/>
          <p>
          Developed a high-impact, user-friendly website for VEGA Racing (the 3-time Scottish Champion F1 in Schools team) to showcase their team, leveraging Next.js, React, and TypeScript to create responsive and interactive content. Additionally, integrated the Firestore API to build a blog with an admin interface secured behind authentication, enhancing content management and accessibility.
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
          Developed an interactive visualization tool to aid learning of essential data structures and algorithms, including sorting algorithms, graph traversals, hashmaps, binary search, and red-black trees.
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
