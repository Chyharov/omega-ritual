import s from '../footer/footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__title}>
        <p>м.Київ, вул. Колоскова 9</p>
        <p>(район Совського кладовища)</p>
      </div>
    </div>
  );
};

export default Footer;
