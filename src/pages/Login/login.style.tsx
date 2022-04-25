import styled from 'styled-components/native';
import {GeneralStyleProps} from '../../types/general.types';

export const Circle = styled.View<GeneralStyleProps>`
  position: absolute;
  background-color: ${props => props.backgroundColor || '#e51c44'};
  width: ${props => props.width || 297}px;
  height: ${props => props.heigh || 308}px;
  left: ${props => props.left || 170}px;
  top: ${props => props.heigh || -100}px;
  border-radius: ${props => props.borderRadius || 150}px;
`;
