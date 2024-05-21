// Login.js

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import { styles } from './styles';

export default function Login() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de verificação do usuário
    // Por enquanto, apenas verificar se o email e senha são preenchidos
    if (email === '' || senha === '') {
      setMensagemErro('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode adicionar lógica de autenticação real
    // Por enquanto, apenas navegue para a tela de Noticias
    navigation.navigate('TelaInicialPai');
  };

  const handleNavigateToCriarLogin = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate('CriarLogin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login OAASIS</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
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
      {mensagemErro !== '' && <Text style={styles.errorMessage}>{mensagemErro}</Text>}
      <Pressable style={styles.formButton} onPress={handleLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton} onPress={handleNavigateToCriarLogin}>
          <Text style={styles.subTextButton}>Novo usuário</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
