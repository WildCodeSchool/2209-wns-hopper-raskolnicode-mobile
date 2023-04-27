
  import React from 'react'
  import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, Pressable } from "react-native"
  
  export default function Carousel({data,navigation}) {
    return (
      <>
        <View>
          <ScrollView horizontal>
            <View>
            <FlatList
              horizontal
              data={data?.getBlogs}
              renderItem={(itemData) => {
                console.log("itemCarousel", itemData);
                return (
                  <>
                      <View style={styles.card}>
                      <Pressable onPress={() => navigation.navigate(`Blog`,{itemId: itemData?.item?.id})}>
                      <Image
                        style={styles.image}
                        source={{
                          uri:
                            "https://picsum.photos/1200/400?random="+(itemData.item.id+1)
                        }}
                      />
                      <Text style={styles.title}>
                          {itemData?.item?.name}
                      </Text>
                      <Text style={styles.description}>
                          {itemData?.item?.description}
                      </Text>
                      </Pressable>
                      </View>
                  </>
                );
              }}
            />
            </View>
          </ScrollView>
        </View>
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
        height:250,
        width:150,
    },
    image: {
      height: 150,
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
