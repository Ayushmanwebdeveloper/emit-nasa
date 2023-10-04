import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useEffect } from 'react';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Nabvar';

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


        <section class="usa-graphic-list usa-section usa-section--dark">
          <div class="grid-container">
            <div class="usa-graphic-list__row grid-row grid-gap">
              <div class="usa-media-block tablet:grid-col">
                <img
                  class="usa-media-block__img"
                  src="/assets/img/circle-124.png"
                  alt="Alt text"
                />
                <div class="usa-media-block__body">
                  <h2 class="usa-graphic-list__heading">
                    Graphic headings can vary.
                  </h2>
                  <p>
                    Graphic headings can be used a few different ways, depending on
                    what your landing page is for. Highlight your values, specific
                    program areas, or results.
                  </p>
                </div>
              </div>
              <div class="usa-media-block tablet:grid-col">
                <img
                  class="usa-media-block__img"
                  src="/assets/img/circle-124.png"
                  alt="Alt text"
                />
                <div class="usa-media-block__body">
                  <h2 class="usa-graphic-list__heading">
                    Stick to 6 or fewer words.
                  </h2>
                  <p>
                    Keep body text to about 30 words. They can be shorter, but try
                    to be somewhat balanced across all four. It creates a clean
                    appearance with good spacing.
                  </p>
                </div>
              </div>
            </div>
            <div class="usa-graphic-list__row grid-row grid-gap">
              <div class="usa-media-block tablet:grid-col">
                <img
                  class="usa-media-block__img"
                  src="/assets/img/circle-124.png"
                  alt="Alt text"
                />
                <div class="usa-media-block__body">
                  <h2 class="usa-graphic-list__heading">
                    Never highlight anything without a goal.
                  </h2>
                  <p>
                    For anything you want to highlight here, understand what your
                    users know now, and what activity or impression you want from
                    them after they see it.
                  </p>
                </div>
              </div>
              <div class="usa-media-block tablet:grid-col">
                <img
                  class="usa-media-block__img"
                  src="/assets/img/circle-124.png"
                  alt="Alt text"
                />
                <div class="usa-media-block__body">
                  <h2 class="usa-graphic-list__heading">Could also have 2 or 6.</h2>
                  <p>
                    In addition to your goal, find out your users’ goals. What do
                    they want to know or do that supports your mission? Use these
                    headings to show those.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


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



      <div class="usa-identifier">
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              <a href="javascript:void(0)" class="usa-identifier__logo"
              ><img
                  class="usa-identifier__logo-img"
                  src="/assets/img/circle-gray-20.svg"
                  alt="&lt;Parent agency&gt; logo"
                  role="img"
                /></a>
            </div>
            <section
              class="usa-identifier__identity"
              aria-label="Agency description"
            >
              <p class="usa-identifier__identity-domain">domain.gov</p>
              <p class="usa-identifier__identity-disclaimer">
                An official website of the <a href="">&lt;Parent agency&gt;</a>
              </p>
            </section>
          </div>
        </section>
        <nav
          class="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links"
        >
          <div class="usa-identifier__container">
            <ul class="usa-identifier__required-links-list">
              <li class="usa-identifier__required-links-item">
                <a
                  href="javascript:void(0)"
                  class="usa-identifier__required-link usa-link"
                >About &lt;Parent shortname&gt;</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                >Accessibility support</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                >FOIA requests</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                >No FEAR Act data</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                >Office of the Inspector General</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                >Performance reports</a
                >
              </li>
              <li class="usa-identifier__required-links-item">
                <a href="" class="usa-identifier__required-link usa-link"
                >Privacy policy</a
                >
              </li>
            </ul>
          </div>
        </nav>
        <section
          class="usa-identifier__section usa-identifier__section--usagov"
          aria-label="U.S. government information and services"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              Looking for U.S. government information and services?
            </div>
            <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
          </div>
        </section>
      </div>
    </body>
  );
}
