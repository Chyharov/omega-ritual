import Header from './Header/Header';
import Hero from './SectionHero/SectionHero';
import SectionAbout from './SectionAbout/SectionAbout';
import SectionTeam from './SectionTeam/SectionTeam';
import SectionRitualGoods from './SectionRitualGoods/SectionRitualGoods';
// import Footer from './Footer/Footer';
import SectionRitualServices from './SectionRitualServices/SectionRitualServices';

export const App = () => {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <SectionAbout />
      <SectionTeam />
      <SectionRitualGoods />
      <SectionRitualServices />
      </main>
      {/* <Footer /> */}
    </>
  );
};
