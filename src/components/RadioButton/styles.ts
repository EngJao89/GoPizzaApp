import {styled, css} from 'styled-components/native';

export type RadioButtonProps = {
  selected: boolean;
};

export const Container = styled.TouchableOpacity<RadioButtonProps>`
  width: 104px;
  height: 82px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px;

  ${({theme, selected}) => css`
    border: 1px solid ${selected ? theme.COLORS.GREEN_2 : theme.COLORS.SHAPE};
    background-color: ${selected ? theme.COLORS.GREEN_1 : theme.COLORS.WHITE};
  `};
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-weight: bold;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-weight: bold;
    color: ${theme.COLORS.SECONDARY_900};
  `};
`;
export const Price = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-weight: bold;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-weight: bold;
    color: ${theme.COLORS.GREEN_2};
  `};
`;

export const Radio = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.COLORS.SECONDARY_900};
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
`;

export const Selected = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.COLORS.GREEN_2};
`;
