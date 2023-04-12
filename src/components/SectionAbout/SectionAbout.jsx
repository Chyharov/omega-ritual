import logo from '../../images/Untitled.png';
import s from '../SectionAbout/SectionAbout.module.scss';

const SectionAbout = () => {
  return (
    <section className={s.about}>
      <div className="container">
        <div className={s.about__container}>
          <img className={s.about__logo} src={logo} alt="Logo" />
          <h1 className={s.about__title}>ОМЕГА-РИТУАЛ</h1>
          <p className={s.about__description}>похоронний дім</p>
          <a
            className={s.about__address}
            href="https://goo.gl/maps/idCvpqAi9fpXf9uLA"
          >
            м.Київ, вул.І. Федорова, 33
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
