import bg from '../../assets/home-logo.png';
import {Button} from '../../components/Button';
import {Container, Footer, ForgotButton, Image, Label, Title} from './styles';

export function SignInClient() {
  return (
    <Container>
      <Image source={bg} resizeMode="contain" />
      <Title>Login</Title>

      <ForgotButton>
        <Label>Esqueci Minha Senha</Label>
      </ForgotButton>

      <Footer>
        <Button style={{width: 348}} name="Entrar" />
      </Footer>
    </Container>
  );
}
