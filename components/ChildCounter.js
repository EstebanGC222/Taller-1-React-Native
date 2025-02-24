import React from 'react';
import { Text, View, Button } from 'react-native';

const ChildCounter = ({ contador, onIncrementar }) => {
  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={onIncrementar} />
    </View>
  );
};

export default ChildCounter;
