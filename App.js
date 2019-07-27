import React from 'react';
import Feed from "./js/features/feed/Feed";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from "react-navigation";
import { AreaDeslogado } from "./js/modules/AreaDeslogado";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const AreaLogado = createStackNavigator({
  Home: { screen: Feed },
  Post: { screen: Feed }
});

const AppNavigation = createSwitchNavigator(
  {
    Logado: AreaLogado,
    Deslogado: AreaDeslogado
  },
  { initialRouteName: "Deslogado" }
);

const AppContainer = createAppContainer(AppNavigation);

/*
{
  type: 'ADD_POSTS',
  posts: [{}, {}, {}]
}
{
  type: 'LIKE',
  postId: 1
}
*/
const postsReducer = (state = [], action) => {
  if (action.type === 'ADD_POSTS') {
    return action.posts;
  }
  if (action.type === 'LIKE') {
    const post = state.find((post) => post.id === action.postId);

    const postLikeado = {
      ...post,
      likeada: !post.likeada,
    };

    const newPosts = state.map((post) => {
      return post.id !== action.postId ? post : postLikeado;
    });

    return newPosts;
  }
  return state;
}

const store = createStore(combineReducers({
  posts: postsReducer
}));

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;