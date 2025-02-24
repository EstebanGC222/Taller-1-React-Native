import React, { useState } from 'react';
import { View } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
  const [respuestaCorrecta] = useState('Esteban');
  
  return (
    <View style={{ marginVertical: 10 }}>
      <GuessForm respuestaCorrecta={respuestaCorrecta} />
    </View>
  );
};

export default Game;
