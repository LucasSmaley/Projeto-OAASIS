import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Transparencia() {
  const navigation = useNavigation();

  const handleDoa = () => {
    const url = "https://www.oaasis.org.br/doacao"; 
    Linking.openURL(url);
  };

  const handleNf = () => {
    const url = "https://www.oaasis.org.br/nf-paulista"; 
    Linking.openURL(url);
  };

  const handleIr = () => {
    const url = "https://www.oaasis.org.br/destinacao-do-ir";
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>APOIE</Text>

        <Text style={styles.informativosContainer}>
          Escolha uma das opções e venha unir forças com a OAASIS e transformar
          vidas.
        </Text>
      </View>

      <View style={styles.container}>
        <Image
          source={require("../../assets/doacao.png")} 
          style = {styles.doacoesImg}
        />

        <Pressable style={styles.addButton} onPress={handleDoa}>
          <Text style={styles.addButtonText}>Doação</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Image
          source={require("../../assets/notafiscal.png")}
          style = {styles.doacoesImg} 
        />

        <Pressable style={styles.addButton} onPress={handleNf}>
          <Text style={styles.addButtonText}>Nota Fiscal Paulista</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Image
          source={require("../../assets/ir.png")}
          style = {styles.doacoesImg}
        />

        <Pressable style={styles.addButton} onPress={handleIr}>
          <Text style={styles.addButtonText}>Destinação do IR</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}
