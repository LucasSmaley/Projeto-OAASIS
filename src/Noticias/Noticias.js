import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.eventosContainer}>
        {eventosList.map((evento, index) => (
          <Text key={index} style={styles.eventoItem}>Nome da Criança: {selectedValue}{"\n\n"}Mensagem: {evento}</Text>
        ))}
      </ScrollView>

      <RNPickerSelect

        onValueChange={(value) => setSelectedValue(value)}

        items={[
          { label: 'Criança Um', value: 'Criança Um' },
        ]}
      />

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
