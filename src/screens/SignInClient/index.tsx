import bg from '../../assets/home-logo.png';
import {Button} from '../../components/Button';
import {
  Container,
  Content,
  Footer,
  ForgotButton,
  Image,
  InputContent,
  Label,
  TextInput,
  Title,
} from './styles';

export function SignInClient() {
  return (
    <Container>
      <Image source={bg} resizeMode="contain" />
      <Title>Login</Title>

      <InputContent>
        <TextInput placeholder="Email" />
      </InputContent>

      <InputContent>
        <TextInput placeholder="Senha" />
      </InputContent>

      <ForgotButton>
        <Label>Esqueci Minha Senha</Label>
      </ForgotButton>

      <Content>
        <Button style={{width: 370}} name="Entrar" />
      </Content>

      <Footer>
        <Button style={{width: 370}} name="Cadastrar" color="SECONDARY" />
      </Footer>
    </Container>
  );
}
