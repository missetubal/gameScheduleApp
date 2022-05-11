import styled from 'styled-components/native';

export const MatchView = styled.TouchableOpacity`
  margin: 0px 24px 33px 10px;
  border-radius: 8px;
  flex-direction: row;
  height: 101px;
`;

export const IconView = styled.ImageBackground`
  margin: 20px;
`;

export const Image = styled.Image`
  width: 64px;
  height: 68px;
  border-radius: 8px;
`;

export const TextView = styled.View`
  text-align: left;
  flex-direction: ${props => props.flexDirection || 'column'};
`;

export const CalendarView = styled.View`
  text-align: left;
  flex-direction: row;
  align-items: center;
`;
