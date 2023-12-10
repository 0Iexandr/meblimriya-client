import './Location.scss';

import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';

const Location = () => {
  return (
    <section className="location sections__padding">
      <Container className="location__container">
        <div className="location__info">
          <h2 className="location__title">Наше Місцезнаходження</h2>
          <Button
            text="Відкрити карту"
            white={true}
            isLink={true}
            to="https://maps.app.goo.gl/RiLttaaZzHJcAr5ZA"
            target="_blank"
            arrow={true}
          />
        </div>
        <iframe
          title="Google Map"
          className="location__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15191.542500986348!2d24.16125159153775!3d50.75286246483108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724f3c1f639acb1%3A0x62bff2e35dfa4001!2z0JHQoNCSLdCj0JrQoNCQ0IfQndCQLCDQotCX0J7Qkg!5e0!3m2!1suk!2sua!4v1702193387851!5m2!1suk!2sua"
          allowFullScreen
        />
      </Container>
    </section>
  );
};

export default Location;
