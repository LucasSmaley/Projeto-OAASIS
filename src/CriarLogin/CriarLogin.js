// CriarLogin.js

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function CriarLogin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCriarLogin = () => {    
    console.log('Novo usuário criado com e-mail:', email, 'e senha:', senha);
    
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Criar Novo Usuário</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Informe a Senha"
        autoCapitalize="none"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Pressable style={styles.formButton} onPress={handleCriarLogin}>
        <Text style={styles.textButton}>Criar Login</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
