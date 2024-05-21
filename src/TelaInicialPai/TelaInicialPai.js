import React, { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicialPai() {
  const navigation = useNavigation();

  const handleNews = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("Noticias");
  };

  const handleHome = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("PlanejamentoAnual");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.formButton} onPress={handleNews}>
        <Text style={styles.textButton}>Avisos da Criança</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handleHome}>
        <Text style={styles.textButton}>Planejamento Anual</Text>
      </Pressable>
    </View>
  );
}
