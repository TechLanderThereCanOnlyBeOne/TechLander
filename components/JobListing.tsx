import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Icon, Row } from 'native-base';

type JobListingProps = {
  history: [];
  listing: {
    company: {
      display_name: string;
    };
    location: {
      display_name: string;
      area: [];
    };
    redirect_url: string;
    description: string;
    title: string;
    created: string;
  };
  tagStyles: { strong: { fontWeight: 'bold' } };
};

const JobListing = (props: JobListingProps) => {
  const listing = props.listing;
  const filteredTitle = listing['title'].replace(/<strong\s*>/g, '').replace(/<\/?strong\s*>/g, '');
  const filteredDescription = listing['description']
    .replace(/<strong\s*>/g, '')
    .replace(/<\/?strong\s*>/g, '');
  return (
    <View style={styles.listingContainer}>
      <View style={styles.listingLine}>
        <Text style={styles.bold}>{filteredTitle}</Text>
      </View>
      <View style={styles.listingLine}>
        <Text style={styles.bold}>Company </Text>
        <Text>{listing['company']['display_name']}</Text>
      </View>
      <View style={styles.listingLine}>
        <Text style={styles.bold}>Location </Text>
        <Text>{listing['location']['display_name']}</Text>
      </View>
      <View style={styles.listingLine}>
        <Text style={styles.bold}>Posted </Text>
        <Text>{listing['created']}</Text>
      </View>
      <View style={styles.listingLine}>
        <Text>{filteredDescription}</Text>
      </View>
    </View>
  );
};

export default JobListing;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
    margin: 20,
  },
  listingContainer: {
    flexDirection: 'column',
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopColor: '#7a42f4',
    borderTopWidth: 1,
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
  bold: {
    fontWeight: 'bold',
  },
  listingLine: {
    flexDirection: 'row',
  },
});

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fffd4',
  },
});
