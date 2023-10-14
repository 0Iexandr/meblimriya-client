import './Logo.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.jpg';

const Logo = ({ setIsBurgerOpen }) => {
  return (
    <Link
      to="/"
      onClick={() => (setIsBurgerOpen ? setIsBurgerOpen(false) : null)}
    >
      <img src={logo} alt="logo" className="logo__img" />
    </Link>
  );
};

export default Logo;
