import styled, { css } from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: all 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background: var(--quinary);

    > div span {
      color: var(--white);
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

const iconCss = css`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const InviteIcon = styled(PersonAdd)`
  ${iconCss}
`;

export const SettingsIcon = styled(Settings)`
  ${iconCss}
  margin-left: 4px;
`;
