import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { Icon } from "native-base";

type SearchContainerProps = {
  history: []
  onPress: (event: GestureResponderEvent) => void
};



type State = {
  tech: [],
  currentTech: string
};

const SearchContainer = (props: SearchContainerProps) => {

  const { history } = props;
  
  const [tech, addTech] = useState([]);
  const [currentTech, updateCurrentTech] = useState("");

  const handleTechStack = (currentTech: string) => {
    let initial: any = [...tech, currentTech];
    console.log('initial', initial);
    console.log('currenttech', currentTech);
    addTech(currentTech => initial);
    console.log('tech', tech);
  };

  const handleChange = (text: any) => {
    // let initial: any = [...tech, text];
    
    updateCurrentTech(text);
  };

  return (
    <View style={styled.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter a Tech Stack"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          value={currentTech}
          onChangeText={handleChange}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleTechStack}
        >
          {/* <Text style={styles.addText}>+</Text> */}
          <Icon name="add" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => history.push("/jobpage")} //insert if conditional functionality later to see if credentials correct then route to jobs else alert message
          >
          <Text style={styles.locationText}> Location </Text>
        </TouchableOpacity>
          <Text style={styles.container}>{currentTech}</Text>
      </View>
    </View>
  );
};

export default SearchContainer;

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
