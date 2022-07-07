import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import Head from 'next/head';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
        <Head>
          <title>Leo Séry - Portfolio</title>
          <meta name ="Leo Séry - Portfolio" content="Blog, CV and Portfolio"></meta>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="relative">
          <Navbar/>
          <Main/>
          <About/>
          <Footer/>
        </div>
    </>
  );
}