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
  return (
    <View>
      <Text>Some results here with</Text>
    </View>
  );
};

export default JobListing;
