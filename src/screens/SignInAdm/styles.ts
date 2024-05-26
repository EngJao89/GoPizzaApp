import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 0;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-weight: bold;
  margin-left: 24px;
  margin-right: 16px;
  margin-top: 128px;
`;

export const Subtitle = styled.Text`
  flex: 1;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-weight: 400;
  margin-left: 24px;
  margin-right: 36px;
  margin-top: 12px;
`;

export const Content = styled.View`
  margin: 24px;
`;
