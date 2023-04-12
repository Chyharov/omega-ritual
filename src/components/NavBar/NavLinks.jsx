import s from './NavBar.module.scss'
import { motion } from 'framer-motion'

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }


    return ( 
        <ul className={s.menu__list}>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            className={s.menu__list_item} 
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={s.menu__list_link} href="/">Головна</a>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            className={s.menu__list_item} o
            nClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={s.menu__list_link} href="#about">Про компанію</a>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className={s.menu__list_item} o
            nClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={s.menu__list_link} href="#services">Ритуальні послуги</a>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            className={s.menu__list_item} o
            nClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={s.menu__list_link} href="#goods">Ритуальні товари</a>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.40}}
            className={s.menu__list_item} o
            nClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={s.menu__list_link} href="#pices">Ціни</a>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.50}}
            className={s.menu__list_item} o
            nClick={() => props.isMobile && props.closeMobileMenu()}>
                <a className={s.menu__list_link} href="#сontacts">Контакти</a>
            </motion.li>

        </ul>
     );
}
 
export default NavLinks;