import styled from 'styled-components/native';

export const Container = styled.View`
  height: 92px;
  width: 100%;
  padding: 24px;
  margin-bottom: 5px;
`;
export const Content = styled.View`
  padding: 12px 0px;
  flex-direction: row;
`;
export const Image = styled.Image`
  width: 64px;
  height: 68px;
  border-radius: 8px;
`;

export const TextView = styled.View`
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  margin-bottom: 24px;
`;

export const ArrowView = styled.View`
  position: absolute;
  right: ${props => props.right || 2}%;
  top: ${props => props.top || 54}%;
`;

export const Line = styled.View`
  position: absolute;
  right: 0;
  width: 267px;
  background-color: #1d2766;
  height: 1px;
  top: 100px;
`;
