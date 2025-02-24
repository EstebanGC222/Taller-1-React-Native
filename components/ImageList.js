import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageList = ({ imagenes }) => {
  return (
    <View style={styles.container}>
      {imagenes.map((url, index) => (
        <Image
          key={index}
          source={{ uri: url }}
          style={styles.imagen}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imagen: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default ImageList;
