import s from './NavBar.module.scss'

const NavMenu = ({items, active, setActive}) => {


  return (
    <nav className={s.nav}>
      <div className={`${s.menu} ${active ? s.active : ''}`} onClick={() => setActive(false)}>
          <div className={s.menu__content} onClick={e => e.stopPropagation()}>
              <ul className={s.menu__list}>
                  {items.map(item => <li className={s.menu__list_item}>
                      <a className={s.menu__list_link} href={item.href}>{item.value}</a>
                  </li>)}
              </ul>
          </div>
        </div>
      </nav>

  );
}

export default NavMenu;