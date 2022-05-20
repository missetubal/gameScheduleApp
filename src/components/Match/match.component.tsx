import moment from 'moment';
import React from 'react';
import {Calendar} from '../../assets/calendar';
import {Text, Title, View} from '../../style/general.style';
import {Line} from '../servers/server.style';
import {
  CalendarView,
  IconView,
  Image,
  MatchView,
  TextView,
} from './match.style';
import {MatchDataProps} from './match.types';

const Match: React.FC<MatchDataProps> = props => {
  const item = props.match;

  return (
    <>
      {item
        .filter(element => element !== undefined)
        .map((value, index) => (
          <MatchView key={index}>
            <IconView>
              <Image source={{uri: value?.server?.image}} />
            </IconView>
            <TextView>
              <Title
                fontSize={18}
                marginTop={16}
                textAlign={'left'}
                marginBottom={8}>
                {value?.server?.name}
              </Title>
              <Text textAlign={'left'}>{value?.server?.gameName}</Text>
              <CalendarView flexDirection={'row'}>
                <Calendar />
                <Text marginLeft={13}>
                  {moment(value?.day + '-' + value?.month, 'DD-MM').format(
                    'ddd',
                  ) +
                    ' ' +
                    moment(value?.day + '-' + value?.month, 'DD-MM').format(
                      'DD/MM',
                    ) +
                    ' às ' +
                    value?.hour +
                    ':' +
                    value?.minute}
                </Text>
              </CalendarView>
            </TextView>
            <Line />
          </MatchView>
        ))}
    </>
  );
};
export default Match;
