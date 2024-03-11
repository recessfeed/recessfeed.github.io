import React from 'react';

import { Goals } from './components/Goals';
import { Features } from './components/Features';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CTA } from './components/CTA';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goals />
      <Features />
      <CTA />
    </div>
  )
}

export default App