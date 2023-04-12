import { useState } from 'react';
import s from '../Header/Header.module.scss';
import Logo from '../Logo/Logo';
import NavMenu from 'components/NavBar/NavBar';


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value: "Головна", href: "/"}, {value: "Послуги", href: "/servise"}, {value: "Магазин", href: "/shop"}]

  return (
    <header>
      <div className={s.header__container}>

        <Logo />
        
          <div className={s.burger__btn} onClick={() => setMenuActive(!menuActive)} >
            <svg viewBox=" 1 1 28 28" height={35} width={40}>
              <path d="M4 24h24v-2.666h-24v2.666zM4 17.334h24v-2.667h-24v2.667zM4 8v2.666h24v-2.666h-24z"></path>
            </svg>
          </div>

          {/* <div className={s.burger__btn} onClick={() => setMenuActive(menuActive)} >
            <svg viewBox=" 1 1 28 28" height={35} width={40}>
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
          </div> */}

      </div>
      <NavMenu active={menuActive} setActive={setMenuActive} items={items}/>
    </header>
  );
};

export default Header;

<svg viewBox=" 1 1 28 28" height={35} width={40}>
            <path d="M4 24h24v-2.666h-24v2.666zM4 17.334h24v-2.667h-24v2.667zM4 8v2.666h24v-2.666h-24z"></path>
          </svg>
