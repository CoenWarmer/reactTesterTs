import * as React from 'react';

import { Header, Content, Footer, ErrorMessage } from './SCElements';

import WizardTitle from './CardTitle';
import WizardInput from './Input';
import ButtonSubmit from '../ButtonSubmit';

import { Action } from './hooks/useBoxGuesser';

interface Props {
  dispatch: (action: Action) => void;
  errorMessages: {};
  valid: boolean;
  boxSize: string;
  isCurrentStep: boolean;
}

const Step1 = ({ dispatch, errorMessages, valid, boxSize }: Props) => (
  <React.Fragment>
    <Header />
    <Content>
      <WizardTitle title="How big are you?" />
      <WizardInput
        value={String(boxSize)}
        onChangeText={value => dispatch({ type: 'enterBoxSize', value })}
      />
      <ButtonSubmit
        label="Next"
        disabled={!valid}
        onPress={() => dispatch({ type: 'increaseStepNumber' })}
      />
    </Content>
    <Footer>
      <ErrorMessage>{errorMessages}</ErrorMessage>
    </Footer>
  </React.Fragment>
);

export default Step1;
