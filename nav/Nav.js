import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import schoolProvider from "../src/reducers/schoolProvider";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import LessonsScreen from '../src/screens/LessonsScreen';
import StudentsScreen from '../src/screens/StudentsScreen';
import AbscenceScreen from '../src/screens/AbscenceScreen';



const Stack = createStackNavigator();

const store = createStore(schoolProvider);

// personnalisation du thème
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
};

  const Nav = () => {
    return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Lessons" component={LessonsScreen} />
            <Stack.Screen name="Students" component={StudentsScreen} />
            <Stack.Screen name="Abscence" component={AbscenceScreen} />
            </Stack.Navigator>
            </NavigationContainer>
      </PaperProvider>
      </Provider>
 
    );
  }


export default Nav;