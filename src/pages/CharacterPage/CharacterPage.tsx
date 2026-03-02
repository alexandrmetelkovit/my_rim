import { Link } from 'react-router-dom';

import { Loader } from '@/shared/components';
import IconArrowLeftBack from '@/assets/icons/arrow-left.svg?react';

import './CharacterPage.scss';

export const CharacterPage = () => {
  return (
    <div className='character-page container'>
      <Link
        to='/'
        className='character-page__link'
        aria-label='Go back'
        title='Go back'
      >
        <IconArrowLeftBack aria-hidden='true' />
        GO BACK
      </Link>

      <div className='character-page__body'>
        <Loader
          text='Loading character card...'
          size='medium'
        />
      </div>
    </div>
  );
};
