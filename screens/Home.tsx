import React, { useEffect, useState } from "react";
import { GET_BLOGS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";
import Card from "../components/Card/Card";



export default function Home({ navigation }) {
const { loading, data } = useQuery(GET_BLOGS);

  return (
    <>
      <View>
        <Text style={styles.title}>Les blogs les plus aimés</Text>
        {/* Carousel */}
      </View>
      <View>
        <Text style={styles.title}>Parcourir les Blogs</Text>
        <Card data={data} navigation={navigation}/>
      </View>
    </>
  ) 
}

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    fontSize:24
  },
});
