import s from '../SectionRitualGoods/SectionRitualGoods.module.scss';

const SectionRitualGoods = () => {
  return (
    <section className={s.sectionRitualGoods}>
      <div className="container">
        <div className={s.ritualGoods__container}>
          <h2 className={s.ritualGoods__title}>Ритуальні товари</h2>
          
          <p className={s.ritualGoodsDiscription}>Продажем ритуальних товарів та приладдя наша компанія займається вже понад 15 років. Все ритуальне приладдя, яке ми маємо в наявності, ви можете подивитися відвідавши нас за адресою: <a
            href="https://goo.gl/maps/oztUvUmq4r8FktvN6"
            target="_blank"
            rel="noopener noreferrer"
          ><p className={s.ritualGoodsDiscription}>вул. Івана Федорова, 33 у місті Київ.</p></a></p>

          <p className={s.ritualGoodsDiscription}>В наявності є більше 100 різних ритуальних товарів, які ми продаємо за найнижчими цінами у місті Київ. При покупці ритуальної труни або ритуальних вінків ми робимо великі знижки на багато ритуальних речей.</p>
          <button type='button' className={s.ritualGoodsBtn}>Дізнатись більше</button>
        </div>

      </div>
    </section>
  );
};

export default SectionRitualGoods;
