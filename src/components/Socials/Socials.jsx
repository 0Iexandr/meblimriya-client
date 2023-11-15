import './Socials.scss';

import { instagram, facebook } from '../../utils/Icons';

const socialsData = {
  icons: [instagram, facebook],
  links: [
    'https://www.instagram.com/mebli.mriyaa',
    'https://www.facebook.com/meblimriya76',
  ],
};

const Socials = () => {
  return (
    <div className="socials">
      <h3 className="socials__title">Слідкуйте за нами тут</h3>
      <ul className="socials__list">
        {socialsData.icons.map((social, idx) => {
          return (
            <li key={idx}>
              <a
                href={socialsData.links[idx]}
                className="socials__link"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="socials__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {social}
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
