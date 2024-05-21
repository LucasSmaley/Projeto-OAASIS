import React, { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ExpandableItem from "./ExpandableItem";

export default function PlanejamentoAnual() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ExpandableItem title="JANEIRO" subtitle="Programação de Férias">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- Brincadeiras</Text>
          <Text style={styles.topic}>- Jogos</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="FEVEREIRO" subtitle="Dia 20 Dia Nacional de combate ás drogas e ao alcoolismo">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- Elaboração de acordos de convivência</Text>
          <Text style={styles.topic}>- Tipos de drogas e álcool</Text>
          <Text style={styles.topic}>- O impacto do álcool e as drogas na vida do Dependente</Text>
          <Text style={styles.topic}>- Dinâmica em grupo</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="MARÇO" subtitle="Meu futuro">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- A importância dos estudos</Text>
          <Text style={styles.topic}>- O que a falta de estudos pode gerar</Text>
          <Text style={styles.topic}>- Meu sonho: O que fazer para realizar</Text>
          <Text style={styles.topic}>- Como me vejo daqui a 20 anos</Text>
          <Text style={styles.topic}>- Voluntária - Eliene - dia 04</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="ABRIL" subtitle="O valor de uma familía">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- A importância da familía</Text>
          <Text style={styles.topic}>- Familía: União, afeto, confiança e respeito</Text>
          <Text style={styles.topic}>- Qual a importância de uma relação saudável entre irmãos</Text>
          <Text style={styles.topic}>- Dinâmica: Carta para meu irmão</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="MAIO" subtitle="18 Dia Nacional do combate ao abuso e a exploração Sexual Infantil">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- A história</Text>
          <Text style={styles.topic}>- O que é abuso e exploração Sexual</Text>
          <Text style={styles.topic}>- Tipos de abuso</Text>
          <Text style={styles.topic}>- Como identificar o abusador e o explorador</Text>
          <Text style={styles.topic}>- Rede de Proteção à Infância e Adolescência. Peça ajuda. Dfisque 100</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="JUNHO" subtitle="6 Dia Mundial do Meio ambiente">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- A importância da preservação do meio ambiente</Text>
          <Text style={styles.topic}>- Problemas que afetam o meio ambiente</Text>
          <Text style={styles.topic}>- O lixo e o tempo</Text>
          <Text style={styles.topic}>- Como preservar</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="JULHO" subtitle="Programação de férias">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- Brincadeiras</Text>
          <Text style={styles.topic}>- Gincanas</Text>
          <Text style={styles.topic}>- Passeio</Text>
          <Text style={styles.topic}>- Festa da colheita</Text>
          <Text style={styles.topic}>- Aniversário ECA - Direitos da criança e adolescente</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="AGOSTO" subtitle="Emoções e Sentimentos">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- O que são? Para que servem?</Text>
          <Text style={styles.topic}>- Alegria, amor, tristeza, medo, raiva e nojo</Text>
          <Text style={styles.topic}>- Como identificar</Text>
          <Text style={styles.topic}>- Atividades e Dinâmicas</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="SETEMBRO" subtitle="Setembro Amarelo">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- Depressão</Text>
          <Text style={styles.topic}>- Suicídio</Text>
          <Text style={styles.topic}>- Bullying</Text>
          <Text style={styles.topic}>- Prevenção e cuidado</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="OUTUBRO" subtitle="Mês das crianças">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- Passeios</Text>
          <Text style={styles.topic}>- Brincadeiras</Text>
          <Text style={styles.topic}>- Gincanas</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="NOVEMBRO" subtitle="Fortalecendo laços Afetivos familiar">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- Relacionamento: Como me comporto com minha familía</Text>
          <Text style={styles.topic}>- O que minha familía espera de mim</Text>
          <Text style={styles.topic}>- O que fazer para ter um lar feliz</Text>
          <Text style={styles.topic}>- Irmão: Um laço que se carrega a vida inteira</Text>
        </View>
      </ExpandableItem>
      <ExpandableItem title="DEZEMBRO" subtitle="Encerramento das atividades">
        <View style={styles.topicContainer}>
          <Text style={styles.topic}>- Apresentação</Text>
          <Text style={styles.topic}>- Apadrinhamento</Text>
          <Text style={styles.topic}>- Confraternização</Text>
        </View>
      </ExpandableItem>
    </ScrollView>
  );
}
