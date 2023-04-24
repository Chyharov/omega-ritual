import React, { useState, useEffect } from "react";
import s from '../RitualCarParkList/RitualCarParkList.module.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = require.context('../../images/whiteVolksWagen/', true, /\.(jpe?g|png)$/);
const RitualCarParkWVWPhoto = images.keys().map((path) => images(path));

const Modal = ({ closeModal, currentSlide }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={s.modal} onClick={handleClick}>
      <div className={s.modalContent}>
        <span className={s.close} onClick={closeModal}>
          &times;
        </span>
        <CarouselProvider
          naturalSlideWidth={280}
          naturalSlideHeight={210}
          totalSlides={RitualCarParkWVWPhoto.length}
          infinite={true}
          currentSlide={currentSlide}
        >
          <Slider>
            {RitualCarParkWVWPhoto.map((photo, index) => (
              <Slide key={index} index={index + 1}>
                <img src={photo} alt={`Slide ${index}`} />
              </Slide>
            ))}
          </Slider>
          <div className={s.carouselCenterButtonModal}>
            <ButtonBack className={s.carouselButtonModal}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </ButtonBack>
            <ButtonNext className={s.carouselButtonModal}>
              <FontAwesomeIcon icon={faChevronRight} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

const RitualCarParkList = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
    <section className={s.ritualCarPark}>
    <h3 className={s.ritualCarPark__title}>Ритуальний транспорт</h3>
    <p className={s.ritualCarPark__description}>Саме слово «катафалк» буквально означає постамент для встановлення труни з покійним під час похорону. Однак у нашій мові воно набуло дещо іншого значення – транспорт для ритуального перевезення покійного під час похоронної церемонії.</p>
    <p className={s.ritualCarPark__description}>Померлих військових та монарших осіб перевозили під час похорону на гарматних лафетах або запряжених у кінні упряжки возах, прикрашених квітами. Сьогодні функції ритуального транспорту виконують автомобілі катафалки. Це можуть бути як легкові машини із задніми дверима, через які завантажується труна, так і місткі мікро- або повноцінні автобуси з можливістю посадки рідних та близьких покійного.</p>
    <p className={s.ritualCarPark__description}>У ритуальному бюро похоронний дім «Омега» ви можете замовити у будь-яку точку Києва та Київської області один із чотирьох видів катафалків. Ціна таких послуг залежить від класу ритуального транспорту та його місткості. Це може бути як бюджетний економ варіант, так і катафалк VIP-рівня.</p>
      <div className={s.ritualCarPark__container}>
        <ul>
          <li className={s.ritualCarParkList}>
            <p className={s.ritualCarParkList__item}>Економ клас</p>
              <CarouselProvider
                naturalSlideWidth={280}
                naturalSlideHeight={210}
                totalSlides={RitualCarParkWVWPhoto.length}
                infinite={true}>
                  <Slider>
                      {RitualCarParkWVWPhoto.map((photo, index) => (
                      <Slide key={index} index={index + 1}>
                        <img src={photo} alt={`Slide ${index}`} onClick={() => openModal(photo)}/>
                      </Slide>
                      ))}
                  </Slider>

                  <p className={s.ritualCarParkList__name}>Volkswagen Т-5 Білий</p>
                  <p className={s.ritualCarParkList__description}>(2 - 5 пасажирів)</p>

                  <div className={s.carouselButtonCenter}>
                    <ButtonBack className={s.carouselButton}>Назад</ButtonBack>
                    <ButtonNext className={s.carouselButton}>Вперед</ButtonNext>
                  </div>
              </CarouselProvider>
          </li>
          {isOpen && modalImage && <Modal image={modalImage} closeModal={closeModal} currentSlide={RitualCarParkWVWPhoto.indexOf(modalImage)} />}
        </ul>
      </div>
    </section>
    </>
  );
};

export default RitualCarParkList;
