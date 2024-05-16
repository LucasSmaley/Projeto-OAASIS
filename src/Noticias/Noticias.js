import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import { styles } from './styles';

export default function Noticias() {
  const [evento, setEvento] = useState('');
  const [eventosList, setEventosList] = useState([]);

  const handleAddEvento = () => {
    if (evento.trim() !== '') {
      setEventosList([...eventosList, evento]);
      setEvento('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notícias</Text>
      <ScrollView style={styles.eventosContainer}>
        {eventosList.map((evento, index) => (
          <Text key={index} style={styles.eventoItem}>{evento}</Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Digite o evento"
        value={evento}
        onChangeText={setEvento}
        multiline={true}
      />
      <Pressable style={styles.addButton} onPress={handleAddEvento}>
        <Text style={styles.addButtonText}>Adicionar Evento</Text>
      </Pressable>
    </View>
  );
}
