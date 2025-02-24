import React, { useState } from 'react';
import { View } from 'react-native';
import ChildCounter from './ChildCounter';

const ParentCounter = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <ChildCounter contador={contador} onIncrementar={incrementar} />
    </View>
  );
};

export default ParentCounter;
