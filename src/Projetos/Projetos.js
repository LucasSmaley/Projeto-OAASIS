import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  Linking,
  Image
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Projetos() {
  const navigation = useNavigation();

  const handleVeredas = () => {
    const url = "https://www.oaasis.org.br/veredas"; // Specify the URL of the website you want to open
    Linking.openURL(url);
  };

  const handleCriacao = () => {
    const url = "https://www.oaasis.org.br/criacao"; // Specify the URL of the website you want to open
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      
      <View style={styles.container}>
        
      <Image
        source={require('../../assets/veredas.jpg')} 
        style={styles.proj}// Specify the path to your image
      />

        <Pressable style={styles.addButton} onPress={handleVeredas}>
          <Text style={styles.addButtonText}>Espaço Veredas</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        
        <Image
          source={require('../../assets/cria.png')} 
          style={styles.proj}// Specify the path to your image
        />
  
          <Pressable style={styles.addButton} onPress={handleCriacao}>
            <Text style={styles.addButtonText}>Projeto Criação </Text>
          </Pressable>
        </View>

    </ScrollView>
  );
}
