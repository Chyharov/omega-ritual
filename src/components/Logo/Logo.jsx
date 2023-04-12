import logo from '../../images/omega-ritual-logo.svg';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <img className={s.logo__img} loading="lazy" src={logo} alt="header__logo" />
    </a>
  );
};

export default Logo;
