import s from '../footer/footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__title}>
        <a
          href="https://goo.gl/maps/f8b4aQGY6j4d34Gu8"
          target="_blank"
          rel="noopener noreferrer"
        >
          м.Київ, вул. Колоскова 9
        </a>
        <p>(район Совського кладовища)</p>
      </div>
    </div>
  );
};

export default Footer;
