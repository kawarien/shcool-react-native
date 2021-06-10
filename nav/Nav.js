import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import LessonsScreen from '../src/screens/LessonsScreen';
import StudentsScreen from '../src/screens/StudentsScreen';

const Stack = createStackNavigator();

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
      
      <PaperProvider theme={theme}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Lessons" component={LessonsScreen} />
            <Stack.Screen name="Students" component={StudentsScreen} />
            </Stack.Navigator>
            </NavigationContainer>
      </PaperProvider>
 
    );
  }


export default Nav;