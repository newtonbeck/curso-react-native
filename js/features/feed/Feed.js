import React, { Component } from "react";
import { SafeAreaView, StyleSheet, FlatList, AsyncStorage } from "react-native";
import { Post } from "./Post";

export default class Feed extends Component {

  static navigationOptions = {
    header: null
  }

  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  onLike = (postId) => {
    alert(postId);
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
    this.setState({ posts: json });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Post post={item} onLikeClick={this.onLike} />}
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
