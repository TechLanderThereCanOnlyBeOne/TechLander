import React, { useState } from 'react';
import JobListing from '../components/JobListing';
import useJobQuery from '../hooks/useJobQuery';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  GestureResponderEvent,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Icon, Row } from 'native-base';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
// import { uuid } from 'uuidv4';

type SearchContainerProps = {
  history: [];
  onPress: (event: GestureResponderEvent) => void;
};

type state = {
  tech: [];
  currentTech: string;
  location: string;
  addQuery: string;
  subtractQuery: string;
  queriedListings: [{}];
  listing: {
    company: { display_name: string };
    location: { display_name: string; area: string[] };
    redirect_url: string;
    description: string;
    title: string;
    created: string;
  };
};

const SearchContainer = (props: SearchContainerProps) => {
  const { history } = props;

  const [currentTech, updateCurrentTech] = useState('');
  const [tech, addTech] = useState([]);
  const [location, setLocation] = useState('');
  const [addQuery, setAddQuery] = useState('');
  const [subtractQuery, setSubtractQuery] = useState('');

  // queried listings is returned as as result array
  // Dummy data
  const [queriedListings, setQueriedJobListings] = useState([
    {
      company: { display_name: 'Cognizant' },
      location: {
        display_name: 'New York City, New York',
        area: ['US', 'New York', 'New York City'],
      },
      redirect_url:
        'https://www.adzuna.com/land/ad/1652179176?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=1CFAC652FCA18D09250F42603D8D3728574F6C58',
      description:
        '...  and Marketing Technology domain, including: \u2022 Understand business requirements and translate them into technical requirements \u2022 Develop new user-facing features using <strong>React</strong>.js, Riot and <strong>Redux</strong> ...  end teams. Key Qualifications: \u2022 Deep understanding of <strong>React</strong> Architecture, Hooks. Webpack, , SASS, LESS; \u2022 Experience in development RWD and SPA with ReactJS, <strong>Redux</strong>, Routers, jQuery ...',
      title: 'UI Developer \u2013 <strong>React</strong>',
      created: '2020-08-20T10:18:33Z',
    },
    {
      company: { display_name: 'Cognizant' },
      location: {
        display_name: 'New York City, New York',
        area: ['US', 'New York', 'New York City'],
      },
      redirect_url:
        'https://www.adzuna.com/land/ad/1652179176?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=1CFAC652FCA18D09250F42603D8D3728574F6C58',
      description:
        '...  and Marketing Technology domain, including: \u2022 Understand business requirements and translate them into technical requirements \u2022 Develop new user-facing features using <strong>React</strong>.js, Riot and <strong>Redux</strong> ...  end teams. Key Qualifications: \u2022 Deep understanding of <strong>React</strong> Architecture, Hooks. Webpack, , SASS, LESS; \u2022 Experience in development RWD and SPA with ReactJS, <strong>Redux</strong>, Routers, jQuery ...',
      title: 'UI Developer \u2013 <strong>React</strong>',
      created: '2020-08-20T10:18:33Z',
    },
    {
      title: 'Sr. <strong>React</strong>/UI Developer or Architect',
      created: '2020-09-02T10:22:01Z',
      location: { display_name: 'Jersey City, Hudson County' },
      company: { display_name: 'HR Pundits', area: ['US', 'New York', 'New York City'] },
      description:
        '. Strong in <strong>React</strong> Framework, <strong>Redux</strong>. UIFront end design ...',
      redirect_url:
        'https://www.adzuna.com/land/ad/1683644527?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=35AEBE994626059F79C5FAB82A54103CDE1DB011',
    },
  ]);

  const handleTechChange = (text: any) => {
    updateCurrentTech(text);
  };

  const handleLocationInput = (text: any) => {
    setLocation(text);
  };
  const handleLocationSubmit = () => {
    console.log(location);
    // send location as query
  };

  const handleTechStack = () => {
    if (currentTech.length > 0) {
      let initial: any = [...tech, currentTech];
      addTech(initial);
      updateCurrentTech('');
    }
    // add the most recent item into search query
    let newTechStack = tech.concat(currentTech);
    const addQueryString = newTechStack.join(' ');
    // optional set state
    setAddQuery(addQueryString);
    // send query
  };

  const handleDeleteTech = (e: any) => {
    // console.log(e);
    const idx = tech.indexOf(e);
    if (idx > -1) {
      tech.splice(idx, 1);
    }
    console.log(tech);
    handleTechStack();
    const subtractQueryString = tech.join(' ');
    // optional set state
    setSubtractQuery(subtractQueryString);
    // send query
  };

  return (
    <View style={styled.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Enter Your Location"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              value={location}
              onChangeText={handleLocationInput}
            />

            <TouchableOpacity style={styles.addButton} onPress={handleLocationSubmit}>
              <Icon name="add" />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Enter a Tech Stack"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              value={currentTech}
              onChangeText={handleTechChange}
            />

            <TouchableOpacity style={styles.addButton} onPress={handleTechStack}>
              <Icon name="add" />
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            {tech.map((techItem) => (
              <View style={styles.techListItem}>
                <Text style={{ color: 'white' }} onPress={() => handleDeleteTech(techItem)}>
                  {techItem} x
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.header}>Search Results</Text>
          <FlatList
            data={queriedListings}
            renderItem={(listing) => <JobListing listing={listing.item} />}
          />
        </SafeAreaView>
      </ScrollView>
      
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
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20,
    marginLeft: 30,
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
  resultsContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    marginBottom: 10,
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
