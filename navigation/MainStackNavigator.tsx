
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Blog from "../screens/Blog";
import Home from "../screens/Home";
import Post from "../screens/Post";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Home} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="Article" component={Post} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };