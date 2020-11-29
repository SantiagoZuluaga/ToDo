import React from 'react';
import {
    Text,
  StyleSheet
} from 'react-native';

export default function ButtonForm({ title, onPress }) {

    return (
        <Text 
            style={styles.button}
            onPress={onPress}>
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    button: {
        textAlignVertical: "center",
        height: 60,
        backgroundColor: '#dc3545',
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        color: 'white'
    }
});
