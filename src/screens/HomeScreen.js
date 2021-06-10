import React, { useContext }  from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import reducer from '../reducers/schoolProvider'
import styles from '../../Styles/global';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bienvenueText}>Hello Bienvenue</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Students')}>
        <Text style={styles.buttonText}>Students</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Lessons')}>
        <Text style={styles.buttonText}>Lessons</Text>
      </TouchableOpacity>

    </View>
  )
}
export default HomeScreen;


/*
const HomeScreen = ({ navigation })  => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenue</Text>
      <Button
        title="Students"
        onPress={() => navigation.navigate('Students')}
      />
      <Button
        title="Lessons"
        onPress={() => navigation.navigate('Lessons')}
      />
    </View>
  );
}

export default HomeScreen;

*/
