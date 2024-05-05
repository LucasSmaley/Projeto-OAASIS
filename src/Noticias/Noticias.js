import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Noticias() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notícias</Text>
      <Text style={styles.content}>Conteúdo das notícias...</Text>
    </View>
  );
}
