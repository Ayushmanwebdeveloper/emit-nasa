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
import Card from './components/Card';
import { authOptions } from '/pages/api/auth/[...nextauth]';
import { getServerSession } from "next-auth/next";
import clientPromise from '../utils/database';

export default function Home({ savedcards , user }) { 
  console.log(savedcards);
  let crruser = null;
  if (user) {
    crruser = user;
    console.log(crruser);
  }
  let CardGrid = function(){
    let cards=[]
    savedcards.forEach(x => {
      cards.push(<Card title={x.title} savedcards={savedcards} user={crruser} btn={x.btn} btnlink={x.btnlink} description={x.description} issaved={x.issaved} image={x.image} />)
    })
    return cards
  }


  return ( 
    <body>
      <Navbar/>
      <a class="usa-skipnav" href="#main-content">Skip to main content</a>
      <div class="usa-overlay"></div>
      <Header/>
      <main id="main-content">
        <Introduction/>
        <Highlight/>
        <ul class="usa-card-group">
          <CardGrid/>
        </ul>
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

export async function getServerSideProps({ req, res }) {
  try {
    const client = await clientPromise;
    const db = client.db("emit");
    const savedcards = await db
      .collection("scards")
      .find({})
      .toArray();
    const session = await getServerSession(req, res, authOptions);
    res.setHeader(
      'Cache-Control',
      'no-cache, no-store, max-age=0, must-revalidate'
    )
    if (!session) {
      return {
        props: { savedcards: JSON.parse(JSON.stringify(savedcards)), user: null },
      };
    }
    return {
      props: { savedcards: JSON.parse(JSON.stringify(savedcards)), user: JSON.parse(JSON.stringify(session?.user)) },
    };
  } catch (e) {
    console.error(e);
  }
}