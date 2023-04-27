import React, { useEffect, useState } from "react";
import { GET_BLOGS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";
import Card from "../components/Card/Card";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "../components/MyCarousel/Carousel";

export default function Home({ navigation }) {
const { loading, data } = useQuery(GET_BLOGS);

  return (
    <>
    <ScrollView style={styles.container}>
        <View style={styles.carousel}>
          <Text style={styles.title}>Les blogs les plus récents</Text>
          {loading === true && <Text>Chargement...</Text>}
          <Carousel data={data} navigation={navigation}/>
        </View>
        <View style={styles.list}>
          <Text style={styles.title}>Parcourir les Blogs</Text>
          {loading === true && <Text>Chargement...</Text>}
          <Card data={data} navigation={navigation}/>
        </View>
    </ScrollView>
    </>
  ) 
}

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    fontSize:24,
    margin:20,
    fontWeight:'bold'
  },
  container:{
    height:"100%",
    width:"100%"
  },
  carousel:{

  },
  list:{
    
  }
});
