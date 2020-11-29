import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/Login/signin';
import SignUp from './src/Login/signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{title: 'Iniciar sesión'}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{title: 'Crear cuenta'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};