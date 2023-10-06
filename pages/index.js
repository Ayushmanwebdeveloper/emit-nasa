import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Nabvar';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Articles from './components/Articles';
import Highlight from './components/Highlight';
import Header from './components/Header';
import Outro from './components/Outro';
import CardGrid from './components/CardGrid';

export default function Home() { 

  return ( 
    <body>
      <Navbar/>
      <a class="usa-skipnav" href="#main-content">Skip to main content</a>
      <div class="usa-overlay"></div>
      <Header/>
      <main id="main-content">
        <Introduction/>
        <Highlight/>
        <CardGrid/>
        <Articles/>
        <Outro/>
      </main>
      <Footer/>
      <div class="usa-identifier">
      <Contact/>
      <Faq/>
      </div>
    </body>
  );
}
