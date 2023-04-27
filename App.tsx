import 'react-native-gesture-handler';
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Post from './screens/Post';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.1.25:5000',
  cache: new InMemoryCache()
});

const Tab = createBottomTabNavigator();

export default function App () {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Article" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}
