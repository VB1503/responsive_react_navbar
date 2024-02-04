import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About';
import FoundingStory from './routes/Founding_story_and_team';
import UserCentricApproach from './routes/UserCentricApproach';
import StartupMission from './routes/StartupMission';
import InnovationAndTechnology from './routes/Innovation_and_technology';
import MarketDifferentiation from './routes/Market_differentiation';
import Services from './routes/Services';
import AbiSearch from './routes/AbiSearch';
import Vas from './routes/Vas';
import DcQrScanner from './routes/DcQrScanner';
import HowToUse from './routes/HowToUse';
import Contactus from './routes/Contactus';
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="founding_story_and_team" element={<FoundingStory />} />
          <Route path="user_centric_approach" element={<UserCentricApproach />} />
          <Route path="startup_mission" element={<StartupMission />} />
          <Route path="innovation_and_technology" element={<InnovationAndTechnology />} />
          <Route path="market_differentiation" element={<MarketDifferentiation />} />
          <Route path="services" element={<Services />} />
          <Route path="abi" element={<AbiSearch />} />
          <Route path="vas" element={<Vas />} />
          <Route path="dcqr" element={<DcQrScanner />} />
          <Route path="How_to_use" element={<HowToUse />} />
          <Route path="contact_us" element={<Contactus />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
