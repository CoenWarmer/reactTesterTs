import * as React from 'react';
import styled from 'styled-components/native';

import styleGuide from '../../shared/styleGuide';
import { Header, Content, Footer } from './SCElements';

import WizardTitle from './CardTitle';
import ButtonBack from '../ButtonBack';
import ButtonClear from '../ButtonClear';

import { Action } from './hooks/useBoxGuesser';

interface Props {
  dispatch: (action: Action) => void;
  guess: string;
}

const Step3 = ({ dispatch, guess }: Props) => (
  <React.Fragment>
    <Header>
      <ButtonBack onPress={() => dispatch({ type: 'decreaseStepNumber' })} />
      <ButtonClear
        label="Restart"
        onPress={() => dispatch({ type: 'reset' })}
      />
    </Header>
    <Content>
      <WizardTitle big title="You are" />
      <Guess>{guess}</Guess>
    </Content>
    <Footer />
  </React.Fragment>
);

export default Step3;

const Guess = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${styleGuide.primary};
`;
