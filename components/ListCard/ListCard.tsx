import React, { useEffect, useState } from "react";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";

export default function Card({data,navigation}) {

  return (
    <>
      {data?.getBlogs ? data?.getBlogs?.map((itemData) =>{
      return (
        <View style={styles.card} key={itemData.id}>
        <Pressable onPress={() => navigation.navigate(`Blog`,{itemId: itemData.id})}>
        {itemData?.picture ?
        <Image style={styles.image} source={{
          uri: itemData.picture.link
        }}/>
          :
        <Image style={styles.image} source={require('../../assets/default-post-img.png')}/>
        }
        <Text style={styles.title}>
            {itemData?.name}
        </Text>
        <Text style={styles.description}>
            {itemData?.description}
        </Text>
        <Text style={styles.created_at}>
            {itemData?.updated_at}
        </Text>
        </Pressable>
        </View>
      )}
      ):
      data?.map((itemData) =>{
        return (
          <View style={styles.card} key={itemData.id}>
          <Pressable onPress={() => navigation.navigate(`Post`,{itemId: itemData.id})}>
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
              {itemData?.updated_at}
          </Text>
          </Pressable>
          </View>
        )}
        )
      }
    </>
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