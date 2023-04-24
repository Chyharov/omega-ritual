import logo from '../../images/logoAbout.svg';
import s from '../SectionAbout/SectionAbout.module.scss';

const SectionAbout = () => {
  return (
    <section className={s.about} id='about'>
      <div className="container">
        <div className={s.about__container}>
          <svg className={s.about__logo} width="100" height="100">
            <image xlinkHref={logo} alt="Logo"/>
          </svg>
          <h1 className={s.about__title}>ОМЕГА-РИТУАЛ</h1>
          <p className={s.about__description}>похоронний дім</p>
          <p className={s.about__company}>Похоронний дім Омега має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
