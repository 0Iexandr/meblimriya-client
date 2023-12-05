import Advantages from '../../views/Advantages/Advantages';
import FAQ from '../../views/FAQ/FAQ';
import Hero from '../../views/Hero/Hero';
import Instagram from '../../views/Instagram/Instagram';
import Introducing from '../../views/Introducing/Introducing';
import Suggested from '../../views/Suggested/Suggested';

const Home = () => {
  return (
    <div>
      <Hero />
      <Introducing />
      <Advantages />
      <Suggested />
      <Instagram />
      <FAQ />
    </div>
  );
};

export default Home;
