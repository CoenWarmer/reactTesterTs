import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import useBoxGuesser from './hooks/useBoxGuesser';
import useSlide from './hooks/useSlide';

const Wizard = () => {
  const {
    currentStep,
    guess,
    boxSize,
    boxElements,
    dispatch,
    valid,
    errorMessages,
  } = useBoxGuesser();

  const { translateX, setCardWidth } = useSlide(currentStep);

  return (
    <Container>
      <Scroller style={[{ transform: [{ translateX }] }]}>
        <Card onLayout={event => setCardWidth(event.nativeEvent.layout.width)}>
          <Step1
            dispatch={dispatch}
            errorMessages={errorMessages.step1}
            valid={valid.step1}
            boxSize={boxSize}
            isCurrentStep={currentStep === 1}
          />
        </Card>
        <Card>
          <Step2
            dispatch={dispatch}
            errorMessages={errorMessages.step2}
            valid={valid.step2}
            boxElements={boxElements}
            isCurrentStep={currentStep === 2}
          />
        </Card>
        <Card>
          <Step3 dispatch={dispatch} guess={guess} />
        </Card>
      </Scroller>
    </Container>
  );
};

export default Wizard;

const Container = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 60px 20px;
`;

const Card = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  height: 400px;
  width: 80%;
  margin: 20px;
  padding: 8px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

const Scroller = styled(Animated.View)`
  flex-direction: row;
`;
