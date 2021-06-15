import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import reducer from '../reducers/schoolProvider'
import styles from '../../Styles/global';

import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';


import { LinearGradient } from 'expo-linear-gradient';
const HomeScreen = ({ navigation }) => {
  return (

    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: "stretch",

    }} >
      <Text style={{ fontSize: 16, textAlign: "center", margin: 25, color: 'black', fontWeight: 'bold' }}>Hello Bienvenue</Text>
      <ListItem
        onPress={() => navigation.navigate('Students')}
        Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient} // Only if no expo
      >
        <ListItem.Content>
          <ListItem.Title style={{ textAlign: "center", color: 'white', fontWeight: 'bold' }}>
            Students
    </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>

      <ListItem
        onPress={() => navigation.navigate('Lessons')}
        Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient} // Only if no expo
      >
        <ListItem.Content>
          <ListItem.Title style={{ textAlign: "center", color: 'white', fontWeight: 'bold' }}>
            Lessons
    </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>



    </SafeAreaView>



  )
}
export default HomeScreen;
