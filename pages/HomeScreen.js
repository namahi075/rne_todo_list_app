import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/logo.png";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const todos = [
    { id: "1", text: "task 1" },
    { id: "2", text: "task 2" },
    { id: "3", text: "task 3" },
    { id: "4", text: "task 4" },
    { id: "5", text: "task 5" },
    { id: "6", text: "task 6" },
    { id: "7", text: "task 7" },
    { id: "8", text: "task 8" },
    { id: "9", text: "task 9" },
    { id: "10", text: "task 10" },
    { id: "11", text: "task 11" },
    { id: "12", text: "task 12" },
    { id: "13", text: "task 13" },
    { id: "14", text: "task 14" },
    { id: "15", text: "task 15" },
    { id: "16", text: "task 16" },
    { id: "17", text: "task 17" },
    { id: "18", text: "task 18" },
    { id: "19", text: "task 19" },
    { id: "20", text: "task 20" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>My Todo List</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.todoItem}>{item.text}</Text>
        )}
        keyExtractor={(item) => item.id}
        style={styles.todoList}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddTodo")}
      >
        <Ionicons
          name="add"
          size={20}
          color="white"
          style={{
            backgroundColor: "#5dc6f5",
            borderRadius: 50,
            marginRight: 10,
          }}
        />
        <Text style={styles.buttonText}>Add New Todo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  todoList: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
