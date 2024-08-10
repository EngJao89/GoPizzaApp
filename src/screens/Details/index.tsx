import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  BackContent,
  Container,
  ContentText,
  Footer,
  Image,
  Info,
  SelectContent,
  SelectText,
  Subtitle,
  Title,
} from './styles';
import {PIZZA_TYPES} from '../../utils/pizzaTypes';
import pizza from '../../assets/products/margherita.png';

import {Button} from '../../components/Button';
import Divider from '../../components/Divider';
import {IconButton} from '../../components/IconButton';
import {RadioButton} from '../../components/RadioButton';

export function Details() {
  const {COLORS} = useTheme();
  const navigation = useNavigation();

  const [size, setSize] = useState('');

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
        <ContentText>50 Min</ContentText>
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

      <SelectContent>
        {PIZZA_TYPES.map(item => (
          <RadioButton
            key={item.id}
            price={item.price}
            title={item.name}
            onPress={() => setSize(item.id)}
            selected={size === item.id}
          />
        ))}
      </SelectContent>

      <Footer>
        <Button
          style={{width: 370}}
          name="Adicionar Pedido"
          color="SECONDARY"
        />
      </Footer>
    </Container>
  );
}
