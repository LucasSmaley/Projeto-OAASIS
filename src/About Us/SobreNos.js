import React, { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function SobreNos() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.sobreNos}>
        <Text style={styles.title}>Sobre Nós</Text>

        <Text style={styles.informativosContainer}>
          {"    "}
          Em 2023 a OAASIS - Organização Assistencial de Acolhimento e Serviços
          de Integração Social, inicia suas atividades assumindo integralmente o
          serviço de convivência e fortalecimento de vínculos para crianças e
          adolescentes Espaço Veredas antes administrado pelo CRECEI Centro
          Renovado Cristão de Ensino Integral.
          {"\n    "}A transição ocorreu devido a necessidade de reorganização
          estratégica/administrativa com foco em otimizar os serviços ofertados
          em beneficio da população atendida. Toda a equipe gestora,
          administrativa e operacional, bem como, equipamentos e endereço, se
          mantiveram, pois era necessário conservar o know how adquirido ao
          longo destes 25 anos.
          {"\n    "}A OAASIS tem como finalidade a Promoção de atividades e
          finalidades de relevância pública e social. Defesa, Garantia de
          Direitos e Atividade de Atendimento de Assistência Social, no
          desenvolvimento de programas, projetos, serviços e ações que atendam
          as políticas de assistência social, na Proteção Social Básica,
          Especial, Média e de Alta Complexidade, de saúde, esporte, cultura,
          educação e lazer, contribuindo para a melhoria de qualidade de vida de
          seus usuários e familiares e também a promoção de atividades e
          finalidades de relevância pública e social.
        </Text>
      </View>

      <View style={styles.missao}>
        <Text style={styles.title}>Missão</Text>

        <Text style={styles.informativosContainer}>
          {"    "}
          Acolher pessoas em situação de vulnerabilidade social, gerando novas
          oportunidades e promovendo a autonomia e independência, através de
          ações socioeducativas que estimulem o fortalecimento de vínculos e o
          desenvolvimento social dos atendidos.
        </Text>
      </View>

      <View style={styles.visao}>
        <Text style={styles.title}>Visão</Text>

        <Text style={styles.informativosContainer}>
          {"    "}
          Ser agente de diminuição da vulnerabilidade social e promoção de
          cidadania e qualidade de vida, expondo novas perspectivas e
          possibilidades de mudanças de paradigmas com base nos princípios
          cristãos.
        </Text>
      </View>

      <View style={styles.valores}>
        <Text style={styles.title}>Valores</Text>

        <Text style={styles.informativosContainer}>
          Altruísmo{"\n\n"}
          Dignidade{"\n\n"}
          Emancipação{"\n\n"}
          Ética{"\n\n"}
          Transparência{"\n\n"}
        </Text>
      </View>
    </ScrollView>
  );
}
