import React from 'react';
import { Children } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default function ContainerLogin({children}) {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        marginBottom: 20
    }
});
