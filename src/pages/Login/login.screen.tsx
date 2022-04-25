import React, {useState} from 'react';
import {Circle} from './login.style';
import {Button, TextInput, Title, Text, View} from '../../style/general.style';
import colors from '../../style/colors';
import {LeftArrow} from '../../assets/leftArrow';
import {useNavigation} from '@react-navigation/native';
// import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';
// import {storage} from '../../helpers/device/storage';

const Login: React.FC = () => {
  const navigation = useNavigation();
  // const storage = new MMKVStorage.Loader().withEncryption().initialize();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // function storageInfo() {
  //   storage.setString('username', username);
  //   storage.setString('password', password);
  // }
  // const teste = storage.getString('username');
  // console.log('teste', teste);

  return (
    <View paddingLeft={20}>
      <Button marginLeft={-120} onPress={() => navigation.goBack()}>
        <LeftArrow />
      </Button>
      <Circle backgroundColor={colors.redish} />
      <Title fontSize={35} fontWeight={700} marginTop={130} textAlign={'left'}>
        Login
      </Title>
      <TextInput
        value={username}
        onChangeText={value => setUsername(value)}
        placeholder="Usuário"
        marginTop={40}
      />
      <TextInput
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder="Senha"
        marginTop={35}
      />
      <Button width={150}>
        <Text textAlign={'left'}>Esqueceu a senha?</Text>
      </Button>
      <Button
        backgroundColor={colors.redish}
        marginTop={80}
        marginLeft={40}
        onPress={() => {
          navigation.navigate('Dashboard', {
            username: username,
          });
        }}>
        <Text>Entrar</Text>
      </Button>
    </View>
  );
};

export default Login;
