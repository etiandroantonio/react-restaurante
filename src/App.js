import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Card2 from './components/Card/Card2';
import { Data } from './components/Card/Data';
import { Data2 } from './components/Card/Data';
import Thing from './components/Thing';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Navbar />
   <Hero />
   <Card data={Data} />
   <Thing />
   <Card2 data={Data2} />
   <Footer />
    </>
  );
}

export default App;
