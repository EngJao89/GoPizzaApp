import {styled} from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.RED_2};
  flex: 1;
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

export const Content = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: bold;
  text-align: justify;
  margin-left: 32px;
  margin-right: 8px;
`;

export const Subtitle = styled.Text`
  flex: 1;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: 400;
  margin-left: 24px;
  margin-right: 36px;
  text-align: justify;
`;

export const FooterContent = styled.View`
  flex-direction: row;
  margin-bottom: 48px;
  justify-content: center;
  align-items: center;
`;
