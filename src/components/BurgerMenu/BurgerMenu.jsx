import './BurgerMenu.scss';

import NavBar from '../NavBar/NavBar';
import UserNav from '../UserNav/UserNav';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const BurgerMenu = ({ isBurgerOpen, setIsBurgerOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isBurgerOpen);
  }, [isBurgerOpen]);

  return createPortal(
    <div className={`burger ${isOpen ? 'open' : ''}`}>
      <NavBar setIsBurgerOpen={setIsBurgerOpen} />
      <UserNav setIsBurgerOpen={setIsBurgerOpen} />
    </div>,
    document.querySelector('#modal'),
  );
};

export default BurgerMenu;
