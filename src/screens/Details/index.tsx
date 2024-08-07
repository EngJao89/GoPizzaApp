import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';

import {BackContent, Container, Image, Subtitle, Title} from './styles';
import {IconButton} from '../../components/IconButton';

import pizza from '../../assets/products/margherita.png';

export function Details() {
  const {COLORS} = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <BackContent>
        <IconButton
          icon={ArrowLeft}
          size={24}
          color={COLORS.GRAY_3}
          weight="regular"
          onPress={() => navigation.goBack()}
        />
      </BackContent>

      <Image source={pizza} resizeMode="contain" />

      <Title>Margherita</Title>

      <Subtitle>Mussarela, manjericão fresco, parmesão e tomate.</Subtitle>
    </Container>
  );
}
