import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import { styles } from './styles';

export default function Login() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de autenticação, e após o login bem-sucedido, navegue para a tela de Noticias
    navigation.navigate('Noticias');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login OAASIS</Text>
      <TextInput style={styles.formInput}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <TextInput style={styles.formInput}
        placeholder="Informe a Senha"
        autoCapitalize="none"
        secureTextEntry
      />
      <Pressable style={styles.formButton} onPress={handleLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Novo usuário</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
