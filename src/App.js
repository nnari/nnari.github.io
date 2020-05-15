import React, { useEffect } from 'react';
import { MasterHeader } from './Components/MasterHeader';
import { NavBar } from './Components/NavBar';
import { AboutSection } from './Components/AboutSection';
import { ProjectsSection } from './Components/ProjectsSection';
import { Signup } from './Components/Signup';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { RepoList } from './Components/RepoList';
import { QuickGallery } from './Components/QuickGallery';

const App = () => {

  return (
    <html lang="en">
      <head>
      </head>
      <body id="page-top">

        <NavBar />
        <MasterHeader />
        <RepoList />
        {/* <AboutSection /> */}
        <ProjectsSection />
        <QuickGallery />
        {/* <Signup /> */}
        <Contact />
        <Footer />
      </body>
    </html>

  );
}

export default App;
