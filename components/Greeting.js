import React from 'react';
import { Text, View } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hola, {name}</Text>
    </View>
  );
};

export default Greeting;
