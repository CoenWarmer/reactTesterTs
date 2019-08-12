import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

interface Props {
  active: boolean;
  children: ReactNode;
}

const Card = ({ children, active }: Props) => (
  <Container active={active}>{children}</Container>
);

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  height: 200px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  border: solid 1px ${(props: Props) => (props.active ? 'red' : 'white')};
`;

export default Card;
