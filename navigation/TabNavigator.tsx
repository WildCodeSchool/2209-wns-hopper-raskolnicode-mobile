
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "./MainStackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          
          return <Ionicons name={"home"} size={size} color={color} />;
        },
        tabBarActiveTintColor: route.name === "Home"?'#345995':"black",
      })}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;