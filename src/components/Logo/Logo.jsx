import logo from '../../images/Untitled.png';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <img className={s.logo__img} loading="lazy" src={logo} alt="header__logo" />
      <div>
        <p className={s.logo__title}>ОМЕГА-РИТУАЛ</p>
        <p className={s.logo__description}>похоронний дім</p>
      </div>
    </a>
  );
};

export default Logo;
