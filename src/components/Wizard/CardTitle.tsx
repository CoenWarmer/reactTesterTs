import React from 'react';

import styled from 'styled-components/native';

interface Props {
  big?: boolean;
  title?: string;
}

const CardTitle = ({ title, big }: Props) => <Title big={big}>{title}</Title>;

export default CardTitle;

const Title = styled.Text`
  color: #000000;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: ${(props: Props) => (props.big ? '24px' : '14px')};
  text-transform: ${(props: Props) => (props.big ? 'uppercase' : 'none')};
`;
