import styled from 'styled-components/native';
import colors from '../../style/colors';
import {GeneralStyleProps} from '../../types/general.types';

export const Container = styled.TouchableOpacity<GeneralStyleProps>`
  background-color: ${props => props.backgroundColor || 'transparent'};
  width: 104px;
  height: 120px;
  margin-right: 10px;
  border-radius: 8px;
`;

export const Image = styled.Image`
  margin-top: ${props => props.marginTop || 20}px;
  margin-left: ${props => props.marginLeft || 28}px;
  margin-bottom: ${props => props.marginBottom || 16}px;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  width: ${props => props.width || 48}px;
  height: ${props => props.height || 48}px;
`;

export const Pressed = styled.View``;
