import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"; // Importe seus estilos se necessário

const ExpandableItem = ({ title, subtitle, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.monthPlan}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {expanded && children}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExpandableItem;
