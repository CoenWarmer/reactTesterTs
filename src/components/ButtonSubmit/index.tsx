import React from 'react';
import styled from 'styled-components/native';

import styleGuide from '../../shared/styleGuide';

interface Props {
  label: string;
  disabled: boolean;
  onPress: () => void;
}

const ButtonSubmit = ({ label, disabled, onPress }: Props) => (
  <Button disabled={disabled} onPress={!disabled ? onPress : undefined}>
    <Label>{label}</Label>
  </Button>
);

export default ButtonSubmit;

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: ${styleGuide.primary};
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  min-width: 100px;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const Label = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;
