import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 92px;
  width: 100%;
  padding: 24px;
  margin-bottom: 5px;

  /* align-items: center; */
`;
export const Content = styled.View`
  padding: 12px 0px;
  flex-direction: row;
  /* border-bottom: 1px solid red; */
  /* border: 1px solid white; */
  /* justify-content: space-between; */
`;
export const Image = styled.Image`
  width: 64px;
  height: 68px;
`;

export const TextView = styled.View`
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  margin-bottom: 24px;
`;

export const ArrowView = styled.View`
  position: absolute;
  right: 2%;
  top: 54%;
`;

export const Line = styled.View`
  position: absolute;
  right: 0;
  width: 267px;
  background-color: #1d2766;
  height: 1px;
  top: 100px;
`;
