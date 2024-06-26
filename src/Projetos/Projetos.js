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
    const url = "https://www.oaasis.org.br/veredas"; 
  };

  const handleCriacao = () => {
    const url = "https://www.oaasis.org.br/criacao";
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.background}> 
      
      <View style={styles.container}>
        
      <Image
        source={require('../../assets/veredas.jpg')} 
        style={styles.img}
      />

        <Pressable style={styles.addButton} onPress={handleVeredas}>
          <Text style={styles.addButtonText}>Espaço Veredas</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        
        <Image
          source={require('../../assets/cria.png')} 
          style={styles.img}
        />
  
          <Pressable style={styles.addButton} onPress={handleCriacao}>
            <Text style={styles.addButtonText}>Projeto Criação </Text>
          </Pressable>
        </View>

    </ScrollView>
  );
}
