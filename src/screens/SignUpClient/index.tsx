import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';

import {
  BackContent,
  Container,
  Footer,
  InputContent,
  TextInput,
  Title,
} from './styles';

import {Button} from '../../components/Button';
import {IconButton} from '../../components/IconButton';

export function SignUpClient() {
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

      <Title>Cadastro de Clientes</Title>

      <InputContent>
        <TextInput placeholder="Nome" />
      </InputContent>

      <InputContent>
        <TextInput placeholder="Sobrenome" />
      </InputContent>

      <InputContent>
        <TextInput placeholder="Email" />
      </InputContent>

      <InputContent>
        <TextInput placeholder="Telefone" />
      </InputContent>

      <InputContent>
        <TextInput placeholder="Senha" />
      </InputContent>

      <InputContent>
        <TextInput placeholder="Confirmar senha" />
      </InputContent>

      <Footer>
        <Button style={{width: 370}} name="Enviar" />
      </Footer>
    </Container>
  );
}
