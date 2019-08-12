import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styleGuide from '../../shared/styleGuide';

interface Props {
  disabled?: boolean;
  onPress: () => void;
}

const ButtonBack = ({ disabled, onPress }: Props) => (
  <Button onPress={!disabled ? onPress : undefined} disabled={disabled}>
    <Icon name="arrow-left" size={16} color={styleGuide.primary} />
  </Button>
);

export default ButtonBack;

const Button = styled.TouchableOpacity`
  opacity: ${props => (props.disabled ? '0' : '1')};
`;
