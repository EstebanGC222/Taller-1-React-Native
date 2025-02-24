import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const ToggleText = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const cambiarVisibilidad = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Mostrar - Ocultar" onPress={cambiarVisibilidad} />
      {mostrarTexto && (
        <Text>Hola</Text>
      )}
    </View>
  );
};

export default ToggleText;
