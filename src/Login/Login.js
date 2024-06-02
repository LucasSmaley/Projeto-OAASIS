// Login.js

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import { styles } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email("Email Inválido").required("Informe seu email"),
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Informe sua senha")
});

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigation = useNavigation(); // Obtenha o objeto de navegação
  const [mensagemErro, setMensagemErro] = useState('');

  const handleSignIn = (data) => {
    console.log(data);

    // Aqui você pode adicionar lógica de autenticação real
    // Por enquanto, apenas navegue para a tela de Notícias
    navigation.navigate('Home');
  };

  const handleNavigateToCriarLogin = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate('Criar Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login OAASIS</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite seu email"
            />
            {errors.email && <Text style={styles.labelError}>{errors.email.message}</Text>}
          </View>
        )}
      />
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              style={styles.formInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite sua senha"
              secureTextEntry={true}
            />
            {errors.senha && <Text style={styles.labelError}>{errors.senha.message}</Text>}
          </View>
        )}
      />
      {mensagemErro !== '' && <Text style={styles.errorMessage}>{mensagemErro}</Text>}
      <Pressable style={styles.formButton} onPress={handleSubmit(handleSignIn)}>
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


