import React from 'react';
import { Button, View, Text,FlatList, SafeAreaView, TouchableOpacity  } from 'react-native';
import Student from '../../components/student';
import { Divider } from 'react-native-paper';
import styles from '../../Styles/global';

import { average, reOrder, reset_abscenceTotal } from '../../actions/actions-types';

import { useSelector, useDispatch } from 'react-redux';

import { SCHOOLDATA } from '../../actions/actions-types'

const StudentsScreen = ({ navigation }) => {
    const { students, sens } = useSelector(state => {
        return {
            students: state.students,
            sens: state.sens

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
                onPress={()=> dispatch(reset_abscenceTotal())}>
                <Text style={styles.buttonText}>Reset abscence</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=> dispatch(reOrder())}>
                <Text style={styles.buttonText}>Ordre {sens ? 'croissant' : 'decroissant'}</Text>
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
                            average={average(item.student.notes)}
                            navigation={navigation}
                            attendance = {item.student.attendance}
                        />
                    );
                }}
                
            />
        </View>
        </SafeAreaView>

    );
}

export default StudentsScreen;

