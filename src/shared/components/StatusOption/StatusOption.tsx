import classNames from 'classnames';

import type { TStatus } from '@/shared/types';
import { STATUS_COLORS } from '@/shared/constants';

import './StatusOption.scss';

export interface IStatusOptionProps {
  // status?: 'alive' | 'dead' | 'unknown';
  status: TStatus;
}

export const StatusOption = ({ status = 'alive' }: IStatusOptionProps) => {
  const color = STATUS_COLORS[status];

  return <span className={classNames('status-option', color)}></span>;
};
