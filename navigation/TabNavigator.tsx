
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "./MainStackNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "../screens/Login";
import { useNavigation } from '@react-navigation/native';
import { useQuery } from "@apollo/client";
import { GET_LOGGED_USER } from "../graphql/queries";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "../UserContext";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const { data, refetch, error } = useQuery(GET_LOGGED_USER);
  // AsyncStorage.removeItem("token");
  useEffect(() => {
    if (error) {
      setUser(null);
    }
  }, [error]);

  async function onTokenChange(token?: string) {
    console.log('TOKEN   :',token)
    if (token) {
      await AsyncStorage.setItem("token", token);
      
    } else {
      await AsyncStorage.removeItem("token");
      
    }
    try {
      await refetch();
      setUser(data?.loggedUser);
    } catch (err: any) {
      console.log(JSON.stringify(err,null,4)) 
      if (err.message.includes("Access denied!")) {
        setUser(null);
      }
    }
  }


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
      <Tab.Screen
        name="Home"
        children={()=><MainStackNavigator onTokenChange={onTokenChange} />}
        options={{ headerShown: false }}
      />
      {!user && 
      <Tab.Screen
        name="Connexion"
        children={()=><Login onTokenChange={onTokenChange} navigation={navigation}/>}
        options={{ headerShown: false }}
      />
      }
      
    </Tab.Navigator>
    </UserContext.Provider>
  );
};

export default BottomTabNavigator;