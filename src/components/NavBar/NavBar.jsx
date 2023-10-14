import './NavBar.scss';

import { Link, useLocation } from 'react-router-dom';

const navBarData = {
  items: ['Головна', 'Магазин', 'Про нас', 'Блог'],
  links: ['/', '/shop', '/about', '/blog'],
};

const NavBar = ({ className = '', setIsBurgerOpen }) => {
  const { pathname } = useLocation();

  return (
    <nav className={className}>
      <ul className="nav__list">
        {navBarData.items.map((item, idx) => {
          const link = navBarData.links[idx];
          return (
            <li
              key={idx}
              className={`nav__item ${pathname === link ? 'active' : ''}`}
            >
              <Link
                to={link}
                className={`nav__link ${pathname === link ? 'active' : ''}`}
                onClick={() =>
                  setIsBurgerOpen ? setIsBurgerOpen(false) : null
                }
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
