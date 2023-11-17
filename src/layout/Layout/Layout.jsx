import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Discount from '../../components/Discount/Discount';

const Layout = ({ children }) => {
  return (
    <div>
      <Discount />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
