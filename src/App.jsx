import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import UIUXDesigner from "./components/services/ui-ux-designer/UIUXDesigner";
import WebDeveloper from "./components/services/web-developer/WebDeveloper";
import BackendDeveloper from "./components/services/backend-developer/BackendDeveloper";
import ContentCreator from "./components/services/content-creator/ContentCreator";
// Layout Component
const Layout = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        
        {/* New Routes */}
        <Route path="/ui-ux-designer" element={<UIUXDesigner />} />
        <Route path="/web-developer" element={<WebDeveloper />} />
        <Route path="/backend-developer" element={<BackendDeveloper />} />
        <Route path="/content-creator" element={<ContentCreator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;