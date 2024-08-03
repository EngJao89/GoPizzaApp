import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {ArrowLeft} from 'phosphor-react-native';

import {IconButton} from '../../components/IconButton';
import {BackContent, Container} from './styles';

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
    </Container>
  );
}
