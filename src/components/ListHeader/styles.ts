import {styled} from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.RED_2};
  padding: 28px 32px;

  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-weight: bold;
  margin-top: 48px;
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.XL};
  font-weight: bold;
  margin-top: 24px;
`;
