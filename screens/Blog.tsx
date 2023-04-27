import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";
import { GET_BLOG } from "../graphql/queries";
import ListCard from "../components/ListCard/ListCard";
import { ScrollView } from "react-native-gesture-handler";

export default function Blog({route, navigation}) {
  const { itemId } = route.params;
  const { loading, data,refetch } = useQuery(GET_BLOG, {
    variables: {
      getBlogId: itemId,
    },
  });

  useEffect(()=>{
    refetch()
  },[])
console.log(data)
  return (
    <>
    <ScrollView>
      <Text style={styles.text}>Bienvenue sur {'\n'}{data?.getBlog.name}</Text>
      <ListCard data={data?.getBlog.posts} navigation={navigation}/>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  text:{
    margin:5,
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold'
  },
  card:{
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      margin:30,
      borderRadius: 10
  },
  image: {
    height: 200,
    width:'100%'
  },
  title: {
      margin:10,
      fontSize: 20,
      fontWeight: 'bold'
  },
  description:{
      margin:10
  },
  created_at:{
      padding:8,
      width:'60%',
      margin:10,
      borderWidth:1
  }
});
