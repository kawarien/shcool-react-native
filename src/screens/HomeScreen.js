import React from 'react';
import { Button, View, Text } from 'react-native';

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