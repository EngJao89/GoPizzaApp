import {styled, css} from 'styled-components/native';

export type ButtonColorStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  color?: ButtonColorStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  width: '100%';
  padding: 16px;
  margin: 4px;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${({theme, color = 'PRIMARY'}) =>
    color === 'PRIMARY' ? theme.COLORS.RED_2 : theme.COLORS.WHITE};
  background-color: ${({theme, color = 'PRIMARY'}) =>
    color === 'PRIMARY' ? theme.COLORS.RED_1 : theme.COLORS.RED_2};

  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({theme}) => theme.COLORS.GRAY_3};
    opacity: 0.5;
  }
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-weight: bold;
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    text-transform: uppercase;
  `}
`;
