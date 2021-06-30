import React, { useContext } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import styles from '../../Styles/global';
import { useSelector, useDispatch } from 'react-redux';

import {increment_abscence, decrement_abscence,reset_abscence} from "../../actions/actions-types"

const AbscenceScreen = ({ navigation, route }) => {
  

const { id } = route.params.student.id;
const { attendance } = route.params.student
console.log("attendance attendance", attendance)
const dispatch = useDispatch();



// console.log(navigation);
console.log("id id ", route.params.student.id);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=> dispatch(increment_abscence(id))}
      >
        <Text style={styles.buttonText}>Incrémenter (+1) </Text>

      </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=> dispatch(decrement_abscence(id))}
        >
          <Text style={styles.buttonText}>decrémenter(-1 ) </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=> dispatch(reset_abscence(id))}
        >
          <Text style={styles.buttonText}>Reset </Text>
        </TouchableOpacity>



      
      <View  >
        <Text style={{ padding: 2, marginBottom: 2 }} >Nombre d'abscence(s) {attendance}</Text>
      </View>

    </SafeAreaView>
  );
}

export default AbscenceScreen;