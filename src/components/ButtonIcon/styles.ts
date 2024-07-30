import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: left;
  align-items: left;
  margin-left: 24px;
  margin-top: 60px;
`;

export const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 16px;
  border-radius: 16px;
  border: 1px solid;
  border-color: ${({theme}) => theme.COLORS.GRAY_1};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 10px;
`;
