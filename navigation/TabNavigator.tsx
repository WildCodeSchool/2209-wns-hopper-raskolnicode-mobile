
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "./MainStackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "../screens/Login";
import { useQuery } from "@apollo/client";
import { GET_LOGGED_USER } from "../graphql/queries";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../UserContext";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [user, setUser] = useState(null);
  const { data, refetch, error } = useQuery(GET_LOGGED_USER);
  // AsyncStorage.removeItem("token");
  useEffect(() => {
    if (error) {
      setUser(null);
    }
  }, [error]);

  async function onTokenChange(token?: string) {
    if (token) {
      await AsyncStorage.setItem("token", token);
    } else {
      await AsyncStorage.removeItem("token");
    }
    try {
      await refetch();
    } catch (err: any) {
      console.log(JSON.stringify(err,null,4)) 
      if (err.message.includes("Access denied!")) {
        setUser(null);
      }
    }
  }

  useEffect(() => {
    setUser(data?.loggedUser);
    console.log("STACK",user)
  }, [data]);

  return (
    <UserContext.Provider value={user}>
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          
          return <Ionicons name={"home"} size={size} color={color} />;
        },
        tabBarActiveTintColor: route.name === "Home"?'#345995':"black",
      })}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown: false}}/>
      {!user && 
      <Tab.Screen
        name="Connexion"
        children={()=><Login onTokenChange={onTokenChange} />}
        options={{ headerShown: false }}
      />
      }
      
    </Tab.Navigator>
    </UserContext.Provider>
  );
};

export default BottomTabNavigator;