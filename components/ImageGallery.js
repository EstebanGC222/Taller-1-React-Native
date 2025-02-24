import React, { useState } from 'react';
import { View } from 'react-native';
import ImageList from './ImageList';

const ImageGallery = () => {
  const [imagenes] = useState([
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1200px-All_Gizah_Pyramids.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6c/Egypt.Giza.Sphinx.02.jpg',
    'https://www.egiptoexclusivo.com/wp-content/uploads/2023/06/templo-ramses-II-abu-simbel.jpg',
  ]);

  return (
    <View style={{ marginVertical: 10 }}>
      <ImageList imagenes={imagenes} />
    </View>
  );
};

export default ImageGallery;
