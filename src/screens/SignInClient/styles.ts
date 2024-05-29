import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.RED_2};
  padding-bottom: 0;
  gap: 8px;
`;

export const Image = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  width: 95%;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: bold;
  margin-left: 24px;
  margin-right: 16px;
  margin-top: 48px;
`;

export const ForgotButton = styled.TouchableOpacity`
  flex-direction: row-reverse;
  align-items: right;
  background-color: transparent;
  padding: 8px;
  margin-right: 24px;
`;

export const Label = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: 400;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-bottom: 48px;
  justify-content: center;
  align-items: center;
`;
