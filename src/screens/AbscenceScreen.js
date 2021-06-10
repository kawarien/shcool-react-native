import React, { useContext } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import styles from '../../Styles/global';
import { useSelector, useDispatch } from 'react-redux';

const AbscenceScreen = ({ navigation, route }) => {
//   const [state] = useSelector(  state => {
//     return {
//         students: state.students,
//     }

    
// });

console.log(navigation);
console.log(route.params);

  

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
        onPress={()=> console.log("increment")}
      >
        <Text style={styles.buttonText}>Incrémente abscence (+1) </Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=> console.log("decrement")}
        >
          <Text style={styles.buttonText}>Incrémente abscence (-1) </Text>
        </TouchableOpacity>
      <View  >
        <Text >Hello</Text>
      </View>

    </SafeAreaView>
  );
}

export default AbscenceScreen;