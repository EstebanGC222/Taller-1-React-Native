import React from 'react';
import { View, Button } from 'react-native';

const ThemeSwitcher = ({ onCambiarTema, temaActual }) => {

  const alternarTema = () => {
    const nuevoTema = temaActual === 'claro' ? 'oscuro' : 'claro';

    onCambiarTema(nuevoTema);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Cambiar Tema" onPress={alternarTema} />
    </View>
  );
};

export default ThemeSwitcher;
