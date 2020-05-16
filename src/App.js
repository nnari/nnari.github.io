import React from 'react';
import { MasterHeader } from './Components/MasterHeader';
import { NavBar } from './Components/NavBar';
import { ProjectsSection } from './Components/ProjectsSection';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { RepoList } from './Components/RepoList';
import { QuickGallery } from './Components/QuickGallery';
import { AboutSection } from './Components/AboutSection';

const App = () => {

  return (
    <html lang="en">
      <head>
      </head>
      <body id="page-top">

        <NavBar />
        <MasterHeader />
        <RepoList />
        <ProjectsSection />
        <QuickGallery />
        <AboutSection />
        {/* <Signup /> */}
        <Contact />
        <Footer />
      </body>
    </html>

  );
}

export default App;
