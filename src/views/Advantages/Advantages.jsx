import './Advantages.scss';

import shipping from '../../assets/svg/shipping.svg';
import shopping from '../../assets/svg/shopping.svg';
import quality from '../../assets/svg/quality.svg';
import returns from '../../assets/svg/returns.svg';

import Container from '../../components/Container/Container';

const advantagesData = {
  icons: [shipping, returns, shopping, quality],
  titles: [
    'Безкошковна Доставка',
    'Безкошковне Повернення',
    'Безпечні покупки',
    'Найкраща якість',
  ],
  descriptions: [
    'На замовлення від 7000 грн',
    'Товарів з заводським браком',
    'Ви в надійних руках',
    'У нас є все що вам потрібно',
  ],
};

const Advantages = () => {
  return (
    <section className="advantages sections__padding">
      <Container>
        <ul className="advantages__list">
          {advantagesData.icons.map((icon, idx) => {
            return (
              <li className="advantages__item" key={idx}>
                <img src={icon} alt="" className="advantages__img" />
                <h3 className="advantages__title">
                  {advantagesData.titles[idx]}
                </h3>
                <p className="advantages__subtitle">
                  {advantagesData.descriptions[idx]}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Advantages;
