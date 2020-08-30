import React, { useRef, useEffect } from 'react';

import { Mention } from '../ChannelMessage/styles';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=> {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(40).keys()).map((n) => (
          <ChannelMessage author='Jean Domingues' date='28/08/2020' content='Quer fechar squad?' />
        ))}

        <ChannelMessage
          author='João Felipe Camargo'
          date='28/08/2020'
          content={
            <>
              <Mention>@Jean_Domingues</Mention> Bora joga
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
