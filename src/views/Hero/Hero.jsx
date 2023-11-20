import './Hero.scss';

import Container from '../../components/Container/Container';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Button from '../../components/Button/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <Container>
          <div className="hero__info">
            <h1 className="hero__title">
              Ознайомтесь з новими сучасними сетами!
            </h1>
            <p className="hero__subtitle">
              Зробіть своє життя краще за допомогою колекції сучасних меблів від
              Меблі Мрія.
            </p>
            <Button text="Докладніше" arrow={true} />
          </div>
        </Container>
      </div>
      <ImageSlider className="hero__img" width={655} height={475} />
    </section>
  );
};

export default Hero;
