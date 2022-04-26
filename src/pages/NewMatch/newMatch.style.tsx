import styled from 'styled-components/native';
import {Button} from '../../style/general.style';

export const ServerView = styled.TouchableOpacity`
  margin: 32px 24px 28px 24px;
  border: 1px solid #1b2565;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
`;
export const ServerText = styled.View`
  flex-direction: column;
  max-width: 210px;
  text-align: left;
  padding-top: 12px;
  padding-bottom: 12px;
  justify-content: left;
`;
export const Icon = styled.Image`
  width: 64px;
  height: 68px;
  background-color: #1b2565;
  border-radius: 8px;
`;

export const IconView = styled.ImageBackground`
  margin-right: 35px;
`;

export const Checklist = styled(Button)`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  border: 1px solid #1b2565;
  background-color: ${props => props.backgroundColor || '#1b2565'};
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const ModalServer = styled.Modal``;
export const ServerButton = styled.TouchableOpacity``;
export const Line = styled.View`
  position: absolute;
  right: 0;
  width: 267px;
  background-color: #1d2766;
  height: 1px;
`;
