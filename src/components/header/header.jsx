import s from '../header/header.module.scss';
import logo from '../../images/Untitled.png';

const Header = () => {
  return (
    <div className={s.header}>
      <img
        className={s.header__img}
        loading="lazy"
        src={logo}
        alt="header__img"
      />
      <div className={s.header__title}>
        <h1>ОМЕГА-РИТУАЛ</h1>
        <p>похоронний дім</p>
      </div>
    </div>
  );
};

export default Header;
