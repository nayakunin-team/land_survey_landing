import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import Lineaments from '../components/Lineaments/Lineaments';
import Offers from '../components/Offers/Offers';
import Advantage from '../components/Advantage/Advantage';
import Steps from '../components/Steps/Steps';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Lineaments />
      <Offers />
      <Advantage />
      <Steps />
      <Contacts />
      <Footer />
    </>
  );
}

export default Home;
