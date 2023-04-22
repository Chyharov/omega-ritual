import s from '../SectionRitualServices/SectionRitualServices.module.scss';
import RitualCarParkList from '../RitualCarParkList/RitualCarParkList'

const SectionRitualServices = () => {
  return (
    <section className={s.sectionRitualServices} id='services'>
      <div className="container">
        <div className={s.ritualServices__container}>
          <h2 className={s.ritualServices__title}>Ритуальні Послуги</h2>
          <p className={s.ritualServices__description}>Одне із основних видів похоронних послуг, комплексну організацію яких ми повністю беремо він. Транспортування померлого по Києву до місця проведення церемонії прощання та після неї на цвинтар чи крематорій має відповідати ситуації та статусу покійного.</p>

          <RitualCarParkList />
          
        </div>

      </div>
    </section>
  );
};

export default SectionRitualServices;
