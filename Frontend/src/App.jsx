import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturedNFTs from './components/FeaturedNFTs.jsx';
import ProblemStatement from './components/ProblemStatement.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

// Home Page Component
const HomePage = () => (
  <>
    <HeroSection />
    <FeaturedNFTs />
    <ProblemStatement />
    <HowItWorks />
  </>
);

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;