import React, { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicialPai() {
  const navigation = useNavigation();

  const handleNews = () => {
    navigation.navigate("Notificações");
  };

  const handlePlans = () => {
    navigation.navigate("Planejamento Anual");
  };

  const handleAboutUs = () => {
    navigation.navigate("Sobre Nós");
  };

  const handleTransp = () => {
    navigation.navigate("Transparencia");
  };

  const handleProj = () => {
    navigation.navigate("Projetos");
  };

  const handleEv = () => {

    navigation.navigate("Eventos");
  };

  const handleAp = () => {

    navigation.navigate("Apoie");
  };

  const handlePar = () => {

    navigation.navigate("Parceiros");
  };

  const handleCon = () => {

    navigation.navigate("Contato");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.formButton} onPress={handleNews}>
        <Text style={styles.textButton}>Notificações</Text>
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
