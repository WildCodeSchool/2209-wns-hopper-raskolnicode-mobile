import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";
import { GET_POST } from "../graphql/queries";
import { ScrollView } from "react-native-gesture-handler";

export default function Post({route,navigation}) {
  const { itemId } = route.params;
  const { loading, data,refetch } = useQuery(GET_POST, {
    variables: {
      postId: itemId,
    },
  });
  console.log(data)
  useEffect(()=>{
    refetch()
  },[])
  return (
    <>
    <ScrollView>
      <Text style={styles.title}>{data?.getPost.title}</Text>
    {data?.getPost.picture ?
      <Image style={styles.image} source={{
        uri: data?.getPost.picture.link
      }}/>
        :
      <Image style={styles.image} source={require('../assets/default-post-img.png')}/>
      }
      <Text style={styles.sum}>{data?.getPost.summary}</Text>
      <Text style={styles.content}>{data?.getPost.content}</Text>
      {data?.getPost.comments !='' && 
      <Text style={styles.title}>Commentaires</Text>
      }
      {loading === true && <Text>Chargement...</Text>}
      {data?.getPost.comments.map((itemData)=>{
        return (
            <View style={styles.card} key={itemData?.id}>
              <Text >
                  {itemData?.text}
              </Text>
              <Text style={styles.pseudo}>
                  {itemData?.user.pseudo}
              </Text>
              </View>
        );
      })}
      </ScrollView>
    </>
  ) 
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width:'100%'
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:'center',
    margin:10
  },
  content:{
    margin:20
  },
  sum:{
    margin:20
  },
  card:{
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    margin:10,
    padding:10,
    borderRadius: 10
  },
  pseudo:{
    textAlign:'right'
  }
});
