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
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Contato() {
  const navigation = useNavigation();

  const handleCont = () => {
    const url =
      "https://www.oaasis.org.br/contato"; // Specify the URL of the website you want to open
    Linking.openURL(url);
  };

  const handleFace = () => {
    const url =
      "https://www.facebook.com/crecei.ong"; // Specify the URL of the website you want to open
    Linking.openURL(url);
  };

  const handleInst = () => {
    const url =
      "https://www.instagram.com/oaasis_org/?hl=pt-br"; // Specify the URL of the website you want to open
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Contato</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.informativosContainer}>
          Rua: Luiz Mestriner, 413 Jd. Alexandre Balbo Ribeirão Preto - SP
          {"\n"}(16)3975-1535
          {"\n\n"}adm@oaasis.org.br
        </Text>
      </View>

      <View style={styles.contSocial}>

        <TouchableOpacity onPress={handleFace}>
        <Image
          source={require("../../assets/facebook.webp")}
          style={styles.Img}
          resizeMode="contain" // Specify the path to your image
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleInst}>
        <Image
          source={require("../../assets/instagram.png")}
          style={styles.Img}
          resizeMode="contain" // Specify the path to your image
        />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Pressable style={styles.addButton} onPress={handleCont}>
          <Text style={styles.addButtonText}>Entre em Contato</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
