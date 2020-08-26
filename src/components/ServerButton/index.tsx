import React from 'react';

import { Button } from './styles';
import Logo from '../../assets/logo-rocketseat.svg'

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotification, mentions }) => {
  return (
    <Button
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      { isHome &&  <img src={Logo} alt="rocketseat"/> }
    </Button>
  )
};

export default ServerButton;
