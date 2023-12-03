import './Contacts.scss';

import viber from '../../assets/svg/viber.svg';
import telegram from '../../assets/svg/telegram.svg';

const Contacts = () => {
  return (
    <div className="contacts">
      <h3 className="contacts__title">
        Контакти для замовленнь та консультації
      </h3>
      <a href="tel:+380970406412" className="contacts__number">
        +380 97 040 64 12{' '}
        <span className="contacts__icons">
          <img src={viber} alt="viber" />
          <img src={telegram} alt="telegram" />
        </span>
      </a>
      <a href="tel:+380980112298" className="contacts__number">
        +380 98 011 22 98{' '}
        <span className="contacts__icons">
          <img src={viber} alt="viber" />
          <img src={telegram} alt="telegram" />
        </span>
      </a>
      <h3 className="contacts__title">Електронна адреса</h3>
      <a href="mailto:mriamebli@gmail.com" className="contacts__mail">
        mriamebli@gmail.com
      </a>
    </div>
  );
};

export default Contacts;
