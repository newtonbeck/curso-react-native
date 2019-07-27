import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "../Login/LoginScreen";
import Felipe from "../../features/felipe/Felipe";
export const AreaDeslogado = createStackNavigator({
  // UrlDaTela: { screen: ComponenteDaTela }
  Login: {
    // screen: LoginScreen
    screen: Felipe
  }
});
