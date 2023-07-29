import React, { useEffect, useState } from "react";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";
import { Blog, Post } from "../../interfaces";

export type PostCardProps = {
  itemData : Post
  path : string
  navigation : any
}

export default function PostCard({itemData,path,navigation}: PostCardProps) {
  const date = new Date(itemData?.updated_at)
  return (
        <View style={styles.card} key={itemData?.id}>
        <Pressable onPress={() => navigation.navigate(`${path}`,{itemId: itemData?.id})}>
        {itemData?.picture ?
        <Image style={styles.image} source={{
          uri: itemData.picture.link
        }}/>
          :
        <Image style={styles.image} source={require('../../assets/default-post-img.png')}/>
        }
        <Text style={styles.title}>
            {itemData?.title}
        </Text>
        <Text style={styles.description}>
            {itemData?.summary}
        </Text>
        <Text style={styles.created_at}>
            modifié le {date.toLocaleDateString("fr")}
        </Text>
        </Pressable>
        </View>
  ) 
}
const styles = StyleSheet.create({
    text:{
      textAlign:'center'
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
      height: 400,
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
        width:'50%',
        margin:10,
        borderWidth:1
    }
  });