import { Loader } from '@/shared/components';
import BannerImg from '@/assets/images/banner.jpg';

import './CharactersPage.scss';

export const CharactersPage = () => {
  return (
    <div className='characters-page container'>
      <div className='characters-page__banner'>
        <img
          className='characters-page__banner-img'
          src={BannerImg}
          alt='Banner Rick and Morty'
          aria-label='Banner Rick and Morty'
          loading='lazy'
        />
      </div>

      <div className='character-page__body'>
        <Loader
          text='Loading characters...'
          size='medium'
        />
      </div>
    </div>
  );
};
