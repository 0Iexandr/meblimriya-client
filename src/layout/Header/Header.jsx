import './Header.scss';

import { useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Hamburger from 'hamburger-react';

import Container from '../../components/Container/Container';
import NavBar from '../../components/NavBar/NavBar';
import UserNav from '../../components/UserNav/UserNav';
import Logo from '../../components/Logo/Logo';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import ScrollToTop from '../../utils/ScrollToTop';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    isBurgerOpen ? disableBodyScroll(BurgerMenu) : enableBodyScroll(BurgerMenu);
  }, [isBurgerOpen]);

  return (
    <header>
      <Container>
        <div className="header__wrapper">
          <div className="header__nav-container">
            <Logo setIsBurgerOpen={setIsBurgerOpen} />
            <NavBar className="header__navbar" />
          </div>
          <UserNav className="header__usernav" />
          <div className="header__burger">
            <Hamburger toggled={isBurgerOpen} toggle={setIsBurgerOpen} />
            <ScrollToTop trigger={isBurgerOpen} />
            <BurgerMenu
              isBurgerOpen={isBurgerOpen}
              setIsBurgerOpen={setIsBurgerOpen}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
