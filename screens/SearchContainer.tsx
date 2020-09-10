import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  GestureResponderEvent,
  SafeAreaView,
} from 'react-native';
import { Icon, Row } from 'native-base';
import { initialWindowMetrics } from 'react-native-safe-area-context';

type SearchContainerProps = {
  history: [];
  onPress: (event: GestureResponderEvent) => void;
};

type state = {
  tech: [];
  currentTech: string;
};

const SearchContainer = (props: SearchContainerProps) => {
  const { history } = props;

  const [currentTech, updateCurrentTech] = useState('');
  const [tech, addTech] = useState([]);

  const handleChange = (text: any) => {
    updateCurrentTech(text);
  };

  const handleTechStack = () => {
    let initial: any = [...tech, currentTech];
    addTech(initial);
    updateCurrentTech('');
  };
  const handleDeleteTech = (e: any) => {
    const idx = e.target.key;
    console.log(idx);
    if (idx > -1) {
      tech.splice(idx, 1);
    }
  };

  return (
    <View style={styled.container}>
      <SafeAreaView>
        <View style={styles.title}>
          <Text>Add Your Tech</Text>
        </View>
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

          <TouchableOpacity style={styles.addButton} onPress={handleTechStack}>
            <Icon name="add" />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {tech.map((techItem) => (
            <View style={styles.techListItem}>
              <Text style={{ color: 'white' }}> {techItem} </Text>
              <Text
                key={tech.indexOf(techItem)}
                style={styles.deleteTechItem}
                onPress={handleDeleteTech}
              >
                x
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
    margin: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    height: 25,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: 300,
    textAlign: 'center',
    color: 'black',
  },
  locationButton: {
    backgroundColor: '#7a42f4',
    margin: 15,
    height: 25,
    marginBottom: 5,
    width: 100,
    marginLeft: 15,
  },
  locationText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 3,
  },
  addText: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 15,
  },
  addButton: {
    marginTop: 5,
    marginLeft: 0,
    justifyContent: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    marginRight: 30,
    marginLeft: 30,
  },
  techListItem: {
    backgroundColor: '#7a42f4',
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    padding: 5,
    flexDirection: 'row',
  },
  deleteTechItem: {
    marginRight: 5,
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fffd4',
  },
});
