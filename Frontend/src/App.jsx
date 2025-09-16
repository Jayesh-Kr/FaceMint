import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ProblemStatement from './components/ProblemStatement.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatement />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default App;