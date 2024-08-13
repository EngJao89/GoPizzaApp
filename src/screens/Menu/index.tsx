import {ImageSourcePropType, ScrollView} from 'react-native';

import {Container} from './styles';
import {ListHeader} from '../../components/ListHeader';
import {CardMenu} from '../../components/CardMenu';

import {MENU} from '../../data/menu';
import Divider from '../../components/Divider';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  description: string;
};

export function Menu() {
  return (
    <Container>
      <ListHeader />

      <ScrollView>
        {MENU.map(item => (
          <>
            <CardMenu key={item.id} {...item} />
            <Divider orientation="horizontal" />
          </>
        ))}
      </ScrollView>
    </Container>
  );
}
