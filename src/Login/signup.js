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

export default function SignUp({ navigation }) {

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [confirmpassword, onChangeConfirmPassword] = useState("");
    
    return (
      <SafeAreaView>
        <ContainerLogin>
          <InputLogin field={email} setField={onChangeEmail} placeholder={"Correo electrónico"} password={false}/>
          <InputLogin field={password} setField={onChangePassword} placeholder={"Contraseña"} password={true}/>
          <InputLogin field={confirmpassword} setField={onChangeConfirmPassword} placeholder={"Confirmar contraseña"} password={true}/>
          <ButtonForm title={"REGISTRARME"} onPress={() => alert("CREANDO CUENTA")}/>
        </ContainerLogin>
        <LineSeparator />
        <ContainerLogin>
          <ButtonSocial auth={"FACEBOOK"} type={"signup"}/>
          <ButtonSocial auth={"GOOGLE"} type={"signup"}/>
        </ContainerLogin>
        <LineSeparator />
        <ContainerLogin>
          <Text style={{textAlign: "center", color: '#3b5998', fontSize: 15}} onPress={() => navigation.goBack()}>
            ¿Ya tienes una cuenta en ToDo?
          </Text>
        </ContainerLogin>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});
