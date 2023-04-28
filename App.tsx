import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BottomTabNavigator from './navigation/TabNavigator';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.1.25:5000',
  cache: new InMemoryCache()
});


export default function App () {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </ApolloProvider>
  );
}
