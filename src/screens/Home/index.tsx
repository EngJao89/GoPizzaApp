import {useNavigation} from '@react-navigation/native';

import {Button} from '../../components/Button';
import {
  Container,
  Content,
  FooterContent,
  Image,
  Subtitle,
  Title,
} from './styles';
import bg from '../../assets/home-logo.png';

export function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={bg} resizeMode="contain" />
      <Content>
        <Title>GoPizza</Title>
        <Subtitle>A sua comanda de pedidos digital</Subtitle>
      </Content>
      <Content>
        {/* <Button style={{width: 124}} color="SECONDARY" name="Nº da mesa" /> */}
        <Button
          style={{width: 348}}
          name="Entrar como Cliente"
          onPress={() => navigation.navigate('client')}
        />
      </Content>
      <FooterContent>
        <Button
          style={{width: 348}}
          color="SECONDARY"
          name="Entrar como Admin"
          onPress={() => navigation.navigate('adm')}
        />
      </FooterContent>
    </Container>
  );
}
