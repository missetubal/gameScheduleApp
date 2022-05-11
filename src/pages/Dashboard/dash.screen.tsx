import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Add} from '../../assets/add';
import Categories from '../../components/Category/category.component';
import {CategoryTipes} from '../../constants/CategoryTypes';
import colors from '../../style/colors';
import {Button, Text, Title, View} from '../../style/general.style';
import {
  Center,
  Header,
  Icon,
  LeftHeader,
  CategoryList,
  NameTitle,
  TextView,
} from './dash.style';

const Dashboard: React.FC = ({route}) => {
  const navigation = useNavigation();
  return (
    <View padding={24}>
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
          backgroundColor={colors.redish}
          onPress={() => navigation.navigate('Agendar Partida')}>
          <Add />
        </Button>
      </Header>
      <CategoryList horizontal showsHorizontalScrollIndicator={false}>
        <Categories data={CategoryTipes} needCheck={false} />
      </CategoryList>
      <TextView>
        <Title fontSize={18}>Partidas Agendadas</Title>
        <Text>Total:</Text>
      </TextView>
    </View>
  );
};

export default Dashboard;
