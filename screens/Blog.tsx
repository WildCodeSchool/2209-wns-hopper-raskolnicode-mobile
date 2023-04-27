import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";
import { GET_BLOG } from "../graphql/queries";

export default function Blog({route, navigation}) {
  const { itemId } = route.params;
  const { loading, data } = useQuery(GET_BLOG, {
    variables: {
      getBlogId: itemId,
    },
  });
  return (
    <>
      <Text style={styles.text}>{data?.getBlog.name}</Text>
      <Text style={styles.text}>{data?.getBlog.description}</Text>
      <Text> </Text>
      <FlatList
        data={data?.getBlog.posts}
        renderItem={(itemData) => {
          console.log("itemPost", itemData);
          return (
            <>
              <View style={styles.card}>
                <Pressable onPress={() => navigation.navigate(`Post`,{itemId: itemData?.item?.id})}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://picsum.photos/1200/400?random="+itemData.item.id
                  }}
                />
                <Text style={styles.title}>
                    {itemData?.item?.title}
                </Text>
                <Text style={styles.description}>
                    {itemData?.item?.summary}
                </Text>
                </Pressable>
                </View>
            </>
          );
        }}
      />
    </>
  )
}
const styles = StyleSheet.create({
  text:{
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
