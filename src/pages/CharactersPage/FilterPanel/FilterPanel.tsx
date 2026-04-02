import { useState } from 'react';

import type { TStatus } from '@/shared/types';
import { Select, StatusOption } from '@/shared/components';
import IconSearchImg from '@/assets/icons/search.svg?react';
import { TextInput } from '@/shared/components/TextInput/TextInput';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';

import './FilterPanel.scss';

export const Filterpanel = () => {
  const [name, setName] = useState<string>('');
  const [species, setSpecies] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [status, setStatus] = useState<TStatus | null>(null);

  const handleNameChange = (newValue: string) => {
    setName(newValue);
  };

  const handleSpeciesChange = (newValue: string | null) => {
    setSpecies(newValue);
  };

  const handleGenderChange = (newValue: string | null) => {
    setGender(newValue);
  };

  const handleStatusChange = (newValue: TStatus | null) => {
    setStatus(newValue);
  };

  return (
    <div className='filter-panel'>
      <TextInput
        placeholder='Filter by name...'
        value={name}
        onChange={handleNameChange}
        IconComponent={IconSearchImg}
        variant='bordered'
        id='filter-name'
      />

      <Select
        options={SPECIES_OPTIONS}
        value={species}
        onChange={handleSpeciesChange}
        placeholder='Species'
      />
      <Select
        options={GENDER_OPTIONS}
        value={gender}
        onChange={handleGenderChange}
        placeholder='Gender'
      />

      <Select
        options={STATUS_OPTIONS}
        value={status}
        onChange={handleStatusChange}
        placeholder='Status'
        size='small'
        OptionComponent={({ option }) => {
          return (
            <>
              <span>{option.label}</span>
              <StatusOption status={option.value} />
            </>
          );
        }}
      />
    </div>
  );
};
