import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
    Image,
    View
} from 'react-native';


export default function ButtonForm({ auth, type }) {

    return (
        <Pressable 
            style={[styles.button, auth == "FACEBOOK"? styles.facebookbutton : styles.googlebutton]}>
            <View style={styles.container}>
                <Image 
                    style={styles.logos}
                    source={
                        auth == "FACEBOOK" ? 
                            require("../assets/facebook.png")
                        : 
                            require("../assets/google.png")
                    }/>
                <Text style={[styles.text, auth == "FACEBOOK"? styles.facebooktext : styles.googletext]}>
                    {
                        auth == "FACEBOOK" && type == "signin" ? 
                            "INICIA SESIÓN CON FACEBOOK" 
                        :
                            auth == "GOOGLE" && type == "signin"?
                                "INICIA SESIÓN CON GOOGLE"
                            :
                            auth == "FACEBOOK" && type == "signup" ? 
                                "REGÍSTRATE CON FACEBOOK" 
                            :
                            "REGÍSTRATE CON GOOGLE"
                    }
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    facebookbutton: {
        backgroundColor: '#3b5998',
    },
    googlebutton: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: "100%",
    },
    logos: {
        marginTop: 10,
        marginLeft: 20,
        width: 40,
        height: 40,
    },
    text: {
        textAlign: 'center',
        textAlignVertical: "center",
        marginLeft: 30,
    },
    facebooktext: {
        color: "white"
    },
    googletext: {

    }
});
