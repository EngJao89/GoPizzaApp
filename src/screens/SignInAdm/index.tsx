import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';

import {Button} from '../../components/Button';
import {IconButton} from '../../components/IconButton';
import {Input} from '../../components/Input';
import {
  BackContent,
  Container,
  Content,
  Footer,
  ForgotButton,
  Label,
  Subtitle,
  Title,
} from './styles';

export function SignInAdm() {
  const {COLORS} = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <BackContent>
        <IconButton
          icon={ArrowLeft}
          size={24}
          color={COLORS.GRAY_2}
          weight="regular"
          onPress={() => navigation.goBack()}
        />
      </BackContent>

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

      <Footer>
        <Button style={{width: 370}} color="SECONDARY" name="Cadastrar" />
      </Footer>
    </Container>
  );
}
