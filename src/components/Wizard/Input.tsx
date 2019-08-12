import React from 'react';
import styled from 'styled-components/native';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

const Input = ({ value, onChangeText }: Props) => (
  <StyledInput value={value} onChangeText={onChangeText} />
);
export default Input;

const StyledInput = styled.TextInput`
  border: solid 1px #999999;
  padding: 8px;
  width: 140px;
  margin-bottom: 30px;
`;
