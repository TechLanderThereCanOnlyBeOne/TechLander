import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Icon } from "native-base";

export default function SearchContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const handlePassword = (text: string) => {
    setPassword(text);
  };
  const login = (email: string, pass: string) => {
    alert("email: " + email + " password: " + pass);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter a Tech Stack"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={handleEmail}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => history.push("/signup")}
        >
          {/* <Text style={styles.addText}>+</Text> */}
          <Icon name="add" />
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.locationButton}
          onPress={() => history.push("/jobpage")} //insert if conditional functionality later to see if credentials correct then route to jobs else alert message
        >
          <Text style={styles.locationText}> Location </Text>
        </TouchableOpacity> */}
      </View>
    </View>

<View style={styles.container}>
<View style={styles.container}>
  <TextInput
    placeholder="Enter tech"
    style={styles.input}
    onChangeText={handleTech}
    value={enteredTech}
    underlineColorAndroid="transparent"
  />
  <Button title="ADD" onPress={addGoalHandler} />
</View>
<FlatList
  data={courseGoals}
  renderItem={(itemData) => (
    <View style={styles.listItem}>
      <Text>{itemData.item}</Text>
    </View>
  )}
/>
</View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: "row",
  },
  input: {
    margin: 15,
    height: 25,
    borderColor: "#7a42f4",
    borderWidth: 1,
    width: 200,
    textAlign: "center",
    color: "black",
  },
  locationButton: {
    backgroundColor: "#7a42f4",
    margin: 15,
    height: 25,
    marginBottom: 5,
    width: 100,
    marginLeft: 15,
  },
  locationText: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 3,
  },
  addText: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 15,
  },
  addButton: {
    marginTop: 10,
    marginLeft: 0,
  },
});

const styled = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#7fffd4",
    // flexDirection: "row",
  },
});
