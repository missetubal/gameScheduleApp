import {useNavigation} from '@react-navigation/native';
import React from 'react';
// import {Discord} from '../../assets/discord';
import {ButtonsView, Gradiente, Images, LoginImage} from './home.style';
import {Text, Button, Title, View} from '../../style/general.style';
import colors from '../../style/colors';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Images>
        <LoginImage source={require('./homeWallpaper.png')} />
      </Images>
      <Gradiente />
      <Title>Conecte-se e organize suas jogatinas</Title>
      <Text marginLeft={64} marginRight={64} marginTop={16} marginBottom={48}>
        Crie grupos para jogar seus games favoritos com os seus amigos
      </Text>
      <ButtonsView>
        <Button
          backgroundColor={colors.redish}
          onPress={() => navigation.navigate('Login')}>
          <Text fontWeight={600} fontSize={18}>
            Entrar
          </Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('Register')}
          backgroundColor={'transparent'}
          justifyContent={'flex-start'}
          marginTop={5}>
          <Text fontWeight={600}>Criar conta</Text>
        </Button>
      </ButtonsView>
    </View>
  );
};

export default Home;
