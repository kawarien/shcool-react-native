import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from '../Styles/global';
const Lesson = ({ data }) => {
    const { lesson } = data;
    return (
        <View
            style={[
                styles.item,
                { flex: 1, flexDirection: 'row' },
                { backgroundColor: 'transparent', borderColor: 'grey' }
            ]}
        >
            <View style={{ width: 200 }}>
                <Text style={{ padding: 2, marginBottom: 2 }} > {lesson.title}</Text>
            </View>
        </View>
    );
}
export default Lesson;