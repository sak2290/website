import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import News from './components/News';
import SocialCognitionMeetup from './components/SocialCognitionMeetup';
import { PROFILE_DATA, RESEARCH_DATA, PUBLICATIONS_DATA, NEWS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Header name={PROFILE_DATA.name} cvLink={PROFILE_DATA.cvLink} />
      <main>
        <About profile={PROFILE_DATA} />
        <Research projects={RESEARCH_DATA} />
        <Publications publications={PUBLICATIONS_DATA} />
        <News newsItems={NEWS_DATA} />
        <SocialCognitionMeetup />
        <Contact email={PROFILE_DATA.email} links={PROFILE_DATA.links} />
      </main>
      <Footer name={PROFILE_DATA.name} />
    </div>
  );
};

export default App;