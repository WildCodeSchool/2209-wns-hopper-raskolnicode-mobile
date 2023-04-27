
  import React from 'react'
  import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, Pressable } from "react-native"
  
  export default function Carousel({data,navigation}) {
    return (
      <>
          <ScrollView horizontal>
            {data?.getBlogs?.map((itemData) =>{
              console.log(itemData)
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
                  </Pressable>
                  </View>
              )
            })
            }
          </ScrollView>
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
        margin:10,
        borderRadius: 10,
        height:270,
        width:150,
    },
    image: {
      height: 150,
      width:'100%'
    },
    title: {
        margin:5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    description:{
        margin:5
    },
    created_at:{
        padding:8,
        width:'60%',
        margin:10,
        borderWidth:1
    }
  });
