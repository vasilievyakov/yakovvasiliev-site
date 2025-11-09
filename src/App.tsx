
import React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { Hero } from './features/hero/Hero';
import { About } from './features/about/About';
import { Current } from './features/current/Current';
import { Approach } from './features/approach/Approach';
import { Formats } from './features/formats/Formats';
import { CLevel } from './features/clevel/CLevel';
import { Process } from './features/process/Process';
import { Contacts } from './features/contacts/Contacts';
import { ScrollFadeProvider } from './components/ScrollFadeProvider/ScrollFadeProvider';

function App() {
  return (
    <ScrollFadeProvider>
      <Layout>
        <Hero />
        <About />
        <Current />
        <Approach />
        <Formats />
        <CLevel />
        <Process />
        <Contacts />
      </Layout>
    </ScrollFadeProvider>
  );
}

export default App;
