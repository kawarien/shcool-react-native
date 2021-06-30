import React, { useContext } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import styles from '../../Styles/global';
import { useSelector, useDispatch } from 'react-redux';

import {increment_abscence, decrement_abscence} from "../../actions/actions-types"

const AbscenceScreen = ({ navigation, route }) => {
  

const { id } = route.params;
const dispatch = useDispatch();



// console.log(navigation);
console.log("blabla ou je ne sais pas", route.params.student.id);

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
      <View  >
        <Text>Hello</Text>
      </View>

    </SafeAreaView>
  );
}

export default AbscenceScreen;