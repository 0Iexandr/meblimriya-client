import './Discount.scss';

import ringing from '../../assets/svg/ringing.svg';

const Discount = () => {
  return (
    <div className="discount">
      <img src={ringing} alt="ringing" className="discount__img" />
      <p className="discount__description">
        На замовлення{' '}
        <span className="discount__description--span">від 7000 грн</span>{' '}
        доставка Безкоштовна!
      </p>
    </div>
  );
};

export default Discount;
