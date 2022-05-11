import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {ArrowRight} from '../../assets/arrowRight';
import Categories from '../../components/Category/category.component';
import ServerComponent from '../../components/servers/server.component';
import {ArrowView, Image} from '../../components/servers/server.style';
import {CategoryTipes} from '../../constants/CategoryTypes';
import colors from '../../style/colors';
import {Button, Text, Title, View} from '../../style/general.style';
import {CategoryList} from '../Dashboard/dash.style';
import {ServerTypes} from '../../constants/ServerTypes';
import {
  DateView,
  DayAndHour,
  Icon,
  IconView,
  Input,
  InputView,
  ModalServer,
  ServerButton,
  ServerText,
  ServerView,
} from './newMatch.style';
import {useNavigation} from '@react-navigation/native';

const NewMatch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [serverChosen, setServerChosen] = useState(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');
  const [categoryType, setCategoryType] = useState(
    String(CategoryTipes[0].name),
  );
  const navigation = useNavigation();

  const isDisabled =
    !day || !hour || !minute || !description || !month || !serverChosen;

  const onSelectButton = (value: number) => {
    setCategoryType(String(CategoryTipes[value].name));
  };
  return (
    <View backgroundColor={'#0c123b'} paddingLeft={24} paddingRight={24}>
      <ModalServer
        visible={isVisible}
        animationType="slide"
        presentationStyle={'formSheet'}
        onRequestClose={() => setIsVisible(!isVisible)}>
        <View>
          <FlatList
            data={ServerTypes}
            renderItem={({item}) => {
              return (
                <ServerButton
                  onPress={() => {
                    setServerChosen(item);
                    setIsVisible(!isVisible);
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
      <Title fontSize={18} textAlign={'left'} marginBottom={15}>
        Categorias
      </Title>
      <CategoryList
        paddingLeft={-24}
        horizontal
        showsHorizontalScrollIndicator={false}
        marginBottom={32}>
        <Categories
          needCheck={true}
          data={CategoryTipes}
          onPress={onSelectButton}
        />
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
      <DateView>
        <DayAndHour>
          <Title fontSize={18} textAlign={'left'}>
            Dia e Mês
          </Title>
          <InputView>
            <Input
              marginRight={6}
              maxLength={2}
              onChangeText={value => setDay(value)}
            />
            <Text>/</Text>
            <Input
              marginLeft={6}
              maxLength={2}
              onChangeText={value => setMonth(value)}
            />
          </InputView>
        </DayAndHour>
        <DayAndHour>
          <Title fontSize={18} textAlign={'left'}>
            Horário
          </Title>
          <InputView>
            <Input
              marginRight={6}
              maxLength={2}
              onChangeText={value => setHour(value)}
            />
            <Text>:</Text>
            <Input
              marginLeft={6}
              maxLength={2}
              onChangeText={value => setMinute(value)}
            />
          </InputView>
        </DayAndHour>
      </DateView>
      <Title fontSize={18} textAlign={'left'} marginBottom={12}>
        Descrição
      </Title>
      <Input
        width={340}
        multiline
        numbersOfLine={10}
        height={95}
        textAlignVertical={'top'}
        textAlign={'left'}
        padding={8}
        color={colors.white}
        onChangeText={value => setDescription(value)}
      />
      <InputView>
        <Button
          backgroundColor={isDisabled ? colors.buttonDisabled : colors.redish}
          marginTop={20}
          width={340}
          disabled={isDisabled}
          onPress={() =>
            navigation.navigate('Dashboard', {
              category: categoryType,
              serverChosen: serverChosen,
              day: day,
              month: month,
              hour: hour,
              minute: minute,
            })
          }>
          <Title fontSize={18} color={isDisabled ? colors.gray : colors.white}>
            Agendar
          </Title>
        </Button>
      </InputView>
    </View>
  );
};

export default NewMatch;
