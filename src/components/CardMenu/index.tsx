import {ImageSourcePropType, TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {priceFormatter} from '../../utils/currencyFormater';
import {
  Container,
  Content,
  Currency,
  Description,
  Image,
  Info,
  Label,
  Name,
  Price,
  Value,
} from './styles';

type Props = TouchableOpacityProps & {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description: string;
};

export function CardMenu({id, name, price, image, description}: Props) {
  const navigation = useNavigation();

  return (
    <Container key={id} onPress={() => navigation.navigate('details')}>
      <Image source={image} />

      <Content>
        <Info>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Info>

        <Price>
          <Label>A partir de </Label>
          <Currency>R$</Currency>
          <Value>{priceFormatter.format(price)}</Value>
        </Price>
      </Content>
    </Container>
  );
}
