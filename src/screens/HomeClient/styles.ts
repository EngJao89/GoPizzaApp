import {styled} from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.RED_2};
  flex: 1;
  padding: 120px;
  padding-bottom: 0;
  gap: 8px;
`;
