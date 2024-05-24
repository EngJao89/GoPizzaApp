import {styled} from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.RED_2};
  flex: 1;
  padding: 120px;
  padding-bottom: 0;
  gap: 8px;
`;

export const Image = styled.Image`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: bold;
  text-align: justify;
`;

export const Subtitle = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: 400;
  text-align: justify;
`;
