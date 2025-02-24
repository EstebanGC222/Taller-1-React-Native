import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const GuessForm = ({ respuestaCorrecta }) => {
  const [adivinanza, setAdivinanza] = useState('');
  const [mensaje, setMensaje] = useState('');

  const verificarAdivinanza = () => {
    if (adivinanza.trim().toLowerCase() === respuestaCorrecta.toLowerCase()) {
      setMensaje('Correcto');
    } else {
      setMensaje('Incorrecto, intente de nuevo.');
    }
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        placeholder="Adivina la palabra"
        value={adivinanza}
        onChangeText={setAdivinanza}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          marginBottom: 5,
          paddingHorizontal: 5,
        }}
      />
      <Button title="Enviar" onPress={verificarAdivinanza} />
      {mensaje !== '' && <Text style={{ marginTop: 10 }}>{mensaje}</Text>}
    </View>
  );
};

export default GuessForm;
