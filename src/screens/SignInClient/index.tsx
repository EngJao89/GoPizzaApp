import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';

import {Button} from '../../components/Button';
import {IconButton} from '../../components/IconButton';
import {
  BackContent,
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

import bg from '../../assets/home-logo.png';

export function SignInClient() {
  const {COLORS} = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <BackContent>
        <IconButton
          icon={ArrowLeft}
          size={24}
          color={COLORS.WHITE}
          weight="regular"
          onPress={() => navigation.goBack()}
        />
      </BackContent>

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
        <Button
          style={{width: 370}}
          name="Entrar"
          onPress={() => navigation.navigate('menu')}
        />
      </Content>

      <Footer>
        <Button
          style={{width: 370}}
          name="Cadastrar"
          color="SECONDARY"
          onPress={() => navigation.navigate('signupclient')}
        />
      </Footer>
    </Container>
  );
}
