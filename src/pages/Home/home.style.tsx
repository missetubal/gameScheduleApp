import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Gradiente = styled(LinearGradient).attrs({
  colors: ['#0c123b', ' rgba(12, 18, 59, 0)'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  position: absolute;
  width: 375px;
  height: 127px;
  left: 0px;
  top: 479px;
  /* transform: matrix(1, 0, 0, -1, 0, 0); */
  //
`;

export const Images = styled.View`
  align-items: center;
`;

export const LoginImage = styled.Image``;

export const ButtonsView = styled.View`
  align-items: center;
`;
