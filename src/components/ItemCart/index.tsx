import lg from '../../assets/products/4-queijos.png';
import {
  Container,
  Content,
  Currency,
  Description,
  Image,
  Info,
  Name,
  Price,
  Value,
} from './styles';

export function ItemCart() {
  return (
    <Container>
      <Image source={lg} />

      <Content>
        <Info>
          <Name>4 Queijos</Name>
          <Description>
            Mussarela, provolone, parmesão e gorgonzola.
          </Description>
        </Info>

        <Price>
          <Currency>R$</Currency>
          <Value>49,90</Value>
        </Price>
      </Content>
    </Container>
  );
}
