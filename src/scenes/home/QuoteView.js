import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: blue;
  height: 300;
  width: 100;
`;

const Quote = styled.h4`
  color: white;
  font-size: 100;
`;

const Author = styled.p`
  color: 'white';
`;

export class QuoteView extends Component {
  render() {
    return (
      <Container>
        <Quote>"人は時に、健気に生きているだけで、誰かを救っていることがある。"</Quote>
        <Author>~東野 圭吾</Author>
      </Container>
    );
  }
}
