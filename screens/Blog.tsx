import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  Button,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { GET_BLOG } from "../graphql/queries";
import { ScrollView } from "react-native-gesture-handler";
import PostCard from "../components/Card/PostCard";

export default function Blog({ route, navigation }) {
  const { itemId } = route.params;
  const { loading, data, refetch } = useQuery(GET_BLOG, {
    variables: {
      getBlogId: itemId,
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  return (
    <>
      <ScrollView>
        <View className="flex justify-items-center justify-center" style={styles.container}>
          <ImageBackground
            src={data?.getBlog.picture.link}
            resizeMode="cover"
          >
            <Text className="pt-8" style={styles.welcomeText}>
              Bienvenue sur
            </Text>
            <Text className="h-56" style={styles.jumbotronText}>
              {data?.getBlog.name}
            </Text>
          </ImageBackground>
        </View>
        {/* <Image className="object-cover object-center w-full mb-8 h-72 md:h-36 rounded-xl" src={data?.getBlog.picture.link} alt="blog"/> */}
        {/* <Text style={styles.text}>
          Bienvenue sur {"\n"}
          {data?.getBlog.name}
        </Text> */}

        <Text style={styles.description}>{data?.getBlog.description}</Text>

        {data?.getBlog.posts.map((itemData) => {
          return (
            <PostCard
              key={itemData.id}
              path={"Article"}
              itemData={itemData}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    lineHeight: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  welcomeText: {
    color: "white",
    fontSize: 20,
    paddingTop: 46,
    paddingBottom: 16,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000c0",
  },

  jumbotronText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  text: {
    margin: 5,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    margin: 10,
  },
  created_at: {
    padding: 8,
    width: "60%",
    margin: 10,
    borderWidth: 1,
  },
});
