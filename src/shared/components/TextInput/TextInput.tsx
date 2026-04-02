import type { ChangeEvent, ComponentType, SVGProps } from 'react';

import { classNames } from '@/shared/helpers';
import ClearSearch from '@/assets/icons/clearSearch.svg?react';

import './TextInput.scss';

export type TVariantTextInput = 'bordered' | 'underlined';

export interface ITextInputProps {
  value: string;
  variant?: TVariantTextInput;
  placeholder?: string;
  onChange?: (value: string) => void;
  IconComponent?: ComponentType<SVGProps<SVGSVGElement>>;
  id?: string;
}

export const TextInput = ({
  value,
  variant = 'bordered',
  placeholder,
  onChange,
  IconComponent,
  id
}: ITextInputProps) => {
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleClear = () => {
    onChange?.('');
  };

  return (
    <div
      className={classNames('text-input', {
        'text-input_bordered': variant === 'bordered',
        'text-input_underlined': variant === 'underlined'
      })}
    >
      <div className='text-input__wrapper'>
        {IconComponent && (
          <IconComponent
            aria-hidden='true'
            className='text-input__icon'
          />
        )}
        <input
          id={id}
          onChange={handleChangeName}
          value={value}
          placeholder={placeholder}
          className={classNames('text-input__input', {
            'text-input__input_underlined': variant === 'underlined'
          })}
          type='text'
        />

        {value.length > 0 && (
          <button
            type='button'
            className='text-input__clear'
            onClick={handleClear}
            aria-label='Clear search'
          >
            <ClearSearch aria-hidden='true' />
          </button>
        )}
      </div>
    </div>
  );
};
