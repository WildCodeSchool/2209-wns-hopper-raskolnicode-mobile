import React, { useEffect, useState } from "react";
import { GET_BLOGS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


export default function Home({ navigation }) {
const { loading, data } = useQuery(GET_BLOGS);

  return (
    <>
      <Text style={styles.text}>Welcome Home</Text>
      <FlatList
      data={data?.getBlogs}
      renderItem={(itemData) => {
        console.log("item", itemData);
        return (
          <>
            <View style={styles.card} >
                <Text>
                    {itemData?.item?.name}
                </Text>
            </View>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Blog')}
            />
          </>
        );
      }}
    />
    </>
  ) 
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center'
  },
  card:{
    padding:20,
    margin:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth: 1,
  },
});
