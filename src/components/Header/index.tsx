import React from 'react';

import styled from 'styled-components/native';
import styleGuide from '../../shared/styleGuide';

const Header = () => (
  <Container>
    <StatusBar />
    <HeaderBar>
      <Title>Who am I</Title>
    </HeaderBar>
  </Container>
);

export default Header;

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100px;
  z-index: 1;
`;

const StatusBar = styled.View`
  display: flex;
  width: 100%;
  height: 40px;
  background: #000000;
`;

const HeaderBar = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: ${styleGuide.primary};
`;
