import styled from 'styled-components/native';
import {GeneralStyleProps} from '../types/general.types';
import colors from './colors';

export const View = styled.ScrollView<GeneralStyleProps>`
  background-color: ${props => props.color || '#0c123b'};
  flex: 1;
  padding-top: ${props => props.paddingTop || 50}px;
  padding-left: ${props => props.paddingLeft || 0}px;
  padding-right: ${props => props.paddingRight || 0}px;
  /* align-items: ${props => props.alignItems || ''}; */
`;

export const Text = styled.Text<GeneralStyleProps>`
    color: ${props => props.color || '#dde3f0'}
  text-align: ${props => props.textAlign || 'center'};
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  font-size: ${props => props.fontSize || 15}px;
  font-weight: ${props => props.fontWeight || 400};
  line-height: 25px;
`;

export const Button = styled.TouchableOpacity<GeneralStyleProps>`
  background-color: ${props => props.backgroundColor || 'transparent'}
  text-align: ${props => props.textAlign || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  font-size: ${props => props.fontSize || 15}px;
  font-weight: ${props => props.fontWeight || 400};
  height: ${props => props.height || 58}px;
  width:${props => props.width || 274}px;
  border-radius: ${props => props.borderRadius || 8}px;
`;

export const Title = styled.Text<GeneralStyleProps>`
  color: ${props => props.color || '#dde3f0'};
  font-weight: ${props => props.fontWeight || 700};
  font-size: ${props => props.fontSize || 40}px;
  text-align: ${props => props.textAlign || 'center'};
  margin-top: ${props => props.marginTop || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const TextInput = styled.TextInput`
  border-bottom-width: ${props => props.borderBottomWidth || 1}px;
  border-color: ${props => props.borderColor || colors.white};
  margin-top: ${props => props.marginTop || 10}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 10}px;
  margin-right: ${props => props.marginRight || 50}px;
  font-size: ${props => props.fontSize || 16}px;
  height: ${props => props.height || 40}px;
  color: ${props => props.color || colors.white};
  padding-left: ${props => props.paddingLeft || 5}px;
`;
