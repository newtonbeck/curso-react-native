import React, { Component } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
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

  async componentDidMount() {
    const resposta = await fetch(
      "https://instalura-api.herokuapp.com/api/public/fotos/rafael"
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
          renderItem={({ item }) => <Post post={item} />}
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
