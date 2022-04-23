import React from 'react';
import colors from '../../style/colors';
import {Text, Title, View} from '../../style/general.style';
import {Center, Header, Icon, LeftHeader, NameTitle} from './dash.style';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <View>
      <Header>
        <LeftHeader>
          <Icon />
        </LeftHeader>
        <Center>
          <NameTitle>
            <Title fontSize={20} fontWeight={500}>
              Olá,{' '}
            </Title>
            <Title fontSize={20}>{username}</Title>
          </NameTitle>
          <Text color={colors.gray}>Hoje é dia de vitória</Text>
        </Center>
      </Header>
    </View>
  );
};

export default Dashboard;
