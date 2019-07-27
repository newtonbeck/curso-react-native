import React from "react";
import { Dimensions, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'

const width = Dimensions.get("screen").width;

const Cabecalho = ({ post }) => (
  <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
    <Image
      style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
      source={{ uri: post.urlPerfil }}
    />
    <Text>{post.loginUsuario}</Text>
  </View>
);

export const Like = ({ post, onHeartClick }) => (
  <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
    <TouchableOpacity onPress={() => onHeartClick(post.id)}>
      <Ionicons style={{ marginRight: 10 }} name={post.likeada ? 'md-heart' : 'md-heart-empty'} size={48} color={post.likeada ? 'red' : 'black' } />
    </TouchableOpacity>
    <Text>{post.likers.length} pessoas gostaram do seu post</Text>
  </View>
);

export const Post = ({ post, onLikeClick }) => (
  <View>
    <Cabecalho post={post} />
    <Image
      style={{ width: width, height: width }}
      source={{ uri: post.urlFoto }}
    />
    <Like post={post} onHeartClick={onLikeClick} />
  </View>
);
