import React, { useEffect, useState } from "react";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";

export default function Card({data,navigation}) {
  
  return (
    <>
      
<FlatList
        data={data?.getBlogs}
        renderItem={(itemData) => {
          console.log("itemCard", itemData);
          return (
            <>
              
                <View style={styles.card}>
                <Pressable onPress={() => navigation.navigate(`Blog`,{itemId: itemData?.item?.id})}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://picsum.photos/1200/400?random="+itemData.item.id
                  }}
                />
                <Text style={styles.title}>
                    {itemData?.item?.name}
                </Text>
                <Text style={styles.description}>
                    {itemData?.item?.description}
                </Text>
                <Text style={styles.created_at}>
                    {itemData?.item?.created_at}
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