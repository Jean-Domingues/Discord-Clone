import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannnelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='chat-livre' />
      <ChannelButton channelName='rainbow six' />
      <ChannelButton channelName='lolzinho' />
      <ChannelButton channelName='csgo' />
      <ChannelButton channelName='Valorant' />
    </Container>
  );
};

export default ChannelList;
