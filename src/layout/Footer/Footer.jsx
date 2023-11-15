import './Footer.scss';

import Contacts from '../../components/Contacts/Contacts';
import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import Schedule from '../../components/Schedule/Schedule';
import Socials from '../../components/Socials/Socials';
import Terms from '../../components/Terms/Terms';

import visa from '../../assets/svg/visa.svg';
import mastercard from '../../assets/svg/mastercard.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__about-column">
            <div className="footer__logo-container">
              <Logo />
              <h2 className="footer__title">Меблі Мрія</h2>
            </div>
            <Terms />
          </div>
          <Schedule />
          <Contacts />
          <Socials />
        </div>
        <hr className="footer__line"></hr>
        <div className="footer__copyright">
          <p className="footer__copyright-subtitle">
            © MebliMriya 2023. All right reserved.
          </p>
          <div className="footer__copyright-wrapper">
            <img src={visa} alt="visa" className="footer__copyright-img" />
            <img
              src={mastercard}
              alt="mastercard"
              className="footer__copyright-img"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
