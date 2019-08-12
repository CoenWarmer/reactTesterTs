import * as React from 'react';

import { Header, Content, Footer, ErrorMessage } from './SCElements';

import CardTitle from './CardTitle';
import Input from './Input';
import ButtonSubmit from '../ButtonSubmit';
import ButtonBack from '../ButtonBack';
import ButtonClear from '../ButtonClear';

import { Action } from './hooks/useBoxGuesser';

interface Props {
  dispatch: (action: Action) => void;
  errorMessages: {};
  valid: boolean;
  boxElements: string;
  isCurrentStep: boolean;
}

const Step2 = ({
  dispatch,
  errorMessages,
  valid,
  boxElements,
  isCurrentStep,
}: Props) => (
  <React.Fragment>
    <Header>
      <ButtonBack
        onPress={() => dispatch({ type: 'decreaseStepNumber' })}
        disabled={!isCurrentStep}
      />
      <ButtonClear
        label="Reset"
        disabled={!isCurrentStep}
        onPress={() => dispatch({ type: 'resetBoxElements' })}
      />
    </Header>
    <Content>
      <CardTitle title="What is inside?" />
      <Input
        value={boxElements}
        onChangeText={(value: string) =>
          dispatch({ type: 'enterBoxElements', value })
        }
      />
      <ButtonSubmit
        label="Guess!"
        disabled={!valid || !isCurrentStep}
        onPress={() => dispatch({ type: 'guess' })}
      />
    </Content>
    <Footer>
      <ErrorMessage>{errorMessages}</ErrorMessage>
    </Footer>
  </React.Fragment>
);

export default Step2;
