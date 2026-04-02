import LoaderMedium from '@/assets/images/loader/loader-medium.png';

import './Loader.scss';

type TLoaderSize = 'small' | 'medium';

interface TLoaderProps {
  size: TLoaderSize;
  text?: string;
}

export const Loader = ({ text, size }: TLoaderProps) => {
  return (
    <div className={`loader loader--${size}`}>
      <img
        className='loader__image'
        src={LoaderMedium}
        alt='Loading...'
        loading='lazy'
      />
      {!!text && <span className='loader__text'>{text}</span>}
    </div>
  );
};
