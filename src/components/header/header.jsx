import s from '../Header/Header.module.scss';
import Logo from '../Logo/Logo';
import NavBar from 'components/NavBar/NavBar';


const Header = () => {

  return (
    <header>

      <div className={s.header__container}>
        <Logo />
      </div>

        <NavBar />
        
    </header>
  );
};

export default Header;
