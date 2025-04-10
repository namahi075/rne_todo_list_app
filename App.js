import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodoScreen from "./pages/AddTodoScreen";
import HomeScreen from "./pages/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddTodo" component={AddTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
