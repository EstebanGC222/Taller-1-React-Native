import React from 'react';
import { View, Button } from 'react-native';

const AlertButton = ({ onMostrarAlerta }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Mostrar Alerta" onPress={onMostrarAlerta} />
    </View>
  );
};

export default AlertButton;
