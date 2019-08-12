import { useReducer } from 'react';
import { validateBoxSize, validateBoxElements } from '../helpers/validators';
import { guessMissingNumber } from '../helpers/guessMissingNumber';

export interface Action {
  type: string;
  value?: string;
}

interface State {
  boxSize: string;
  boxElements: string;
  currentStep: number;
  valid: {
    step1: boolean;
    step2: boolean;
  };
  errorMessages: {};
  guess: number | undefined;
}

const initialState: any = {
  boxSize: '',
  boxElements: '',
  currentStep: 1,
  valid: {
    step1: false,
    step2: false,
  },
  errorMessages: {},
  guess: undefined,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'resetBoxElements':
      return {
        ...state,
        boxElements: '',
        errorMessages: {
          ...state.errorMessages,
          step2: '',
        },
      };
    case 'enterBoxSize':
      const { valid: step1Valid, errorMessage: step1 } = validateBoxSize(
        String(action.value)
      );

      const enterBoxSizeState = {
        ...state,
        boxSize: action.value,
        valid: { step1: true, step2: false },
        errorMessages: {
          step1: '',
        },
      };
      return step1Valid
        ? enterBoxSizeState
        : {
            ...enterBoxSizeState,
            valid: { step1: false, step2: false },
            errorMessages: {
              step1,
            },
          };
    case 'enterBoxElements':
      const { valid: step2Valid, errorMessage: step2 } = validateBoxElements(
        String(action.value),
        Number(state.boxSize)
      );

      const enterBoxElementsState = {
        ...state,
        boxElements: action.value,
        valid: { step1: true, step2: true },
        errorMessages: {
          step2,
        },
      };

      return step2Valid
        ? enterBoxElementsState
        : {
            ...enterBoxElementsState,
            valid: { step1: true, step2: false },
          };
    case 'increaseStepNumber':
      return {
        ...state,
        currentStep: state.currentStep + 1 <= 3 ? state.currentStep + 1 : 3,
      };
    case 'decreaseStepNumber':
      return {
        ...state,
        currentStep: state.currentStep - 1 > 0 ? state.currentStep - 1 : 1,
      };
    case 'setStepNumber':
      return {
        ...state,
        currentStep: action.value,
      };
    case 'guess':
      const guess = guessMissingNumber(state.boxElements);
      return {
        ...state,
        currentStep: 3,
        guess,
      };
    default:
      throw new Error();
  }
}

const useBoxGuesser = () => {
  const [
    { guess, boxSize, boxElements, currentStep, valid, errorMessages },
    dispatch,
  ] = useReducer(reducer, initialState);

  return {
    boxSize,
    boxElements,
    currentStep,
    guess,
    errorMessages,
    dispatch,
    valid,
  };
};

export default useBoxGuesser;
