import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './src/navigation/navigation';

//test
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

