import React, { Component } from "react";
import { SafeAreaView, StyleSheet, FlatList, AsyncStorage } from "react-native";
import { Post } from "./Post";
import { store } from "../../../App";

export default class Feed extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    };

    store.subscribe(() => {
      this.setState({
        posts: store.getState()
      });
    });
  }

  onLike = async (postId) => {
    store.dispatch({
      type: 'LIKE',
      postId
    });

    // Enviar o like pro servidor

    const token = await AsyncStorage.getItem('token');

    await fetch(
      `https://instalura-api.herokuapp.com/api/fotos/${postId}/like`, {
      method: 'POST',
      headers: new Headers({'X-AUTH-TOKEN': token})
    });
  }

  navegaParaPost = () => {
    this.props.navigation.navigate('Post');
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    const resposta = await fetch(
      "https://instalura-api.herokuapp.com/api/fotos",
      {
        headers: new Headers({'X-AUTH-TOKEN': token})
      }
    );
    const json = await resposta.json();

    store.dispatch({
      type: 'ADD_POSTS',
      posts: json
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Post post={item} onLikeClick={this.onLike} navegaParaPost={this.navegaParaPost} />}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
