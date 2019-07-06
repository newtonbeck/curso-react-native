import React from 'react';
import { Dimensions, View, Text, Image } from 'react-native';

const width = Dimensions.get('screen').width;

const Cabecalho = ({ post }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
    <Image 
      style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} 
      source={{ uri: post.urlPerfil }} />
    <Text>{post.loginUsuario}</Text>
  </View>
);

export const Post = ({ post }) => (
  <View>
    <Cabecalho post={post} />
    <Image 
      style={{ width: width, height: width }} 
      source={{ uri: post.urlFoto }} />
  </View>
);
