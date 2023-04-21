import s from '../RitualCarParkList/RitualCarParkList.module.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carVW from '../../images/whiteVolksWagen/photo_5_2023-04-20_20-12-55.jpg';
import carVW2 from '../../images/whiteVolksWagen/photo_3_2023-04-20_20-12-55.jpg';
import carVW3 from '../../images/whiteVolksWagen/photo_1_2023-04-20_20-12-55.jpg';
import carVW4 from '../../images/whiteVolksWagen/photo_4_2023-04-20_20-12-55.jpg';
import carVW5 from '../../images/whiteVolksWagen/photo_6_2023-04-20_20-12-55.jpg';
import carVW6 from '../../images/whiteVolksWagen/photo_2_2023-04-20_20-12-55.jpg';

import carWM from '../../images/whiteMercedes/photo_5_2023-04-20_20-13-44.jpg';
import carWM2 from '../../images/whiteMercedes/photo_7_2023-04-20_20-13-44.jpg';
import carWM3 from '../../images/whiteMercedes/photo_12_2023-04-20_20-13-44.jpg';
import carWM4 from '../../images/whiteMercedes/photo_10_2023-04-20_20-13-44.jpg';

import carBM from '../../images/blackMercedes/photo_1_2023-04-20_20-13-21.jpg';
import carBM2 from '../../images/blackMercedes/photo_2_2023-04-20_20-13-21.jpg';
import carBM3 from '../../images/blackMercedes/photo_14_2023-04-20_20-13-44.jpg';
import carBM4 from '../../images/blackMercedes/photo_10_2023-04-20_20-13-21.jpg';
import carBM5 from '../../images/blackMercedes/photo_4_2023-04-20_20-13-21.jpg';
import carBM6 from '../../images/blackMercedes/photo_4_2023-04-20_20-13-44.jpg';
import carBM7 from '../../images/blackMercedes/photo_9_2023-04-20_20-13-44.jpg';

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
                    <Slide index={0}><img src={carVW} alt="ritualCar" /></Slide>
                    <Slide index={1}><img src={carVW2} alt="ritualCar" /></Slide>
                    <Slide index={2}><img src={carVW3} alt="ritualCar" /></Slide>
                    <Slide index={3}><img src={carVW4} alt="ritualCar" /></Slide>
                    <Slide index={4}><img src={carVW5} alt="ritualCar" /></Slide>
                    <Slide index={4}><img src={carVW6} alt="ritualCar" /></Slide>
                    </Slider>

                    <p className={s.ritualCarParkList__name}>Volkswagen Т-5 Білий</p>
                    <p className={s.ritualCarParkList__description}>(2 - 5 пасажирів)</p>

                    <div className={s.carouselButtonCenter}>
                        <ButtonBack className={s.carouselButton}>Назад</ButtonBack>
                        <ButtonNext className={s.carouselButton}>Вперед</ButtonNext>
                    </div>
                </CarouselProvider>
            </li>

            <li className={s.ritualCarParkList}>
                <p className={s.ritualCarParkList__item}>Середній клас</p>
                <CarouselProvider
                    naturalSlideWidth={280}
                    naturalSlideHeight={210}
                    totalSlides={4}
                    visibleSlides={1}
                >
                    <Slider>
                    <Slide index={0}><img src={carWM} alt="ritualCar" /></Slide>
                    <Slide index={1}><img src={carWM2} alt="ritualCar" /></Slide>
                    <Slide index={2}><img src={carWM3} alt="ritualCar" /></Slide>
                    <Slide index={3}><img src={carWM4} alt="ritualCar" /></Slide>

                    </Slider>

                    <p className={s.ritualCarParkList__name}>Mercedes Benz Sprinter Білий</p>
                    <p className={s.ritualCarParkList__description}>(14 - 18 пасажирів)</p>

                    <div className={s.carouselButtonCenter}>
                        <ButtonBack className={s.carouselButton}>Назад</ButtonBack>
                        <ButtonNext className={s.carouselButton}>Вперед</ButtonNext>
                    </div>
                </CarouselProvider>
            </li>

            <li className={s.ritualCarParkList}>
                <p className={s.ritualCarParkList__item}>VIP клас</p>
                <CarouselProvider
                    naturalSlideWidth={280}
                    naturalSlideHeight={210}
                    totalSlides={7}
                    visibleSlides={1}
                >
                    <Slider>
                    <Slide index={0}><img src={carBM} alt="ritualCar" /></Slide>
                    <Slide index={1}><img src={carBM2} alt="ritualCar" /></Slide>
                    <Slide index={2}><img src={carBM3} alt="ritualCar" /></Slide>
                    <Slide index={3}><img src={carBM4} alt="ritualCar" /></Slide>
                    <Slide index={4}><img src={carBM5} alt="ritualCar" /></Slide>
                    <Slide index={4}><img src={carBM6} alt="ritualCar" /></Slide>
                    <Slide index={4}><img src={carBM7} alt="ritualCar" /></Slide>
                    </Slider>

                    <p className={s.ritualCarParkList__name}>Mercedes Benz Sprinter Чорний</p>
                    <p className={s.ritualCarParkList__description}>(14 - 18 пасажирів)</p>

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
