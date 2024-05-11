import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import VerticalTimeline from './components/VerticalTimeline';
import VerticalTimelineElement from './components/VerticalTimelineElement';
import { IconBrandFlutter } from '@tabler/icons-react';
import { IconHeadset } from '@tabler/icons-react';
import {IconCode} from  '@tabler/icons-react';
import {IconDeviceDesktopCog} from  '@tabler/icons-react';
import {IconWorldCog} from  '@tabler/icons-react';
import IconMarquee from './components/IconMarquee';
import {IconDeviceMobile} from  '@tabler/icons-react';
import {IconDeviceLaptop} from  '@tabler/icons-react';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <VerticalTimeline lineColor="#ddd">
       {/* Original example entry */}
       <VerticalTimelineElement
          date="2024-Present"
          icon={<IconDeviceLaptop/>}
          iconStyle={{ background: 'rgb(103, 58, 183)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Copilot Ambassador & M365 Admin Support | Microsoft</h3>
          <h4 className="vertical-timeline-element-subtitle">Microsoft Active</h4>
          <p className = "vertical-timeline-element-title">
          ●Support engineer & systems expert in contacting customers to understand reasons behind purchasing Copilot
          ●Identifying questions the customer might have related to Copilot usage, integrations, migrations and setup
          ●Educate customers on the use of Copilot in different M365 products and services and provide guidance on best practices for improving productivity and collaboration
●Collaborate with other technical support engineers and cross-functional partners to resolve complex technical issues
          </p>
        </VerticalTimelineElement>
         {/* Original example entry */}
         <VerticalTimelineElement
          date="2024-Present"
          icon={<IconDeviceMobile/>}
          iconStyle={{ background: 'rgb(0, 150, 136)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Platform DevOps Support Associate</h3>
          <h4 className="vertical-timeline-element-subtitle">Velocity Global</h4>
          <p className = "vertical-timeline-element-title">
          As a Platform Support Associate at Velocity Global, I am responsible for ensuring the smooth operation of our global work platform and providing top-notch customer care to our clients. My role involves a blend of technical support and client engagement, making me a vital link between our technology and our clients' satisfaction.
          My primary focus is on delivering exceptional customer care, promptly addressing client inquiries, concerns, and technical issues. I proactively engage with clients to ensure they receive the support they need to optimize their experience with our platform.
          I specialize in troubleshooting issues related to our browser-based software application. This requires me to have a keen eye for detail and the ability to diagnose and resolve technical issues efficiently to minimize disruption to our clients' operations.
          I take a proactive approach to identify potential issues or areas of improvement within our global work platform. By closely monitoring platform performance and user feedback, I help anticipate and address issues before they escalate, ensuring the reliability and stability of our platform.

          </p>
        </VerticalTimelineElement>

        {/* Original example entry */}
        <VerticalTimelineElement
          date="2023-Present"
          icon={<IconDeviceMobile/>}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Cross-Platform Mobile Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Freelance Job</h4>
          <p className = "vertical-timeline-element-title">
          Focusing in the development and launch of cross-platform applications, utilizing
Flutter and Dart, and integrating Java, Kotlin, and Swift for solutions.
Excelling in dynamic scalability, responsive design, advanced state management, and
seamless monetization strategies.
          </p>
        </VerticalTimelineElement>
        
        {/* Additional mock experiences */}
        <VerticalTimelineElement
          date="2023"
          icon={<IconWorldCog/>}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Interpreter</h3>
          <h4 className="vertical-timeline-element-subtitle">Teleperformance</h4>
          <p className = "vertical-timeline-element-title">
          Provided real-time, continuous interpreting services for a diverse clientele
across the United States.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2022 - 2023"
          icon={<IconDeviceDesktopCog/>}
          iconStyle={{ background: 'rgb(103, 58, 183)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Tech Specialist</h3>
          <h4 className="vertical-timeline-element-subtitle">Interlatina Barranquilla Student Exchange</h4>
          <p className = "vertical-timeline-element-title">
          Played a pivotal role in spearheading
IT support initiatives, significantly reducing IT-related issues and enhancing overall
organizational efficiency through strategic problem-solving and maintenance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2020 - 2021"
          icon={<IconCode/>}
          iconStyle={{ background: 'rgb(0, 150, 136)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Web Developer & Tech Support Specialist</h3>
          <h4 className="vertical-timeline-element-subtitle">CR Consulting SAS</h4>
          <p className = "vertical-timeline-element-title">
          Led comprehensive web development initiatives and provided critical IT support, significantly
enhancing the company's digital infrastructure and operational efficiency.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2018"
          icon={<IconHeadset/>}
          iconStyle={{ background: 'rgb(255, 193, 7)', color: '#fff' }}>
          <h3 className="vertical-timeline-element-title">Third-Party Verification Bilingual Agent </h3>
          <h4 className="vertical-timeline-element-subtitle">Atlantic International BPO </h4>
          <p className = "vertical-timeline-element-title">
          Demonstrated proficiency in both English and Spanish, enabling effective
communication with a diverse client base across North America.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <Skills />
      <IconMarquee />

      
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
