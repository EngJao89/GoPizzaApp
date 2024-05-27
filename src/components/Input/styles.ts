import {styled} from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({theme}) => theme.COLORS.GRAY_1};
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
  color: ${({theme}) => theme.COLORS.GRAY_2};
`;
