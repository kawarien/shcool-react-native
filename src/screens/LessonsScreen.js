import React from 'react';
import { Button, View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../Styles/global';
import Lesson from '../../components/lesson';

const LessonsScreen = ({ navigation }) => {
  const { lessons } = useSelector(state => {
    return {
      lessons: state.lessons,

    }
  });
  const dispatch = useDispatch();

  const Lessons = lessons.map(lesson => {
    return {
      lesson: lesson,
    }
  });

  console.log(lessons);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={styles.containerStudent}
          data={Lessons}
          keyExtractor={item => item.lesson.id.toString()}
          renderItem={({ item }) => {

            return (
              <Lesson
                data={item}

              />
            );
          }}

        />
      </View>
    </SafeAreaView>
  );
}

export default LessonsScreen;