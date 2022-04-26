import React, {useState} from 'react';
import {FlatList, ScrollViewBase} from 'react-native';
import {ArrowRight} from '../../assets/arrowRight';
import Categories from '../../components/Category/category.component';
import ServerComponent from '../../components/servers/server.component';
import {Servers} from '../../helpers/servers';
import {Button, Title, View} from '../../style/general.style';
import {CategoryList} from '../Dashboard/dash.style';
import {Icon, ModalServer, ServerButton, ServerView} from './newMatch.style';

const NewMatch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [serverChosen, setServerChosen] = useState(null);

  return (
    <View backgroundColor={'#0c123b'}>
      <ModalServer
        visible={isVisible}
        animationType="slide"
        presentationStyle={'formSheet'}>
        <View>
          <FlatList
            data={Servers}
            renderItem={({item}) => {
              return (
                <ServerButton
                  onPress={() => {
                    setServerChosen(item);
                    setIsVisible(false);
                    // console.log('visible?', serverChosen);
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
      <ServerView>
        <Icon />
        <Title fontSize={18} textAlign={'center'}>
          Selecione um servidor
        </Title>
        <Button width={6} marginRight={34} onPress={() => setIsVisible(true)}>
          <ArrowRight />
        </Button>
      </ServerView>
    </View>
  );
};

export default NewMatch;
