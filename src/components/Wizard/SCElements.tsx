import styled, { css } from 'styled-components/native';

const cardElementStyles = css`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  width: 100%;
`;

const Header = styled.View`
  ${cardElementStyles};
  justify-content: space-between;
  min-height: 40px;
`;

const Content = styled.View`
  ${cardElementStyles};

  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.View`
  ${cardElementStyles};
  min-height: 40px;
  justify-content: center;
`;

const ErrorMessage = styled.Text`
  color: red;
  font-size: 10px;
`;

export { Header, Content, Footer, ErrorMessage };
