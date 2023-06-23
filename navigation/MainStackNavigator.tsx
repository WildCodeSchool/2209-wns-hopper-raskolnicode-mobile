
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Blog from "../screens/Blog";
import Home from "../screens/Home";
import Post from "../screens/Post";
import { Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../UserContext";


const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  const user = useContext(UserContext);
  const handleLogout = async () => {
    props.onTokenChange()
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          user &&
          <Button
            onPress={handleLogout}
            title="Déconnexion"
          />
        ),
      }}
    >
      <Stack.Screen name="Accueil" component={Home} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="Article" component={Post} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };