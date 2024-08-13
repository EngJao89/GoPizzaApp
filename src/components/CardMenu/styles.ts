import {styled} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 24px;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Content = styled.View`
  flex: 1;
  gap: 8px;
`;

export const Info = styled.View`
  gap: 4px;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_3};
  font-size: ${({theme}) => theme.FONT_SIZE.XS};
  font-weight: 400;
`;

export const Image = styled.Image`
  margin-right: 4px;
  height: 96px;
  width: 96px;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_3};
  font-size: ${({theme}) => theme.FONT_SIZE.XS};
  font-weight: 400;
`;

export const Currency = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN_2};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-weight: bold;
`;

export const Value = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN_2};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-weight: bold;
`;
