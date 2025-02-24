import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegistrationForm = ({ onRegistrar }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const manejarRegistro = () => {
    const datosRegistro = { nombre, correo, contrasena };

    onRegistrar(datosRegistro);

    setNombre('');
    setCorreo('');
    setContrasena('');
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <TextInput
        placeholder="Nombre"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 5, paddingHorizontal: 5 }}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Correo electrónico"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 5, paddingHorizontal: 5 }}
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 5, paddingHorizontal: 5 }}
        value={contrasena}
        onChangeText={setContrasena}
      />
      <Button title="Registrar" onPress={manejarRegistro} />
    </View>
  );
};

export default RegistrationForm;
