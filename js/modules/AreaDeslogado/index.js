import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "../Login/LoginScreen";
export const AreaDeslogado = createStackNavigator({
  // UrlDaTela: { screen: ComponenteDaTela }
  Login: {
    screen: LoginScreen
    // screen: Felipe
  }
});
