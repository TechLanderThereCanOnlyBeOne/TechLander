import React, { useState } from 'react';
import JobListing from '../components/JobListing';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  GestureResponderEvent,
  SafeAreaView,
  FlatList
} from 'react-native';
import { Icon, Row } from 'native-base';
import { initialWindowMetrics } from 'react-native-safe-area-context';
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
          area: ["US","New York","New York City"]
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
        location: {
          display_name: 'Jersey City, Hudson County',
        },
        company: { display_name: 'HR Pundits', area: ["US","New York","New York City"]},
        description:
          '. Strong in <strong>React</strong> Framework, <strong>Redux</strong>. UIFront end design ...',
        redirect_url:
          'https://www.adzuna.com/land/ad/1683644527?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=35AEBE994626059F79C5FAB82A54103CDE1DB011',
      },
      {
        location: {
          display_name: 'Grand Central, Manhattan',
          area: ['US', 'New York', 'New York City', 'Manhattan', 'Grand Central'],
        },
        company: { display_name: 'Skiltrek LLC' },
        redirect_url:
          'https://www.adzuna.com/land/ad/1669036288?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=2065A59E97D92E2AA660CBB7F77D9BA72FCB44FC',
        description:
          '...  are the skill splits requested by the manager - 100 % means they need to be fully proficient. <strong>React</strong>.js <strong>Redux</strong> & Flux Knowledge of REST API GIT and Jenkins Knowledge PostgreSQL DB Node.js ... REQUIRED EXPERIENCE: 5-8 years of IT development/programming/coding professional work experience Sr <strong>React</strong> Node JS developer with Java micro service development experience Here ...',
        title: '<strong>React</strong> NodeJS Developer',
        created: '2020-08-27T15:56:10Z',
      },
      {
        company: { display_name: 'Cognizant' },
        location: {
          display_name: 'New York City, New York',
          area: ['US', 'New York', 'New York City'],
        },
        description:
          '...  and Marketing Technology domain, including: \u2022 Understand business requirements and translate them into technical requirements \u2022 Develop new user-facing features using <strong>React</strong>.js, Riot and <strong>Redux</strong> ...  end teams. Key Qualifications: \u2022 Deep understanding of <strong>React</strong> Architecture, Hooks. Webpack, , SASS, LESS; \u2022 Experience in development RWD and SPA with ReactJS, <strong>Redux</strong>, Routers, jQuery ...',
        redirect_url:
          'https://www.adzuna.com/land/ad/1643960107?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=2055C39F73575F45A84BE2B053C9D436E08ED178',
        title: 'UI Developer \u2013 <strong>React</strong>',
        created: '2020-08-15T05:17:32Z',
      },
      {
        company: {
          display_name: 'JPMorgan Chase & Co',
        },
        location: {
          display_name: 'Jersey City, Hudson County',
          area: ['US', 'New Jersey', 'Hudson County', 'Jersey City'],
        },
        description:
          '...  opportunities for process and tool improvements and drive those from concept to implementation Developing new user-facing features using <strong>React</strong>.js/<strong>Redux</strong>/D3 Building reusable components ...  manipulation and the JavaScript object model Thorough understanding of <strong>React</strong>.js and its core principles Experience with <strong>Redux</strong> <strong>React</strong>.js workflows Hands-on experience in creating responsive ...',
        redirect_url:
          'https://www.adzuna.com/land/ad/1681652090?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=BF91E6CF3CDBB6572335E151BAB13DFC082F40A7',
        title: 'Full Stack Engineer (Java Microservices, <strong>React</strong> JS)',
        created: '2020-09-01T04:25:29Z',
      },
      {
        created: '2020-06-09T08:39:48Z',
        title: 'Full Stack Engineer (Java Microservices, <strong>React</strong> JS)',
        description:
          '...  new user-facing features using <strong>React</strong>.js/<strong>Redux</strong>/D3 Building reusable components and front-end libraries for future use Come up with UI and UX strategies based on our target goals ...  delivery and team management Thorough understanding of <strong>React</strong>.js and its core principles Experience with <strong>Redux</strong> <strong>React</strong>.js workflows Experience with common front-end development tools ...',
        redirect_url:
          'https://www.adzuna.com/land/ad/1568273242?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=8FE8EA6EAF5817FF09FBAC24222DDC613DD44B82',
        location: {
          area: ['US', 'New Jersey', 'Hudson County', 'Jersey City'],
          display_name: 'Jersey City, Hudson County',
        },
        company: { display_name: 'JPMorgan Chase' },
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
        <Text>Search Results</Text>
        <FlatList
        data={queriedListings}
        renderItem={(listing) => (
          <JobListing
            listing={listing}
          />
        )}
      />
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
