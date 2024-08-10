import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
  Container,
  Title,
  Radio,
  Selected,
  RadioButtonProps,
  Price,
} from './styles';

type Props = TouchableOpacityProps &
  RadioButtonProps & {
    price: string;
    title: string;
  };

export function RadioButton({price, title, selected = false, ...rest}: Props) {
  return (
    <Container selected={selected} {...rest}>
      <Radio>{selected && <Selected />}</Radio>

      <Title>{title}</Title>
      <Price>{price}</Price>
    </Container>
  );
}
