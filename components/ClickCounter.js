import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const ClickCounter = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Presiona aquí" onPress={incrementarContador} />
      <Text>Número de clics: {contador}</Text>
    </View>
  );
};

export default ClickCounter;
