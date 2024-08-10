import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 0;
`;

export const BackContent = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 48px;
  margin-bottom: 8px;
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

export const Info = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 0px;
`;

export const ContentText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-weight: 400;
  margin-left: 8px;
  margin-right: 16px;
`;

export const SelectText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-weight: bold;
  text-align: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-bottom: 48px;
  justify-content: center;
  align-items: center;
`;
