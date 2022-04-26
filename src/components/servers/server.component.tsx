import React from 'react';
import {ArrowRight} from '../../assets/arrowRight';
import {Text, Title} from '../../style/general.style';
import {
  ArrowView,
  Container,
  Content,
  Image,
  Line,
  TextView,
} from './server.style';
import {ServerProps} from './server.types';

// import { Container } from './styles';

const ServerComponent: React.FC<ServerProps> = props => {
  return (
    <Container>
      <Content>
        <Image source={{uri: props.image}} />
        <TextView>
          <Title textAlign={'left'} fontSize={18}>
            {props.name}
          </Title>
          <Text textAlign={'left'} color={'#ABB1CC'} fontSize={13}>
            {props.gameName}
          </Text>
        </TextView>
        <ArrowView>
          <ArrowRight />
        </ArrowView>
      </Content>
      <Line />
    </Container>
  );
};

export default ServerComponent;
