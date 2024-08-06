import {ImageSourcePropType, TouchableOpacityProps} from 'react-native';
import {Container, Content, Description, Image, Info, Name} from './styles';

type Props = TouchableOpacityProps & {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description: string;
};

export function CardMenu({id, name, price, image, description}: Props) {
  return (
    <Container key={id}>
      <Image source={image} />

      <Content>
        <Info>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Info>
      </Content>
    </Container>
  );
}
