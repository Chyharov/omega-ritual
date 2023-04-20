import s from '../RitualCarParkList/RitualCarParkList.module.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import car from '../../images/whiteVolksWagen/photo_1_2023-04-20_20-12-55.jpg';
import car1 from '../../images/whiteVolksWagen/photo_2_2023-04-20_20-12-55.jpg';
import car2 from '../../images/whiteVolksWagen/photo_3_2023-04-20_20-12-55.jpg';
import car3 from '../../images/whiteVolksWagen/photo_4_2023-04-20_20-12-55.jpg';
import car4 from '../../images/whiteVolksWagen/photo_5_2023-04-20_20-12-55.jpg';
import car5 from '../../images/whiteVolksWagen/photo_6_2023-04-20_20-12-55.jpg';

const RitualCarParkList = () => {
  return (
    <>
    <h3 className={s.ritualCarPark__title}>Ритуальний транспорт</h3>
    <p className={s.ritualCarPark__description}>Саме слово «катафалк» буквально означає постамент для встановлення труни з покійним під час похорону. Однак у нашій мові воно набуло дещо іншого значення – транспорт для ритуального перевезення покійного під час похоронної церемонії.</p>
    <p className={s.ritualCarPark__description}>Померлих військових та монарших осіб перевозили під час похорону на гарматних лафетах або запряжених у кінні упряжки возах, прикрашених квітами. Сьогодні функції ритуального транспорту виконують автомобілі катафалки. Це можуть бути як легкові машини із задніми дверима, через які завантажується труна, так і місткі мікро- або повноцінні автобуси з можливістю посадки рідних та близьких покійного.</p>
    <p className={s.ritualCarPark__description}>У ритуальному бюро похоронний дім «Омега» ви можете замовити у будь-яку точку Києва та Київської області один із чотирьох видів катафалків. Ціна таких послуг залежить від класу ритуального транспорту та його місткості. Це може бути як бюджетний економ варіант, так і катафалк VIP-рівня.</p>
    <section className={s.ritualCarPark}>
          
      <div className="container">
        <div className={s.ritualCarPark__container}>
          <ul>
            <li className={s.ritualCarParkList}>
                <p className={s.ritualCarParkList__item}>Економ клас</p>
                <CarouselProvider
                    naturalSlideWidth={280}
                    naturalSlideHeight={210}
                    totalSlides={6}
                    visibleSlides={1}
                >
                    <Slider>
                    <Slide index={0}><img src={car4} alt="ritualCar" /></Slide>
                    <Slide index={1}><img src={car2} alt="ritualCar" /></Slide>
                    <Slide index={2}><img src={car} alt="ritualCar" /></Slide>
                    <Slide index={3}><img src={car3} alt="ritualCar" /></Slide>
                    <Slide index={4}><img src={car5} alt="ritualCar" /></Slide>
                    <Slide index={4}><img src={car1} alt="ritualCar" /></Slide>
                    </Slider>

                    <p className={s.ritualCarParkList__description}>Volkswagen Т-5 Білий</p>

                    <div className={s.carouselButtonCenter}>
                        <ButtonBack className={s.carouselButton}>Назад</ButtonBack>
                        <ButtonNext className={s.carouselButton}>Вперед</ButtonNext>
                    </div>
                </CarouselProvider>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default RitualCarParkList;
