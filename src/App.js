import React from 'react';
import { MasterHeader } from './Components/MasterHeader';
import { NavBar } from './Components/NavBar';
import { ProjectsSection } from './Components/ProjectsSection';
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
