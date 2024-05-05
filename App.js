import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login/Login';
import Noticias from './src/Noticias/Noticias'; // Renomeie a importação para evitar conflitos de nomes

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Noticias" component={Noticias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
