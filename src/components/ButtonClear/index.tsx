import React from 'react';
import styled from 'styled-components/native';

import styleGuide from '../../shared/styleGuide';

interface Props {
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

const ButtonClear = ({ label, disabled, onPress }: Props) => (
  <Button onPress={!disabled ? onPress : undefined} disabled={disabled}>
    <Label>{label}</Label>
  </Button>
);

export default ButtonClear;

const Button = styled.TouchableOpacity`
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const Label = styled.Text`
  color: ${styleGuide.primary};
  font-weight: bold;
`;
