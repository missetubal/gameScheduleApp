import React from 'react';
import {ScrollViewBase} from 'react-native';
import {ArrowRight} from '../../assets/arrowRight';
import Categories from '../../components/Category/category.component';
import {Button, Title, View} from '../../style/general.style';
import {CategoryList} from '../Dashboard/dash.style';
import {Icon, ServerView} from './newMatch.style';

// import { Container } from './styles';

const NewMatch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View backgroundColor={'#0c123b'}>
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
        <Button width={6} marginRight={34}>
          <ArrowRight />
        </Button>
      </ServerView>
    </View>
  );
};

export default NewMatch;
