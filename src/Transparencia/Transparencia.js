import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Linking,
  Image
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Transparencia() {
  const navigation = useNavigation();

  const handleOaasis = () => {
    const url = "https://www.oaasis.org.br/c%C3%B3pia-crecei"; // Specify the URL of the website you want to open
    Linking.openURL(url);
  };

  const handleCrecei = () => {
    const url = "https://www.oaasis.org.br/c%C3%B3pia-transparencia"; // Specify the URL of the website you want to open
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>TRANSPARÊNCIA</Text>

        <Text style={styles.informativosContainer}>
          {"    "}
          Em 2023 a OAASIS - Organização Assistencial de Acolhimento e Serviços
          de Integração Social, inicia suas atividades assumindo integralmente o
          serviço de convivência e fortalecimento de vínculos para crianças e
          adolescentes Espaço Veredas antes administrado pelo CRECEI Centro
          Renovado Cristão de Ensino Integral. Diante disso a transparência será
          apresentado pelo CRECEI até 2022 e OAASIS à partir de 2023.
        </Text>
      </View>

      <View style={styles.container}>
        
      <Image
        source={require('../../assets/oaasis.png')} // Specify the path to your image
      />

        <Pressable style={styles.addButton} onPress={handleOaasis}>
          <Text style={styles.addButtonText}>Acessar Portal</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        
        <Image
          source={require('../../assets/crecei.png')} 
          style={styles.crecei}// Specify the path to your image
        />
  
          <Pressable style={styles.addButton} onPress={handleCrecei}>
            <Text style={styles.addButtonText}>Acessar Portal</Text>
          </Pressable>
        </View>

    </ScrollView>
  );
}
