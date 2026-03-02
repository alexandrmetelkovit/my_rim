import { Link } from 'react-router-dom';

import LogoIcon from '../../../assets/icons/logo/logo-white_theme.svg?react';
import ModeIcon from '../../../assets/icons/theme/mode-white_theme.svg?react';
import LanguageIcon from '../../../assets/icons/language-icon/languageRU-white_theme.svg?react';

import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper container'>
        <Link
          to='/character'
          aria-label='Go to homepage'
          title='Go to homepage'
        >
          <LogoIcon
            className='header__logo'
            aria-hidden='true'
          />
          <span className='visually-hidden'>Home page</span>
        </Link>

        <div className='header__actions'>
          <button
            className='header__actions-button'
            aria-label='Switch to dark mode'
            title='Switch to dark mode'
          >
            <ModeIcon
              className='header__actions-button-mode'
              aria-hidden='true'
            />
          </button>
          <button
            className='header__actions-button'
            aria-label='Change language'
            title='Change language'
          >
            <LanguageIcon
              className='header__actions-button-language'
              aria-hidden='true'
            />
          </button>
        </div>
      </div>
    </header>
  );
};
