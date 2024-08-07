import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 0;
  gap: 8px;
`;

export const BackContent = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 48px;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 64px;
  width: 75%;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  color: ${({theme}) => theme.COLORS.GRAY_2};
  text-align: center;
  font-weight: bold;
  margin-left: 24px;
  margin-right: 16px;
  margin-top: 4px;
`;

export const Subtitle = styled.Text`
  flex: 1;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_3};
  text-align: center;
  font-weight: 400;
  margin-left: 24px;
  margin-right: 36px;
  margin-top: 12px;
`;
