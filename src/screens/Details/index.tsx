import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  BackContent,
  Container,
  ContentText,
  Image,
  Info,
  SelectText,
  Subtitle,
  Title,
} from './styles';
import {IconButton} from '../../components/IconButton';

import pizza from '../../assets/products/margherita.png';
import Divider from '../../components/Divider';

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

      <Info>
        <Icon name="stopwatch" color={COLORS.RED_1} size={24} />
        <ContentText>30 Min</ContentText>
        <Divider orientation="vertical" />
        <Icon
          name="fire-alt"
          color={COLORS.RED_1}
          size={24}
          style={{marginLeft: 16}}
        />
        <ContentText>880 kcal</ContentText>
      </Info>

      <SelectText>Selecione um tamanho</SelectText>
    </Container>
  );
}
