import './Introducing.scss';

import Container from '../../components/Container/Container';

import t from '../../assets/img/Tera.jpg';

const introducingData = {
  listItems: ['Постачальник', 'Якість', 'Категорії'],
  listValues: ['BRW Україна', '99.9%', '20+'],
};

const Introducing = () => {
  return (
    <section className="introducing sections__padding">
      <Container>
        <div className="introducing__wrapper">
          <div className="introducing__info">
            <h2 className="introducing__title">
              Представляємо для Вас Меблі Мрія
            </h2>
            <p className="introducing__subtitle">
              Меблі Мрія — це найкраще місце для тих, хто шукає гармонійне
              поєднання сучасної естетики та вишуканості у своєму домі.
            </p>
            <ul className="introducing__list">
              {introducingData.listItems.map((item, idx) => {
                return (
                  <li className="introducing__item" key={idx}>
                    {item}{' '}
                    <span className="introducing__item--span">
                      {introducingData.listValues[idx]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <img src={t} alt="introducing" className="introducing__img" />
        </div>
      </Container>
    </section>
  );
};

export default Introducing;
