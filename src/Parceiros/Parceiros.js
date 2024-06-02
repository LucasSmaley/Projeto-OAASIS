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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Parceiros</Text>

        <Text style={styles.informativosContainer}>
          {"    "}Conheça os parceiros que contribuem com recursos em nossos
          projetos, ajudando a reduzir os índices de desigualdade social e a
          alavancar as oportunidades do país. Agradecemos a todos por esta
          grande parceria.
          {"\n    "}Sua empresa também pode contribuir para a transformação
          através da educação. Seja um parceiro e conheça os benefícios que sua
          empresa pode obter.
        </Text>
      </View>

      <View style={styles.container}>
        <Image
          source={require("../../assets/CCRP.webp")}
          style={styles.Img}
          resizeMode="contain" // Specify the path to your image
        />

        <Image
          source={require("../../assets/CMDCA.webp")}
          style={styles.Img} 
          resizeMode="contain"// Specify the path to your image
        />
        <Image
          source={require("../../assets/SMAS.webp")}
          style={styles.Img} 
          resizeMode="contain"// Specify the path to your image
        />
        <Image
          source={require("../../assets/PCRP.webp")}
          style={styles.Img}
          resizeMode="contain" // Specify the path to your image
        />
        <Image
          source={require("../../assets/SESC.webp")}
          style={styles.Img}
          resizeMode="contain" // Specify the path to your image
        />
        <Image
          source={require("../../assets/SERTRAN.webp")}
          style={styles.Img}
          resizeMode="contain" // Specify the path to your image
        />
      </View>
    </ScrollView>
  );
}
