import React from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

export default function InputLogin({field, setField, password, placeholder}) {

    return (
        <TextInput
            secureTextEntry={password}
            placeholder={placeholder}
            style={styles.input}
            onChangeText={value => setField(value)}
            value={field}
        />
    );
}

const styles = StyleSheet.create({
    input: { 
        height: 60, 
        backgroundColor: "white",
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 18,
        paddingLeft: 12,
        paddingRight: 12
    }
});
