import React from 'react';
import { Button, View, Text,FlatList, SafeAreaView, TouchableOpacity  } from 'react-native';
import Student from '../../components/student';
import { Divider } from 'react-native-paper';
import styles from '../../Styles/global';

import { useSelector, useDispatch } from 'react-redux';

import { SCHOOLDATA } from '../../actions/actions-types'

const StudentsScreen = ({ navigation }) => {
    const { students } = useSelector(state => {
        return {
            students: state.students,

        }
    });
    const dispatch = useDispatch();

    const Students = students.map(student => {
        return {
            student: student,
        }
    });

    console.log(students);
    return (

        <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >  
           <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=> console.log("Reset")}>
                <Text style={styles.buttonText}>Reset abscence</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=> console.log("Order")}>
                <Text style={styles.buttonText}>Ordonner la moyenne</Text>
            </TouchableOpacity>
           

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                style={styles.containerStudent}
                data={Students}
                keyExtractor={item => item.student.id.toString()}
                renderItem={({ item }) => {

                    return (
                        <Student
                            data={item}
                            navigation={navigation}
                        />
                    );
                }}
                
            />
        </View>
        </SafeAreaView>

    );
}

export default StudentsScreen;

