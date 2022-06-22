import React, {useState, useEffect} from "react";
import './App.css';
import Header from './components/Layouts/Header/Header';
import Definition from './components/Definition/Definition';
import GreateMinds from './components/GreatMinds/GreatMinds';
import Webinar from './components/Webinar/Webinar';
import WhyChoose from './components/WhyChoose/WhyChoose';
import ApplyAsSpeaker from './components/ApplyAsSpeaker/ApplyAsSpeaker';
import Organizer from './components/Organizer/Organizer';
import Footer from './components/Layouts/Footer/Footer';
import RegisterModal from "./components/RegisterModal/RegisterModal";

function App() {
  const [windowWidth, setWindowWidth] = useState(1920);
  const [windowHeight, setWindowHeight] = useState(1080)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize",updateDimensions);
  }, []);

  const updateDimensions = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setWindowWidth(w);
    setWindowHeight(h);
  };

  return (
    <div className="App">
      <Header openModal={() => setShowModal(true)}/>
      <div className="contain">
        <RegisterModal 
          show={showModal}
          height={windowHeight} 
          closeModal={() => setShowModal(false)} 
          openModal={() => setShowModal(true)}
        />
        <Definition />
        <GreateMinds width={windowWidth}/>
        <Webinar width={windowWidth}/>
        <Organizer />
        <WhyChoose />
        <ApplyAsSpeaker />
      </div> 
      <Footer />
    </div>
  );
}

export default App;
