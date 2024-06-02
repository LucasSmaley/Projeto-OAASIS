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

  const handlePlans = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("PlanejamentoAnual");
  };

  const handleAboutUs = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("SobreNos");
  };

  const handleTransp = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("Transparencia");
  };

  const handleProj = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("Projetos");
  };

  const handleEv = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("Eventos");
  };

  const handleAp = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("Apoie");
  };

  const handlePar = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("Parceiros");
  };

  const handleCon = () => {
    // Navegar para a tela de criação de login (CriarLogin)
    navigation.navigate("Contato");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.formButton} onPress={handleNews}>
        <Text style={styles.textButton}>Avisos da Criança</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handlePlans}>
        <Text style={styles.textButton}>Planejamento Anual</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handleAboutUs}>
        <Text style={styles.textButton}>Sobre Nós</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handleTransp}>
        <Text style={styles.textButton}>Transparencia</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handleProj}>
        <Text style={styles.textButton}>Projetos</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handleEv}>
        <Text style={styles.textButton}>Eventos</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handleAp}>
        <Text style={styles.textButton}>Apoie</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handlePar}>
        <Text style={styles.textButton}>Parceiros</Text>
      </Pressable>
      <Pressable style={styles.formButton} onPress={handleCon}>
        <Text style={styles.textButton}>Contato</Text>
      </Pressable>
    </View>
  );
}
