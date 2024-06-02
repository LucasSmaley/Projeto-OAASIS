import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  Linking,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Projetos() {
  const navigation = useNavigation();

  const handleApoio = () => {
    const url =
      "https://static.wixstatic.com/media/726aa5_706f4b2bfd9542fda4b2757b0488e692~mv2.jpeg/v1/fill/w_526,h_745,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202020-05-15%20at%2012_00_46%20PM.jpeg";
    Linking.openURL(url);
  };

  const handlePizza = () => {
    const url =
      "https://static.wixstatic.com/media/726aa5_b91d368e82dc4fc58e0d11e6996fe787~mv2.jpg/v1/fill/w_419,h_745,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/LOGO%20VEREDAS.jpg"; 
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.informativosContainer}>
          Campanha de Apoio Humanitário Contra a COVID 19. Realizada em 2020 que
          arrecadou, produtos de higiene pessoal, roupas, mascaras e cestas
          básicas que atendem mais de 200 famílias na comunidade do Maria Casa
          Grande.
        </Text>

        <TouchableOpacity onPress={handleApoio} style={styles.clicaImg}>
          <Image
            source={require("../../assets/apoio.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.informativosContainer}>
          A Bella Ajuda é uma campanha solidária da rede de pizzarias Bella
          Capri e conta com o envolvimento de todas as lojas da franquia.
          {"\n"}SEU JANTAR VAI AJUDAR MAIS DE 50 CRIANÇAS ATENDIDAS PELA
          INSTITUIÇÃO. Participar da campanha é muito fácil! Você compra um
          voucher no valor de R$ 44,90, entra no aplicativo da Bella Capri,
          escolhe seu sabor preferido, insere o código e retira a pizza na loja
          mais próxima. Não fique de fora! Faça agora seu pedido!
        </Text>
        <TouchableOpacity onPress={handlePizza} style={styles.clicaImg}>
          <Image
            source={require("../../assets/pizza.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
