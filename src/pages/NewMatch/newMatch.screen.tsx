import React, {useState} from 'react';
import {FlatList, ScrollViewBase} from 'react-native';
import {ArrowRight} from '../../assets/arrowRight';
import Categories from '../../components/Category/category.component';
import ServerComponent from '../../components/servers/server.component';
import {ArrowView, Image} from '../../components/servers/server.style';
import {Servers} from '../../helpers/servers';
import colors from '../../style/colors';
import {Text, Title, View} from '../../style/general.style';
import {CategoryList} from '../Dashboard/dash.style';
import {
  Icon,
  IconView,
  ModalServer,
  ServerButton,
  ServerText,
  ServerView,
} from './newMatch.style';

const NewMatch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [serverChosen, setServerChosen] = useState(null);

  return (
    <View backgroundColor={'#0c123b'}>
      <ModalServer
        visible={isVisible}
        animationType="slide"
        presentationStyle={'formSheet'}
        onRequestClose={() => setIsVisible(!isVisible)}>
        <View>
          <FlatList
            data={Servers}
            renderItem={({item}) => {
              return (
                <ServerButton
                  onPress={() => {
                    setServerChosen(item);
                    setIsVisible(!isVisible);
                    console.log('visible?', item);
                  }}>
                  <ServerComponent
                    name={item.name}
                    gameName={item.gameName}
                    image={item.image}
                  />
                </ServerButton>
              );
            }}
          />
        </View>
      </ModalServer>
      <Title fontSize={18} textAlign={'left'} marginLeft={24} marginBottom={15}>
        Categorias
      </Title>
      <CategoryList
        horizontal
        showsHorizontalScrollIndicator={false}
        paddingLeft={24}
        marginBottom={32}>
        <Categories
          name="Ranqueada"
          image={require('../../assets/ranqueada.png')}
          isChecked
        />
        <Categories
          name="Duelo"
          image={require('../../assets/duelo.png')}
          isChecked
        />
        <Categories
          name="Diversão"
          image={require('../../assets/diversao.png')}
          isChecked
        />
        <Categories />
      </CategoryList>
      <ServerView onPress={() => setIsVisible(!isVisible)}>
        <IconView>
          {serverChosen ? (
            <Image source={{uri: serverChosen.image}} />
          ) : (
            <Icon />
          )}
        </IconView>
        <ServerText>
          {serverChosen ? (
            <Title fontSize={18} textAlign={'left'}>
              {serverChosen.name}
            </Title>
          ) : (
            <Title fontSize={18} textAlign={'left'}>
              Selecione um servidor
            </Title>
          )}
          {serverChosen ? (
            <Text textAlign={'left'} color={colors.gray}>
              {serverChosen.gameName}
            </Text>
          ) : (
            <Text> </Text>
          )}
        </ServerText>

        <ArrowView right={8} top={50}>
          <ArrowRight />
        </ArrowView>
      </ServerView>
    </View>
  );
};

export default NewMatch;
