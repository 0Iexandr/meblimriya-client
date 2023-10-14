import './BurgerMenu.scss';

import NavBar from '../NavBar/NavBar';
import UserNav from '../UserNav/UserNav';

import { createPortal } from 'react-dom';

const BurgerMenu = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return createPortal(
    <div className={`burger ${isBurgerOpen ? 'open' : ''}`}>
      <div className={`burger__content ${isBurgerOpen ? 'open' : ''}`}>
        <NavBar setIsBurgerOpen={setIsBurgerOpen} />
        <UserNav setIsBurgerOpen={setIsBurgerOpen} />
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default BurgerMenu;
