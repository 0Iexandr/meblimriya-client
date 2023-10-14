import './Footer.scss';

import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';

import originalIcon from '../../assets/svg/original.svg';
import returnIcon from '../../assets/svg/return.svg';
import Schedule from '../../components/Schedule/Schedule';

const footerData = {
  termsIcons: [originalIcon, returnIcon],
  terms: [
    'У нас 100% гарантія на всі оригінальні товари від БРВ',
    'Завдяки Рекламації товар безкоштовно підлягає обміну',
  ],
};

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__wrapper">
          <div className="footer__about-column">
            <div className="footer__logo-container">
              <Logo />
              <h2 className="footer__title">Меблі Мрія</h2>
            </div>
            <ul className="footer__terms-list">
              {footerData.terms.map((item, idx) => {
                return (
                  <li key={idx} className="footer__terms-item">
                    <img
                      src={footerData.termsIcons[idx]}
                      alt="terms icon"
                      className="footer__terms-icon"
                    />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <Schedule />
          <Schedule />
          <Schedule />
          <Schedule />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
