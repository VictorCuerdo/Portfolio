import React from 'react';
import { Col } from "react-bootstrap";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { ReactComponent as AdmobIcon } from '../assets/icons/admob-icon.svg';
import { ReactComponent as AngularIcon } from '../assets/icons/angular-icon.svg';
import { ReactComponent as API } from '../assets/icons/api-icon.svg';
import { ReactComponent as AppstoreIcon } from '../assets/icons/appstore-icon.svg';
import { ReactComponent as AwsIcon } from '../assets/icons/aws-icon.svg';
import { ReactComponent as AzureIcon } from '../assets/icons/azure-icon.svg';
import { ReactComponent as BlocIcon } from '../assets/icons/bloc-icon.svg';
import { ReactComponent as CanvaIcon } from '../assets/icons/canva-icon.svg';
import { ReactComponent as DartIcon } from '../assets/icons/dart-icon.svg';
import { ReactComponent as DockerIcon } from '../assets/icons/docker-icon.svg';
import { ReactComponent as FigmaIcon } from '../assets/icons/figma-icon.svg';
import { ReactComponent as FirebaseIcon } from '../assets/icons/firebase-icon.svg';
import { ReactComponent as FlutterIcon } from '../assets/icons/flutter-icon.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github-icon.svg';
import { ReactComponent as JavaIcon } from '../assets/icons/java-icon.svg';
import { ReactComponent as JupyterIcon } from '../assets/icons/jupyter-icon.svg';
import { ReactComponent as KotlinIcon } from '../assets/icons/kotlin-icon.svg';
import { ReactComponent as KubernetesIcon } from '../assets/icons/kubernetes-icon.svg';
import { ReactComponent as LanguagesIcon } from '../assets/icons/languages-icon.svg';
import { ReactComponent as LootieIcon } from '../assets/icons/lootie-icon.svg';
import { ReactComponent as MapsIcon } from '../assets/icons/maps-icon.svg';
import { ReactComponent as NodeIcon } from '../assets/icons/node-icon.svg';
import { ReactComponent as PlayStoreIcon } from '../assets/icons/playstore-icon.svg';
import { ReactComponent as PythonIcon } from '../assets/icons/python-icon.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-icon.svg';
import { ReactComponent as SpringBootIcon } from '../assets/icons/springboot-icon.svg';
import { ReactComponent as SwaggerIcon } from '../assets/icons/swagger-icon.svg';
import { ReactComponent as SwiftIcon } from '../assets/icons/swift-icon.svg';
import { ReactComponent as UnityIcon } from '../assets/icons/unity-icon.svg';
import { ReactComponent as EclipseIcon } from '../assets/icons/eclipse-icon.svg';
import { ReactComponent as VisualIcon } from '../assets/icons/visual-icon.svg';
import { ReactComponent as AstudioIcon } from '../assets/icons/astudio-icon.svg';
import { IconBrandFlutter } from '@tabler/icons-react'; // Correctly import IconBrandFlutter
import { ReactComponent as WordpressIcon } from '../assets/icons/wordpress-icon.svg';
import { ReactComponent as BluehostIcon } from '../assets/icons/bluehost-icon.svg';
import { ReactComponent as GodaddyIcon } from '../assets/icons/godaddy-icon.svg';
import { ReactComponent as WixIcon } from '../assets/icons/wix-icon.svg';
import { ReactComponent as Csharp } from '../assets/icons/c-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconBrandCSharp } from '@tabler/icons-react'; 
import { IconBrandUnity } from '@tabler/icons-react'; 
import { IconBrandGithub} from '@tabler/icons-react'; 
import { IconLanguage} from '@tabler/icons-react'; 
import { IconApi} from '@tabler/icons-react'; 
import { IconBrandWordpress} from '@tabler/icons-react'; 
import { IconBrandPython} from '@tabler/icons-react'; 



import { faReact, faNodeJs, faPython, faUnity, faAngular, faAws, faDocker, faGithub, faJava, faSwift, faGoogle, faAndroid, faApple, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMapMarkedAlt, faBookOpen, faGlobe, faCode, faPlayCircle, faLeaf, faLaptopCode, faCloud, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { IconLink } from '@tabler/icons-react';
const isTouchDevice = () => {
  return ('ontouchstart' in window) || 
         (navigator.maxTouchPoints > 0) || 
         (navigator.msMaxTouchPoints > 0);
};

export const ProjectCard = ({ title, description, imgUrl, onClick, technologies, projectUrl }) => {
  const actionText = isTouchDevice() ? 'TAP ME' : 'SEE MORE';

  const iconMap = {
    'React': <ReactIcon />,
    'flutter': <IconBrandFlutter stroke={1} color="#02569B" size={60} />,
    'Node.js': <NodeIcon />,
    'Python': <IconBrandPython />,
    'Unity': <IconBrandUnity />,
    'Angular': <AngularIcon />,
    'AWS': <AwsIcon />,
    'Docker': <DockerIcon />,
    'GitHub': <IconBrandGithub/>,
    'Java': <JavaIcon />,
    'Kubernetes': <KubernetesIcon />,
    'Figma': <FigmaIcon />,
    'Swift': <SwiftIcon />,
    'Firebase': <FirebaseIcon /> , 
    'Business Logic Pattern': <BlocIcon />,
    'Flutter': <FlutterIcon /> ,
    'Dart': <DartIcon />,
    'API': <IconApi/>,
    'Kotlin': <KotlinIcon />,
    'Google Admob': <AdmobIcon />,
    'Lottie Animations': <LootieIcon />, 
    'SpringBoot': <SpringBootIcon />,
    'Eclipse IDE': <EclipseIcon />,
    'Canva': <CanvaIcon />, 
    'Google PlayStore': <PlayStoreIcon />,
    'Apple APPStore': <AppstoreIcon />,
    'Google Maps': <MapsIcon />,
    'Languages': <IconLanguage/>,
    'Azure': <AzureIcon />,
    'Jupyter Notebooks': <JupyterIcon/>,
    'Visual Studio': <VisualIcon/>,
    'Android Studio': <AstudioIcon/>,
    'Wordpress': <IconBrandWordpress/>,
    'Bluehost': <BluehostIcon/>,
    'GoDaddy': <GodaddyIcon/>,
    'Wix' : <WixIcon/>,
    'Csharp': <IconBrandCSharp/>
  };

  const icons = technologies.map(tech => iconMap[tech] || null).filter(icon => icon !== null);

  return (
    <Col size={12} sm={6} md={4} onClick={() => onClick({ title, description, imgUrl })}>
      <div className="proj-imgbx" style={{ cursor: 'pointer', position: 'relative' }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>
            {title}
            {/* Add your link icon wrapped in an <a> tag next to the title */}
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
              <IconLink size={24} stroke={1.5} /> {/* Example using Tabler Icons */}
            </a>
          </h4>
          <span>{description}</span>
        </div>
        <div className="proj-icons" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px' }}>
  <div className="tech-stack-label" style={{ alignSelf: 'flex-start' }}>Tech-Stack:</div>
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {icons.map((icon, index) => (
      <OverlayTrigger key={index} overlay={<Tooltip id={`tooltip-${index}`}>{technologies[index]}</Tooltip>}>
        <div className="tech-icon"> {/* Wrap each icon in a div with the class "tech-icon" */}
          {React.isValidElement(icon) ? icon : <FontAwesomeIcon icon={icon} />}
        </div>
      </OverlayTrigger>
    ))}
  </div>
</div>
        <div className="tap-me">{actionText}</div>
      </div>
    </Col>
  );
};
