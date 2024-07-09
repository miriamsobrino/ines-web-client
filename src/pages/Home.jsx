import React from 'react';
import { Header } from '../components/Header/Header';
import { Info } from '../components/Info/Info';
import { Services } from '../components/Services/Services';
import { Blog } from '../components/Blog/Blog';
import { Clients } from '../components/Clients/Clients';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className=''>
      <Header />
      <Info />
      <Services />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
