import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 0;
  gap: 8px;
`;

export const Content = styled.View`
  flex: 1;
  gap: 8px;
`;

export const TotalContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-weight: bold;
  margin-left: 10px;
`;

export const Value = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN_2};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-weight: bold;
  margin-right: 10px;
`;
