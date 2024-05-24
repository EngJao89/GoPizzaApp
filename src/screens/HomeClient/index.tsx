import bg from '../../assets/bg-preview .png';
import {Container, Content, Image, Subtitle, Title} from './styles';

export function HomeClient() {
  return (
    <Container>
      <Image source={bg} resizeMode="contain" />
      <Content>
        <Title>GoPizza</Title>
        <Subtitle>A sua comanda de pedidos digital</Subtitle>
      </Content>
    </Container>
  );
}
