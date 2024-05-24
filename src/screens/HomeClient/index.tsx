import bg from '../../assets/bg-preview .png';
import {Button} from '../../components/Button';
import {Container, Content, Image, Subtitle, Title} from './styles';

export function HomeClient() {
  return (
    <Container>
      <Image source={bg} resizeMode="contain" />
      <Content>
        <Title>GoPizza</Title>
        <Subtitle>A sua comanda de pedidos digital</Subtitle>
      </Content>
      <Content>
        <Button style={{width: 124}} color="SECONDARY" name="Nº da mesa" />
        <Button style={{width: 224}} name="Entrar" />
      </Content>
    </Container>
  );
}
