import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
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
};

const JobListing = (props: JobListingProps) => {
  const listing = props.listing;
  console.log('listing', listing)
  return (
    <View style={styles.listingContainer}>
      <Text>Tital {listing.title}</Text>
      <Text>Tital {listing.created}</Text>
      <Text>Location {listing.location.display_name}</Text>
      <Text>Decription {listing.description}</Text>
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
    borderTopWidth: 1
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
  }
});

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7fffd4',
  },
});