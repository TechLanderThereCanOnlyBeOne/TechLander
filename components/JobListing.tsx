import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon, Row } from 'native-base';

const JobListing = ({company, locationName, locationArea, url, description, title, created}) => {
  return (
    <View><Text>Some results here with {company}, {locationName}, {locationArea}, {url}, {description}, {title}, {created}</Text></View>
  )
}

// {
//   company: { display_name: 'Cognizant' },
//   location: {
//     display_name: 'New York City, New York',
//     area: ["US","New York","New York City"]
//   },
//   redirect_url:
//     'https://www.adzuna.com/land/ad/1652179176?se=fhjv5XLz6hGQK1pXjRGthg&utm_medium=api&utm_source=8340be95&v=1CFAC652FCA18D09250F42603D8D3728574F6C58',
//   description:
//     '...  and Marketing Technology domain, including: \u2022 Understand business requirements and translate them into technical requirements \u2022 Develop new user-facing features using <strong>React</strong>.js, Riot and <strong>Redux</strong> ...  end teams. Key Qualifications: \u2022 Deep understanding of <strong>React</strong> Architecture, Hooks. Webpack, , SASS, LESS; \u2022 Experience in development RWD and SPA with ReactJS, <strong>Redux</strong>, Routers, jQuery ...',
//   title: 'UI Developer \u2013 <strong>React</strong>',
//   created: '2020-08-20T10:18:33Z',
// },

export default JobListing