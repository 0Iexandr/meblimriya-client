import './Terms.scss';

import originalIcon from '../../assets/svg/original.svg';
import returnIcon from '../../assets/svg/return.svg';

const termsData = {
  termsIcons: [originalIcon, returnIcon],
  terms: [
    'У нас 100% гарантія на всі оригінальні товари від БРВ',
    'Завдяки Рекламації товар безкоштовно підлягає обміну',
  ],
};

const Terms = () => {
  return (
    <div>
      <ul className="terms__list">
        {termsData.terms.map((item, idx) => {
          return (
            <li key={idx} className="terms__item">
              <img
                src={termsData.termsIcons[idx]}
                alt="terms icon"
                className="terms__icon"
              />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Terms;
