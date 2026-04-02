import { type ComponentType, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import ArrowDown from '@/assets/icons/arrow-drop-down.svg?react';

import './Select.scss';

export interface TOption<T> {
  value: T;
  label: string;
}

export interface DefaultOptionComponentProps<T> {
  option: TOption<T>;
}

type TSelectSize = 'small' | 'medium';

export interface ISelectProps<T> {
  options: TOption<T>[];
  value: T | null;
  onChange: (value: T | null) => void;
  placeholder?: string;
  size?: TSelectSize;
  OptionComponent?: ComponentType<DefaultOptionComponentProps<T>>;
}

const DefaultOptionComponent = <T,>({
  option
}: DefaultOptionComponentProps<T>) => {
  return <span>{option?.label}</span>;
};

export const Select = <T,>({
  options,
  value,
  onChange,
  placeholder,
  size = 'medium',
  OptionComponent = DefaultOptionComponent
}: ISelectProps<T>) => {
  const [isOpenlist, setIsOpenList] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find((option) => option.value === value);

  const handleShowList = () => {
    setIsOpenList((prev) => !prev);
  };

  const handleOptionClick = (newValue: T) => {
    onChange(newValue);
    setIsOpenList(false);
  };

  // const handleClearClick = () => {
  //   onChange(null);
  // };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpenList(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={classNames(`select`, {
        select_small: size === 'small'
      })}
      ref={selectRef}
    >
      <button
        type='button'
        onClick={handleShowList}
        className={classNames('select__wrapper', {
          select__wrapper_small: size === 'small'
        })}
      >
        <p
          className={classNames('select__title', {
            select__title_small: size === 'small'
          })}
        >
          {selectedOption ? (
            <OptionComponent option={selectedOption} />
          ) : (
            placeholder
          )}
        </p>

        <ArrowDown
          className={classNames('select__arrow', {
            select__arrow_active: isOpenlist,
            select__arrow_small: size === 'small'
          })}
          aria-label='Toggle select'
        />
      </button>

      {/* {selectedOption && (
        <button
          className='select__clear'
          onClick={handleClearClick}
        >
          X
        </button>
      )} */}

      {isOpenlist && (
        <>
          <ol
            className={classNames('select__list', {
              select__list_small: size === 'small'
            })}
          >
            {options.map((option) => {
              return (
                <li
                  key={String(option.value)}
                  className={classNames('select__item', {
                    select__item_small: size === 'small'
                  })}
                  onClick={() => handleOptionClick(option.value)}
                >
                  <OptionComponent option={option} />
                </li>
              );
            })}
          </ol>
        </>
      )}
    </div>
  );
};
