import styled from 'styled-components/native';

export const Header = styled.View`
  padding: 25px;
  flex-direction: row;
  margin-right: 100px;
  margin-bottom: 20px;
`;

export const LeftHeader = styled.View`
  max-width: 60px;
  margin-right: 20px;
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 8px;
`;

export const Center = styled.View`
  max-width: 70%;
  line-height: 31px;
`;

export const NameTitle = styled.View`
  flex-direction: row;
`;

export const CategoryList = styled.ScrollView`
  padding-left: ${props => props.paddingLeft || 24}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const TextView = styled.View`
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 40px;
  justify-content: space-between;
`;
