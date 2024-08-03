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
