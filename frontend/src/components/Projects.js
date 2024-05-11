import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

//*FITNESS CHALLENGE ASSETS *//
import HomePage from "../assets/projects_imgs/MobileApps/FitnessChallenge/HomePage.png";
import SignIn from "../assets/projects_imgs/MobileApps/FitnessChallenge/SignIn.png";
import Step1 from "../assets/projects_imgs/MobileApps/FitnessChallenge/Step1.png";
import Step5 from "../assets/projects_imgs/MobileApps/FitnessChallenge/Step5.png";
import SignUp from "../assets/projects_imgs/MobileApps/FitnessChallenge/SignUp.png";
import GenderChooser from "../assets/projects_imgs/MobileApps/FitnessChallenge/GenderChooser.png";
import FirebaseAuth from "../assets/projects_imgs/MobileApps/FitnessChallenge/FirebaseAuth.png";

import ProjectCardFit from "../assets/projects_imgs/MobileApps/FitnessChallenge/ProjectCardFit.svg";
////////////////////

//*UNITAPP ASSETS*//
import HomePage_Unit from "../assets/projects_imgs/MobileApps/UnitApp/HomePage_Unit.png";
import Arabic_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Arabic_UnitApp.png";
import Converter_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Converter_UnitApp.png";
import Distance_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Distance_UnitApp.png";
import DropDown_Unit from "../assets/projects_imgs/MobileApps/UnitApp/DropDown_UnitApp.png";
import Languages_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Languages_UnitApp.png";
import Light_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Light_UnitApp.png";
import Search_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Seach_UnitApp.png";
import Settings_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Settings_UnitApp.png";
import Share_Unit from "../assets/projects_imgs/MobileApps/UnitApp/Share_UnitApp.png";
import ProjectCardUN from "../assets/projects_imgs/MobileApps/UnitApp/ProjectCardUN.svg";
///////////////////

//* TRACKY ASSETS *//
import HomePage_Tracky from '../assets/projects_imgs/MobileApps/Tracky/HomePage_Tracky.png';
import Login_Tracky from '../assets/projects_imgs/MobileApps/Tracky/Login_Tracky.png';
import SignUp_Tracky from '../assets/projects_imgs/MobileApps/Tracky/SignUp_Tracky.png';
import Leaderboard_Tracky from '../assets/projects_imgs/MobileApps/Tracky/Leaderboard_Tracky.png';
import Map_Tracky from '../assets/projects_imgs/MobileApps/Tracky/Map_Tracky.png';
import Profile_Tracky from '../assets/projects_imgs/MobileApps/Tracky/Profile_Tracky.png';
import Tracky_Edit from '../assets/projects_imgs/MobileApps/Tracky/Tracky_Edit.png';
import User_Tracky from '../assets/projects_imgs/MobileApps/Tracky/User_Tracky.png';
import ProjectCardTR from '../assets/projects_imgs/MobileApps/Tracky/ProjectCardTR.svg';

/////////////////////

//* LUMINEX ASSETS */
import HomePage_Luminex from '../assets/projects_imgs/MobileApps/LuminexPro/HomePage_Luminex.png';
import Background_Luminex from '../assets/projects_imgs/MobileApps/LuminexPro/Background_Luminex.png';
import On_Luminex from '../assets/projects_imgs/MobileApps/LuminexPro/On_Luminex.png';
import PickColor_Luminex from '../assets/projects_imgs/MobileApps/LuminexPro/PickColor_Luminex.png';
import ProjectCardLU from '../assets/projects_imgs/MobileApps/LuminexPro/ProjectCardLU.svg';
////////////////////

//* iCARE ASSETS */
import HomePage_icare from "../assets/projects_imgs/MobileApps/iCare/HomePage_icare.png";
import Calendar_icare from "../assets/projects_imgs/MobileApps/iCare/Calendar_icare.png";
import FilledForm_icare from "../assets/projects_imgs/MobileApps/iCare/FilledForm_icare.png";
import Form_icare from "../assets/projects_imgs/MobileApps/iCare/Form_icare.png";
import LoadingMap_icare from "../assets/projects_imgs/MobileApps/iCare/LoadingMap_icare.jpg";
import LoadingScreen_icare from "../assets/projects_imgs/MobileApps/iCare/LoadingScreen_icare.jpg";
import Maps_icare from "../assets/projects_imgs/MobileApps/iCare/Maps_icare.jpg";
import News_icare from "../assets/projects_imgs/MobileApps/iCare/News_icare.png";
import Results_icare from "../assets/projects_imgs/MobileApps/iCare/Results_icare.jpg";
import Syntoms_icare from "../assets/projects_imgs/MobileApps/iCare/Syntoms_icare.png";
import ProjectCardIC from "../assets/projects_imgs/MobileApps/iCare/ProjectCardIC.svg";
///////////////////

//* TTXPLORER *//
import Loading_tt from "../assets/projects_imgs/MobileApps/TTXplorer/Loading_tt.jpg";
import Signup_tt from "../assets/projects_imgs/MobileApps/TTXplorer/Signup_tt.jpg";
import Signin_tt from "../assets/projects_imgs/MobileApps/TTXplorer/Signin_tt.jpg";
import Avatar_tt from "../assets/projects_imgs/MobileApps/TTXplorer/Avatar_tt.jpg";
import Avatar2_tt from "../assets/projects_imgs/MobileApps/TTXplorer/Avatar2_tt.jpg";
import Form_tt from "../assets/projects_imgs/MobileApps/TTXplorer/Form_tt.jpg";
import Map_tt from "../assets/projects_imgs/MobileApps/TTXplorer/Map_tt.jpg";
import ProjectCardTT from "../assets/projects_imgs/MobileApps/TTXplorer/ProjectCardTT.svg";
/////////////////
//* WEBSITE *//
import HomePage_crconsulting from "../assets/projects_imgs/WebDevelopment/HomePage_crconsulting.png";
import crconsulting from "../assets/projects_imgs/WebDevelopment/crconsulting.mp4";

import projectcardcr  from "../assets/projects_imgs/WebDevelopment/ProjectCardCR.svg";
import HomePage_agrocredit from "../assets/projects_imgs/WebDevelopment/HomePage_agrocredit.png";
import agrocredit from "../assets/projects_imgs/WebDevelopment/agrocredit.mp4";
import projectcard_agrocredit from "../assets/projects_imgs/WebDevelopment/ProjectCard_agrocredit.png";
import projectcardag from "../assets/projects_imgs/WebDevelopment/ProjectCardAg.svg";
import HomePage_portfolio from "../assets/projects_imgs/WebDevelopment/HomePage_portfolio.png";
import portfolio from "../assets/projects_imgs/WebDevelopment/portfolio.mp4";
import projectcard_portfolio from "../assets/projects_imgs/WebDevelopment/ProjectCard_portfolio.png";
///
//* UX/UI DESIGN *//
import ux1 from "../assets/projects_imgs/UXDesign/UX1/1.png";
import ux2 from "../assets/projects_imgs/UXDesign/UX1/2.png";
import ux3 from "../assets/projects_imgs/UXDesign/UX1/3.png";
import ux4 from "../assets/projects_imgs/UXDesign/UX1/4.png";
import ux5 from "../assets/projects_imgs/UXDesign/UX1/5.png";
import ux6 from "../assets/projects_imgs/UXDesign/UX1/6.png";
import ux7 from "../assets/projects_imgs/UXDesign/UX1/7.png";
import ProjectCardMIU from "../assets/projects_imgs/UXDesign/UX1/ProjectCardMIU.svg";



import ux8 from "../assets/projects_imgs/UXDesign/UX2/1.png";
import ux9 from "../assets/projects_imgs/UXDesign/UX2/2.png";
import ux10 from "../assets/projects_imgs/UXDesign/UX2/3.png";
import ux11 from "../assets/projects_imgs/UXDesign/UX2/4.png";
import ux12 from "../assets/projects_imgs/UXDesign/UX2/5.png";
import ux13 from "../assets/projects_imgs/UXDesign/UX2/6.png";
import ux14 from "../assets/projects_imgs/UXDesign/UX2/7.png";
import ProjectCardTRA from "../assets/projects_imgs/UXDesign/UX2/ProjectCardTRA.svg";

import ux16 from "../assets/projects_imgs/UXDesign/UX3/1.png";
import ux17 from "../assets/projects_imgs/UXDesign/UX3/2.png";
import ux18 from "../assets/projects_imgs/UXDesign/UX3/3.png";
import ux19 from "../assets/projects_imgs/UXDesign/UX3/4.png";
import ux20 from "../assets/projects_imgs/UXDesign/UX3/5.png";
import ux21 from "../assets/projects_imgs/UXDesign/UX3/6.png";
import ux22 from "../assets/projects_imgs/UXDesign/UX3/7.png";
import ux23 from "../assets/projects_imgs/UXDesign/UX3/8.png";
import ux24 from "../assets/projects_imgs/UXDesign/UX3/9.png";
import ux25 from "../assets/projects_imgs/UXDesign/UX3/10.png";
import ProjectCardTTX from "../assets/projects_imgs/UXDesign/UX3/ProjectCardTTX.svg";


import JumpgameImg from "../assets/projects_imgs/Game/Jumpgame_img.png";
import MazeImg from "../assets/projects_imgs/Game/Maze_img.png";
import JumpgameVid from "../assets/projects_imgs/Game/Jumpgame.mp4";
import MazeVid from "../assets/projects_imgs/Game/Mazegame.mp4";
import ProjectCardWA from "../assets/projects_imgs/Game/ProjectCardWA.svg";
import ProjectCardMA from  "../assets/projects_imgs/Game/ProjectCardMA.svg";
import weatherforecast_img from "../assets/projects_imgs/Data/weatherforecast_img.png";
import weatherforecast from "../assets/projects_imgs/Data/weatherforecast.mp4";
import ProjectCardWE from "../assets/projects_imgs/Data/ProjectCardWE.svg";
import movierecommendations_img from "../assets/projects_imgs/Data/movierecommendations_img.png";
import movierecommendations from "../assets/projects_imgs/Data/movierecommendations.mp4";
import ProjectCardMO from "../assets/projects_imgs/Data/ProjectCardMO.svg";
import pixeldetection from "../assets/projects_imgs/Data/pixeldetection.png";
import pixeldetectionVid from "../assets/projects_imgs/Data/pixel-detection-system-based-on-ai-training.mp4";
import pixeldetectionimg from "../assets/projects_imgs/Data/PixelDetectionImg.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState({});
  
  const categories = {
    "Mobile Apps": [
      {
        title: "iFitChallenge",
        description: "Daily Fitness Challenge for IOS & Android",
        imgUrl: ProjectCardFit,
        projectUrl: "https://github.com/VictorCuerdo/iFitChallenge/tree/master",
        images: [
          { type: 'image', url: HomePage},
          { type: 'image', url: SignIn},
          { type: 'image', url: Step1},
          { type: 'image', url: GenderChooser},
          { type: 'image', url: Step5},
          { type: 'image', url: SignUp},
          { type: 'image', url: FirebaseAuth},
        ],
       
        technologies: ['Flutter', 'Dart', 'Firebase', 'Lottie Animations', 'Business Logic Pattern', 'Android Studio']
      },
      {
        title: "UnitApp",
        description: "Unit Converter Tool App for IOS & Android",
        imgUrl: ProjectCardUN,
        projectUrl: "https://github.com/VictorCuerdo/UnitApp",
        images: [
          { type: 'image', url: HomePage_Unit},
          { type: 'image', url: Converter_Unit},
          { type: 'image', url: Distance_Unit},
          { type: 'image', url: DropDown_Unit},
          { type: 'image', url: Settings_Unit},
          { type: 'image', url: Languages_Unit},
          { type: 'image', url: Search_Unit},
          { type: 'image', url: Share_Unit},
          { type: 'image', url: Arabic_Unit},
          { type: 'image', url: Light_Unit},
        ],
        technologies: ['Flutter', 'Dart', 'GitHub', 'Firebase', 'Google Admob', 'Lottie Animations', 'Canva', 'Google PlayStore', 'Languages', 'Visual Studio'] 
      },
      {
        title: "iCare",
        description: "Vaccine Modelling App for IOS & Android",
        imgUrl: ProjectCardIC,
        projectUrl: "https://github.com/VictorCuerdo/icare",
        images: [
          { type: 'image', url: LoadingScreen_icare},
          { type: 'image', url: HomePage_icare},
          { type: 'image', url: Form_icare},
          { type: 'image', url: FilledForm_icare},
          { type: 'image', url: Calendar_icare},
          { type: 'image', url: Syntoms_icare},
          { type: 'image', url: LoadingMap_icare},
          { type: 'image', url: Maps_icare},
          { type: 'image', url: News_icare},
          { type: 'image', url: Results_icare},
        ],
       
        technologies: ['Flutter', 'Dart', 'GitHub', 'API', 'Lottie Animations', 'Canva', 'Google Maps', 'Visual Studio']
      },
      {
        title: "Tracky",
        description: "Map Tracker App for IOS & Android",
        imgUrl: ProjectCardTR,
        projectUrl: "https://github.com/llherrera/tracky/tree/victordev",
        images: [
          { type: 'image', url: Login_Tracky},
          { type: 'image', url: SignUp_Tracky},
          { type: 'image', url: Profile_Tracky},
          { type: 'image', url: User_Tracky},
          { type: 'image', url: HomePage_Tracky},
          { type: 'image', url: Leaderboard_Tracky},
          { type: 'image', url: Map_Tracky},
          { type: 'image', url: Tracky_Edit},
          
        ],
       
        technologies: ['Flutter', 'Dart', 'Firebase', 'Visual Studio', 'GitHub', 'Google Maps' ]
      }, {
        title: "TTExplorer",
        description: "ECO-Friendly Cultural App for IOS & Android",
       
        imgUrl: ProjectCardTT,
        projectUrl: "https://github.com/llherrera/TTXplorer/tree/victor-dev",
        images: [
          { type: 'image', url: Loading_tt},
          { type: 'image', url: Signup_tt},
          { type: 'image', url: Signin_tt},
          { type: 'image', url: Avatar2_tt},
          { type: 'image', url: Avatar_tt},
          { type: 'image', url: Form_tt},
          { type: 'image', url: Map_tt},
        ],
        technologies: ['Flutter', 'Dart', 'Firebase', 'Visual Studio', 'GitHub', 'Google Maps' , 'Figma']
      },
      {
        title: "LuminexPro",
        description: "Flashlight Tool w/ features for IOS & Android",
        imgUrl: ProjectCardLU,
        projectUrl: " https://github.com/VictorCuerdo/luminex",
       
        images: [
          { type: 'image', url: HomePage_Luminex},
          { type: 'image', url: On_Luminex},
          { type: 'image', url: Background_Luminex},
          { type: 'image', url: PickColor_Luminex},
        ],
        technologies: ['Flutter', 'Dart', 'GitHub', 'Visual Studio', 'Canva']
      }
    ],
    "Web Development": [
      {
        title: "CR Consulting SAS",
        description: "Telecom Consulting Company w/ hosting & DNS",
        imgUrl: projectcardcr,
        projectUrl: "https://www.crconsulting.com.co/",
        images: [
          { type: 'image', url: HomePage_crconsulting },
          { type: 'video', url: crconsulting },
          // Add more images or videos as needed
        ],
        technologies: ['Wordpress', 'Bluehost', 'GoDaddy']
      },
      {
        title: "Agrocredit",
        description: "Agriculture Credit-Fintech Landing Page",
        imgUrl: projectcardag,
        images: [
          { type: 'image', url: HomePage_agrocredit},
          { type: 'video', url: agrocredit },
          // Add more images or videos as needed
        ],
        technologies: ['Wix', 'Wordpress']
      }
      
    ],
    "UI/UX Design": [
      {
        title: "MiU",
        description: "Prototype of Local Delivery App",
        imgUrl: ProjectCardMIU,
        projectUrl: "https://www.figma.com/file/KLGnCe9iYJVe0cjPKwVcbZ/MiU-PrototipoGestion?type=design&node-id=0%3A1&mode=design&t=jtMKqXauIkA0kgCJ-1",
        images: [
          { type: 'image', url: ux1},
          { type: 'image', url: ux2},
          { type: 'image', url: ux3},
          { type: 'image', url: ux4},
          { type: 'image', url: ux5},
          { type: 'image', url: ux6},
          { type: 'image', url: ux7},
        ],
       
        technologies: ['Figma']
      },
      {
        title: "Tracky",
        description: "Prototype of Fitness Tracker App",
        imgUrl: ProjectCardTRA,
        projectUrl: "https://www.figma.com/file/stuT2Y1rLaeisUeG4XXX6C/Tracky?type=design&mode=design&t=jtMKqXauIkA0kgCJ-0",
        images: [
          { type: 'image', url: ux8},
          { type: 'image', url: ux9},
          { type: 'image', url: ux10},
          { type: 'image', url: ux11},
          { type: 'image', url: ux12},
          { type: 'image', url: ux13},
          { type: 'image', url: ux14},
        ],
       
        technologies: ['Figma']
      },
      {
        title: "TTxplorer",
        description: "Prototype of Eco App",
        imgUrl: ProjectCardTTX,
        projectUrl: "https://www.figma.com/file/J7fy8cNmKqqEN96yJUMqT0/TITIEXPLORER?type=design&mode=design&t=jtMKqXauIkA0kgCJ-0",
        images: [
          { type: 'image', url: ux16},
          { type: 'image', url: ux17},
          { type: 'image', url: ux18},
          { type: 'image', url: ux19},
          { type: 'image', url: ux20},
          { type: 'image', url: ux21},
          { type: 'image', url: ux22},
          { type: 'image', url: ux23},
          { type: 'image', url: ux24},
          { type: 'image', url: ux25},
        ],
       
        technologies: ['Figma']
      }
    ],
    "AI & Data Modelling": [
      {
        title: "Weather Forecast",
        description: "API Fetching & Data Modelling",
        imgUrl: ProjectCardWE,
        projectUrl:"https://colab.research.google.com/drive/12z4PrUTSfBN_B5Ojckn-sN8utdaTEVQf",
        images: [
          { type: 'image', url: weatherforecast_img},
          { type: 'video', url: weatherforecast},
        ],
        technologies: ['Unity','Csharp', 'GitHub','Canva']
      },
      {
        title: "Movie Recommendation",
        description: "Predictive Model based on Dataset Training",
        imgUrl: ProjectCardMO,
        projectUrl:"https://colab.research.google.com/drive/12LhqhAWBonD0x7xgdsFpYyhd51aW3JUm",
        images: [
          { type: 'image', url: movierecommendations_img },
          { type: 'video', url: movierecommendations },
        ],
        technologies: ['Unity','Csharp', 'GitHub','Canva']
      },

      //https://colab.research.google.com/drive/1KggRd2527jjI_LXQP9r1Ey7gpymBHDUA#scrollTo=Qg2oxpForZsr
      {
        title: "AI Pixel Detection System",
        description: "Predictive Model based on Dataset Training",
        imgUrl: pixeldetection,
        projectUrl:"https://colab.research.google.com/drive/1KggRd2527jjI_LXQP9r1Ey7gpymBHDUA",
        images: [
          { type: 'image', url: pixeldetection },
          { type: 'video', url: pixeldetectionVid },
        ],
        technologies: ['Unity','Csharp', 'GitHub','Canva']
      },
    ],
    "Game Development": [
      {
        title: "Scape-Hunt",
        description: "Maze Game w/ opponent hunt",
        imgUrl: ProjectCardMA,
        projectUrl:"https://github.com/VictorCuerdo/Laberinto2D?tab=readme-ov-file",
        images: [
          { type: 'image', url: MazeImg },
          { type: 'video', url: MazeVid },
        ],
        technologies: ['Unity','Csharp', 'GitHub','Canva']
      },
      {
        title: "Jump Warrior",
        description: "Platform-Adventure game",
        imgUrl: ProjectCardWA,
       
        images: [
          { type: 'image', url: JumpgameImg },
          { type: 'video', url: JumpgameVid },
        ],
        technologies: ['Unity','Csharp', 'GitHub','Canva']
      }
    ],
    "DevOps(Soon)": [
     /* {
        title: "Docker",
        description: "Round the clock tech support services",
        imgUrl:,
        images: [HomePage, SignIn, Step5],
        technologies: ['HelpDesk', 'Customer Support', 'Live Chat']
      },
      {
        title: "Kubernetes",
        description: "Round the clock tech support services",
        imgUrl: HomePage,
        images: [HomePage, SignIn, Step5],
        technologies: ['HelpDesk', 'Customer Support', 'Live Chat']
      },
      {
        title: "Azure",
        description: "Round the clock tech support services",
        imgUrl: HomePage,
        images: [HomePage, SignIn, Step5],
        technologies: ['HelpDesk', 'Customer Support', 'Live Chat']
      },
      {
        title: "AWS",
        description: "Round the clock tech support services",
        imgUrl: HomePage,
        images: [HomePage, SignIn, Step5],
        technologies: ['HelpDesk', 'Customer Support', 'Live Chat']
      } */
    ],
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my portfolio by choosing an option and see the projects I've worked on across different categories.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {Object.keys(categories).map((category, idx) => (
                        <Nav.Item key={idx}>
                          <Nav.Link eventKey={category}>{category}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {Object.entries(categories).map(([category, projects], idx) => (
                        <Tab.Pane eventKey={category} key={idx}>
                          {/* Add the .project-row class to this Row */}
                          <Row className="project-row"> 
                            {projects.map((project, index) => (
                              <ProjectCard key={index} onClick={() => handleProjectClick(project)} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background design" />
      <ProjectModal show={showModal} onHide={() => setShowModal(false)} project={activeProject} />
    </section>
  );
};