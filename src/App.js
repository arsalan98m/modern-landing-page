import {
  Features,
  Blog,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <header className='gradient__bg'>
        <Navbar />
        <Header />
      </header>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
