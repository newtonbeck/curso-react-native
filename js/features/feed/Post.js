import React from 'react';
import { Dimensions, View, Text, Image } from 'react-native';

const width = Dimensions.get('screen').width;

const Post = ({ post }) => {
  const { loginUsuario, urlFoto } = post;
  return (
    <View>
      <Text>{loginUsuario}</Text>
      <Image 
        style={{ width: width, height: width }} 
        source={{ uri: urlFoto }} />
    </View>
  );
}

export default Post;