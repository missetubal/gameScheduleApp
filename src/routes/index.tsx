import React from 'react';
//Navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//pages
import Home from '../pages/Home/home.screen';
import Dashboard from '../pages/Dashboard/dash.screen';
import Login from '../pages/Login/login.screen';
import NewMatch from '../pages/NewMatch/newMatch.screen';
import colors from '../style/colors';

const Stack = createNativeStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Agendar Partida"
          component={NewMatch}
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
            headerStyle: {backgroundColor: colors.card},
            headerTitleStyle: {color: colors.gray},
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
