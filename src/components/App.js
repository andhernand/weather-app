import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const Container = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <React.Fragment>
      <div role="banner"><h1>This is the header</h1></div>
      <div role="navigation">This is the nav</div>
      <div role="main">This is the main</div>
      <div role="contentinfo">This is the footer</div>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </React.Fragment>
  );
};

export default App;
