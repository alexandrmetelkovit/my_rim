import BannerImg from '@/assets/images/banner.jpg';

import './CharactersPage.scss';
import { Filterpanel } from './FilterPanel/FilterPanel';

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

      <div className='characters-page__body'>
        {/* <Loader
          text='Loading characters...'
          size='medium'
        /> */}
        <Filterpanel />
      </div>
    </div>
  );
};
