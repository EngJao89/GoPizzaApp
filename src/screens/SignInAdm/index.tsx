import {Button} from '../../components/Button';
import {Container, Content, Subtitle, Title} from './styles';

export function SignInAdm() {
  return (
    <Container>
      <Title>Acesso Administrativo</Title>
      <Subtitle>Insira suas credenciais abaixo.</Subtitle>

      <Content>
        <Button color="SECONDARY" name="Entrar" />
      </Content>
    </Container>
  );
}
