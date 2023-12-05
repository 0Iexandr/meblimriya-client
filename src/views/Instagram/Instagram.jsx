import './Instagram.scss';

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

import picture from '../../assets/img/Tera.jpg';

import { instagram } from '../../utils/Icons';

const instagramData = {
  posts: [
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
  ],
  links: [
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/CvR_vFmsmoa/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
  ],
};

const Instagram = () => {
  return (
    <section className="instagram sections__padding">
      <Container className="instagram__container">
        <h2 className="instagram__title">Підпишіться на Instagram</h2>
        <Button
          text="@mebli.mriyaa"
          white={true}
          isLink={true}
          to="https://www.instagram.com/mebli.mriyaa/"
          target="_blank"
        />
      </Container>
      <div className="instagram__posts">
        <ul className="instagram__list">
          {instagramData.posts.map((post, idx) => {
            return (
              <li className="instagram__item" key={idx}>
                <a
                  href={instagramData.links[idx]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={post} alt="instagram" className="instagram__img" />
                  <svg
                    className="instagram__logo"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {instagram}
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Instagram;
