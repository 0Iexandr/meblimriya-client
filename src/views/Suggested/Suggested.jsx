import './Suggested.scss';

import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';

import arrow from '../../assets/svg/arrow.svg';
import sets from '../../assets/img/Tera.jpg';

const suggestedData = {
  images: [sets, sets, sets],
  titles: ['Перший елемент', 'Другий елемент', 'Третій елемент'],
  descriptions: ['Короткий опис', 'Короткий опис', 'Короткий опис'],
  prices: [8000, 13000, 24000],
};

const Suggested = () => {
  return (
    <section className="suggested sections__padding">
      <Container>
        <div className="suggested__info">
          <h2 className="suggested__title">Рекомендуємо для Вас</h2>
          <Link to="/shop" className="suggested__link">
            Дивитися Всі
            <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <ul className="suggested__list">
          {suggestedData.images.map((image, idx) => {
            return (
              <li className="suggested__item" key={idx}>
                <img
                  src={image}
                  alt="suggested furniture"
                  className="suggested__item--img"
                />
                <h3>{suggestedData.titles[idx]}</h3>
                <p>{suggestedData.descriptions[idx]}</p>
                <span>{suggestedData.prices[idx]} грн</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Suggested;
