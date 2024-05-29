import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container, StyledButton} from './styles';

export function ButtonIcon() {
  return (
    <Container>
      <StyledButton>
        <Icon name="left" size={20} color="black" />
      </StyledButton>
    </Container>
  );
}
