import moment from 'moment';
import React from 'react';
import {Calendar} from '../../assets/calendar';
import {Text, Title} from '../../style/general.style';
import {Line} from '../servers/server.style';
import {
  CalendarView,
  IconView,
  Image,
  MatchView,
  TextView,
} from './match.style';
import {MatchProps} from './match.types';

// import { Container } from './styles';

const Match: React.FC<MatchProps> = props => {
  //   moment.locale('pt-br');
  console.log(props);
  const date = moment(props.day + '-' + props.month, 'DD-MM');
  const hour = moment(props.hour + ':' + props.minute, 'hh:ss');
  console.log(date, hour);
  return (
    <MatchView>
      <IconView>
        <Image source={{uri: props.server.image}} />
      </IconView>
      <TextView>
        <Title fontSize={18} marginTop={16} textAlign={'left'} marginBottom={8}>
          {props.server.name}
        </Title>
        <Text textAlign={'left'}>{props.server.gameName}</Text>
        <CalendarView flexDirection={'row'}>
          <Calendar />
          <Text marginLeft={13}>
            {date.format('ddd') +
              ' ' +
              date.format('DD/MM') +
              ' às ' +
              props.hour +
              ':' +
              props.minute}{' '}
          </Text>
        </CalendarView>
      </TextView>
      <Line />
    </MatchView>
  );
};

export default Match;
