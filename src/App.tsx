import React from 'react';
import './App.css';
import { EducationCard } from './components/education-card/education-card';
import { Header } from './components/header/header';
import { ProfileCard } from './components/profile-card/profile-card';
import { WorkHistory } from './components/work-history-card/work-history';

function App() {
  return (
    <div className='portfolio-container'>
      <Header />
      <div className='main-profile-content'>

        <div id='about_me'>
          <ProfileCard />
        </div>

        <div className='home-page-block'>
          <h1 className='home-page-title'> Work History </h1>
          <WorkHistory />
        </div>

        <div className='home-page-block'>
          <h1 className='home-page-title'> Education </h1>
          <EducationCard />
        </div>
        
        <div className='home-page-block'>
          <h1 className='home-page-title' id='projects'> Projects </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
