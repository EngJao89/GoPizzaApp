import bg from '../../assets/home-logo.png';
import {Button} from '../../components/Button';
import {
  Container,
  Content,
  FooterContent,
  Image,
  Subtitle,
  Title,
} from './styles';

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
      <FooterContent>
        <Button
          style={{width: 348}}
          color="SECONDARY"
          name="Entrar como Admin"
        />
      </FooterContent>
    </Container>
  );
}
