
import React, { useContext } from 'react';
import {
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    View,
    Image
} from 'react-native';
import { Divider } from 'react-native-paper';
import styles from '../Styles/global';


const Student = ({ navigation, data}) => {
    const { student } = data;

    return (

    <TouchableOpacity
    onPress={() => navigation.navigate('Abscence', { student: student })}
    ><Divider />
        <View
            style={[
                styles.item,
                { flex: 1, flexDirection: 'row' },
                { backgroundColor: 'transparent', borderColor: 'grey' }
            ]}
        >
            <View style={{ width: 110 }}>
                <Image
                    source={{ uri: `https://via.placeholder.com/150/92c952${student.id}` }}
                    style={{ width: 100, height: 100, padding: 5, borderRadius: 50 }}
                />
            </View>
            <View style={{ width: 200 }}>
            
            <Text>{student.name}</Text>
                <Text style={{ padding: 2, marginBottom: 2 }} >Nombre d'abscence(s) {student.attendance}</Text>
                <Text style={{ padding: 2, marginBottom: 2 }}  >Nombre de cours {student.lessons ? student.lessons.length : 0}</Text>
                <Text style={{ padding: 2, marginBottom: 2 }} >{student.notes}</Text>
            
                
            </View>
            
        </View>
        <Divider />
    </TouchableOpacity>
        
    );
}
export default Student;