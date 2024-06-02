import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login/Login';
import CriarLogin from './src/CriarLogin/CriarLogin';
import Noticias from './src/Noticias/Noticias';
import TelaInicialPai from './src/TelaInicialPai/TelaInicialPai';
import PlanejamentoAnual from './src/PlanejamentoAnual/PlanejamentoAnual';
import SobreNos from './src/About Us/SobreNos';
import Transparencia from './src/Transparencia/Transparencia';
import Projetos from './src/Projetos/Projetos';
import Eventos from './src/Eventos/Eventos';
import Apoie from './src/Apoie/Apoie';
import Parceiros from './src/Parceiros/Parceiros';
import Contato from './src/Contato/Contato';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      
      screenOptions={{
        headerStyle: {
          backgroundColor: '#001d3d',
          height: 55
        },
        headerTintColor: 'white',
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Notificações" component={Noticias} />
        <Stack.Screen name="Criar Login" component={CriarLogin} />
        <Stack.Screen name="Home" component={TelaInicialPai}/>
        <Stack.Screen name="Planejamento Anual" component={PlanejamentoAnual}/>
        <Stack.Screen name="Sobre Nós" component={SobreNos}/>
        <Stack.Screen name="Transparencia" component={Transparencia}/>
        <Stack.Screen name="Projetos" component={Projetos}/>
        <Stack.Screen name="Eventos" component={Eventos}/>
        <Stack.Screen name="Apoie" component={Apoie}/>
        <Stack.Screen name="Parceiros" component={Parceiros}/>
        <Stack.Screen name="Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
