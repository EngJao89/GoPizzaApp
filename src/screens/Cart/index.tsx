import {CartHeader} from '../../components/CartHeader';
import Divider from '../../components/Divider';
import {ItemCart} from '../../components/ItemCart';
import {Container, Content, Label, TotalContent, Value} from './styles';

export function Cart() {
  return (
    <Container>
      <CartHeader />
      <Content>
        <ItemCart />
        <Divider orientation="horizontal" />
        <ItemCart />
        <Divider orientation="horizontal" />
        <TotalContent>
          <Label>Total da Conta</Label>
          <Value>R$ 99,80</Value>
        </TotalContent>
        <Divider orientation="horizontal" />
      </Content>
    </Container>
  );
}
