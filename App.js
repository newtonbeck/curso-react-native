import React, { Component } from "react";
import Feed from "./js/features/feed/Feed";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from "react-navigation";
import { AreaDeslogado } from "./js/modules/AreaDeslogado";

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

export default createAppContainer(AppNavigation);
