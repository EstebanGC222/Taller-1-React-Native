import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const DynamicForm = () => {
  const [texto, setTexto] = useState('');
  const [valorGuardado, setValorGuardado] = useState('');

  const guardarTexto = () => {
    setValorGuardado(texto);
    setTexto(''); 
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
          paddingHorizontal: 5,
        }}
        placeholder="Escribe algo..."
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Guardar" onPress={guardarTexto} />
      {valorGuardado !== '' && (
        <Text>Texto guardado: {valorGuardado}</Text>
      )}
    </View>
  );
};

export default DynamicForm;
