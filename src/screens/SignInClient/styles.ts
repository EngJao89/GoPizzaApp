import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.RED_2};
  padding-bottom: 0;
  gap: 8px;
`;

export const BackContent = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 48px;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 54px;
  margin-right: 12px;
  width: 75%;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: bold;
  margin-left: 32px;
  margin-right: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
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

export const InputContent = styled.View`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({theme}) => theme.COLORS.WHITE};
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.COLORS.WHITE};
`;
