import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import styleGuide from './src/shared/styleGuide';

import Header from './src/components/Header';
import Wizard from './src/components/Wizard';

const App = () => (
  <>
    <StatusBar backgroundColor="#000000" barStyle="light-content" />
    <Header />
    <StyledScrollView contentInsetAdjustmentBehavior="automatic">
      <Container>
        <Wizard />
      </Container>
    </StyledScrollView>
  </>
);

export default App;

const StyledScrollView = styled.ScrollView`
  display: flex;
  height: 100%;
  background: ${styleGuide.primary};
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
