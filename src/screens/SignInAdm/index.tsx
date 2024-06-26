import {Button} from '../../components/Button';
import {ButtonIcon} from '../../components/ButtonIcon';
import {Input} from '../../components/Input';
import {
  Container,
  Content,
  ForgotButton,
  Label,
  Subtitle,
  Title,
} from './styles';

export function SignInAdm() {
  return (
    <Container>
      <ButtonIcon />

      <Title>Acesso Administrativo</Title>
      <Subtitle>Insira suas credenciais abaixo.</Subtitle>

      <Input placeholder="Email" />

      <Input placeholder="Senha" />

      <ForgotButton>
        <Label>Esqueci Minha Senha</Label>
      </ForgotButton>

      <Content>
        <Button color="SECONDARY" name="Entrar" />
      </Content>
    </Container>
  );
}
