import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, StyledButton} from './styles';

export function ButtonIcon() {
  return (
    <Container>
      <StyledButton>
        <Icon name="chevron-left" size={20} color="black" />
      </StyledButton>
    </Container>
  );
}
