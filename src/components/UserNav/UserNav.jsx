import './UserNav.scss';

import { Link, useLocation } from 'react-router-dom';

import { shoppingCart, user } from '../../utils/Icons';

const userNavData = {
  icons: [user, shoppingCart],
  links: ['/login', '/cart'],
};

const UserNav = ({ className = '', setIsBurgerOpen }) => {
  const { pathname } = useLocation();

  return (
    <nav className={className}>
      <ul className="user-nav__list">
        {userNavData.icons.map((icon, idx) => {
          const link = userNavData.links[idx];
          return (
            <li key={idx} className="user-nav__item">
              <Link
                to={link}
                className="user-nav__link"
                onClick={() =>
                  setIsBurgerOpen ? setIsBurgerOpen(false) : null
                }
              >
                <svg
                  className={`user-nav__icon ${
                    pathname === link ? 'active' : ''
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {icon}
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default UserNav;
