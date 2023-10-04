import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Nabvar';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Articles from './components/Articles';

export default function Home() {
  
  
  

  return (
    <body>
    
      <a class="usa-skipnav" href="#main-content">Skip to main content</a>
      <div class="usa-overlay"></div>
      <header class="usa-header usa-header--basic">
        <div class="usa-nav-container">
          <div class="usa-navbar">


       {/**Navbar */}
       <Navbar/>
       {/**End Navbar */}

            <div class="usa-logo">
              <em class="usa-logo__text"
              ><a href="/" title="<Project title>">Earth Surface Mineral Dust Source
                Investigation ("EMIT")</a></em>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        
        {/* introduction */}


        <Introduction/>


        <section class="grid-container usa-section">
          <div class="grid-row grid-gap">
            <div class="tablet:grid-col-4">
              <h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                A tagline highlights your approach
              </h2>
            </div>
            <div class="tablet:grid-col-8 usa-prose">
              <p>
                The tagline should inspire confidence and interest, focusing on the
                value that your overall approach offers to your audience. Use a
                heading typeface and keep your tagline to just a few words, and
                don’t confuse or mystify.
              </p>
              <p>
                Use the right side of the grid to explain the tagline a bit more.
                What are your goals? How do you do your work? Write in the present
                tense, and stay brief here. People who are interested can find
                details on internal pages.
              </p>
            </div>
          </div>
        </section>

       {/* Articles */}
        <Articles/>

   
   
       <section id="test-section-id" class="usa-section">
          <div class="grid-container">
            <h2 class="font-heading-xl margin-y-0">Section heading</h2>
            <p class="usa-intro">
              Everything up to this point should help people understand your agency
              or project: who you are, your goal or mission, and how you approach
              it. Use this section to encourage them to act. Describe why they
              should get in touch here, and use an active verb on the button below.
              “Get in touch,” “Learn more,” and so on.
            </p>
            <a class="usa-button usa-button--big" href="">Call to action</a>
          </div>
        </section>

      </main>
      
      {/* footer */}
      
     <Footer/>


        {/* Contact */}
      <div class="usa-identifier">
      <Contact/>

        {/* FAQ */}
       <Faq/>


        {/* <section
          class="usa-identifier__section usa-identifier__section--usagov"
          aria-label="U.S. government information and services"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              Looking for U.S. government information and services?
            </div>
            <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
          </div>
        </section> */}
      </div>
    </body>
  );
}
