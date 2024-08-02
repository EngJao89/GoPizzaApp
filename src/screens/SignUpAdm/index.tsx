import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';

import {Button} from '../../components/Button';
import {IconButton} from '../../components/IconButton';
import {Input} from '../../components/Input';
import {BackContent, Container, Content, Subtitle, Title} from './styles';

export function SignUpAdm() {
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

      <Title>Cadastro Administrativo</Title>
      <Subtitle>Insira seus dados abaixo.</Subtitle>

      <Input placeholder="Nome" />

      <Input placeholder="Sobrenome" />

      <Input placeholder="Email" />

      <Input placeholder="Telefone" />

      <Input placeholder="Senha" />

      <Input placeholder="Confirme Senha" />

      <Content>
        <Button style={{width: 370}} color="SECONDARY" name="Enviar" />
      </Content>
    </Container>
  );
}
