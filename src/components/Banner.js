import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Mobile Developer", "Web Designer", "UI/UX Designer", "Data Analyst", "Tech Support"];
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };

    let ticker = setInterval(tick, delta);

    return () => { clearInterval(ticker); };
  }, [delta, isDeleting, loopNum, text, toRotate]); // Include all variables used inside useEffect

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
    <span className="tagline">Welcome to my Portfolio</span>
    <h1>Hi! I'm <span className="victor-highlight">Victor</span>, <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
    <p>Passionate and <span className="purpleletters-highlight"> multilingual</span> technology professional. My career spans roles as diverse as <span className="purpleletters-highlight"> Application</span> Development Engineer, <span className="purpleletters-highlight"> DevOps</span> Engineer, Junior <span className="purpleletters-highlight"> Web </span> Developer, and Systems <span className="purpleletters-highlight"> Architect </span>, where I've launched successful 
     cross-platform <span className="purpleletters-highlight"> apps</span>, enhanced IT infrastructure, and improved app performance.</p>
    <p>With a degree in Computer Science & Systems Engineering, I bring a strong foundation and a global perspective to my work. My journey in tech is driven by a passion for <span className="purpleletters-highlight">growth</span>, <span className="purpleletters-highlight">efficiency</span>, and <span className="purpleletters-highlight">innovative solutions</span>. I'm adept at embracing new technologies, solving complex problems, and delivering user-centric solutions.</p>
    <button onClick={() => window.open('https://www.linkedin.com/in/vcuerdo/', '_blank')}>Let’s Connect <ArrowRightCircle size={25} /></button>
</div>
}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
