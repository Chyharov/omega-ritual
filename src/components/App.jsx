import Header from './Header/Header';
import Hero from './SectionHero/SectionHero';
import SectionAbout from './SectionAbout/SectionAbout';
import SectionTeam from './SectionTeam/SectionTeam';
// import Footer from './Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <SectionAbout />
      <SectionTeam />
      </main>
      {/* <Footer /> */}
    </>
  );
};
