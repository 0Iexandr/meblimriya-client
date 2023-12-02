import Advantages from '../../views/Advantages/Advantages';
import Hero from '../../views/Hero/Hero';
import Introducing from '../../views/Introducing/Introducing';
import Suggested from '../../views/Suggested/Suggested';

const Home = () => {
  return (
    <div>
      <Hero />
      <Introducing />
      <Advantages />
      <Suggested />
    </div>
  );
};

export default Home;
