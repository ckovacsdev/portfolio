import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { ProfileCard } from './components/profile-card/profile-card';
import { WorkHistory } from './components/work-history-card/work-history';

function App() {
  return (
    <div className='portfolio-container'>
      <Header />
      <div className='main-profile-content'>
        <ProfileCard />
        <WorkHistory />
      </div>
    </div>
  );
}

export default App;
