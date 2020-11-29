import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import InputLogin from './Components/inputslogin';
import ContainerLogin from './Components/ContainerLogin';
import ButtonForm from './Components/ButtonForm';
import ButtonSocial from './Components/ButtonSocial';
import LineSeparator from './Components/LineSeparator';

export default function SignIn({ navigation }) {

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    
    return (
      <SafeAreaView>
        <ContainerLogin>
          <InputLogin field={email} setField={onChangeEmail} placeholder={"Correo electrónico"} password={false}/>
            <InputLogin field={password} setField={onChangePassword} placeholder={"Contraseña"} password={true}/>
            <ButtonForm title={"INICIA SESIÓN"} onPress={() => alert("INICIANDO SESIÓN")}/>
        </ContainerLogin>
        <LineSeparator />
        <ContainerLogin>
          <Text style={{textAlign: "center"}} onPress={() => navigation.navigate('Second')}>
            ¿Olvidaste tu contraseña?
          </Text>
          <ButtonSocial auth={"FACEBOOK"} type={"signin"}/>
          <ButtonSocial auth={"GOOGLE"} type={"signin"}/>
        </ContainerLogin>
        <LineSeparator />
        <ContainerLogin>
          <Text style={{textAlign: "center", color: '#3b5998', fontSize: 15}} onPress={() => navigation.navigate('SignUp')}>
            ¿Aún no tienes cuenta en ToDo?
          </Text>
        </ContainerLogin>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});
