import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddTodoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="Enter title" />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter description"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "#dc3545",
            ...styles.button,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close-circle-outline" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: 5 }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#28a745",
            ...styles.button,
          }}
          onPress={() => {}}
        >
          <Ionicons name="save" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: 5 }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
  },
});
