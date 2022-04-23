import React from 'react';
import {Add} from '../../assets/add';
import colors from '../../style/colors';
import {Button, Text, Title, View} from '../../style/general.style';
import {Center, Header, Icon, LeftHeader, NameTitle} from './dash.style';
// import { Container } from './styles';

const Dashboard: React.FC = ({route}) => {
  return (
    <View>
      <Header>
        <LeftHeader>
          <Icon />
        </LeftHeader>
        <Center>
          <NameTitle>
            <Title fontSize={20} fontWeight={500} textAlign={'left'}>
              Olá,{' '}
            </Title>
            <Title fontSize={20}>{route.params.username}</Title>
          </NameTitle>
          <Text color={colors.gray}>Hoje é dia de vitória</Text>
        </Center>
        <Button
          marginLeft={80}
          width={50}
          height={50}
          backgroundColor={colors.redish}>
          <Add />
        </Button>
      </Header>
    </View>
  );
};

export default Dashboard;
