import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ohshoot.png";
import projImg2 from "../assets/img/whats-my-jam.png";
import projImg3 from "../assets/img/weather-dashboard.png";
import projImg4 from "../assets/img/code-quiz.png";
import projImg5 from "../assets/img/work-day.png";
import projImg6 from "../assets/img/First-Portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Oh-Shoot",
      description: "A Space invaders type game with a dynamic chat room!",
      link: "https://ohshoot.herokuapp.com/",
      imgUrl: projImg1,
    },
    {
      title: "Whats My Jam",
      description: "Music Radio station api search",
      link: "https://cannibalclarence.github.io/Whats-My-Jam/",
      imgUrl: projImg2,
    },
    {
      title: "Weather Dashboard",
      description: "Application to find what the weather is like, anywhere you want!",
      link: "https://cannibalclarence.github.io/weather-dashboard/",
      imgUrl: projImg3,
    },
    {
      title: "Code Quiz",
      description: "A Coding Quiz exercise",
      link: "https://cannibalclarence.github.io/Code-quiz/",
      imgUrl: projImg4,
    },
    {
      title: "Work Day Scheduler",
      description: "Manage your schedule with this easy to us application.",
      link: "https://cannibalclarence.github.io/challenge-5/",
      imgUrl: projImg5,
    },
    {
      title: "My First Portfolio",
      description: "Look How Far I have come.",
      link: "https://cannibalclarence.github.io/challenge-2-my-portfolio/",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <p>Born and raised in Southern California, commercial electrician of 6 years, with a certficate of web development from Uc Berkely exstention. "almost". A great eye for design and many skills in full stack Web Development. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Band</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About Me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}