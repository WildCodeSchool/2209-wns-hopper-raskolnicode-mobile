import React, { useContext, useEffect, useState } from "react";
import { GET_BLOGS, GET_LOGGED_USER } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "../components/MyCarousel/Carousel";
import BlogCard from "../components/Card/BlogCard";
import { UserContext } from "../UserContext";

export default function Home({ navigation }) {
  const { loading, data } = useQuery(GET_BLOGS);
  const user = useContext(UserContext);
  console.log("HOME user: ", user);
  return (
    <>
      <ScrollView style={styles.container}>
        <View className="font-bold flex-1 items-center justify-center bg-red">
          <Text className="font-bold text-red-500">This text is in red</Text>
        </View>
        <View style={styles.carousel}>
          <Text style={styles.title}>Les blogs les plus récents</Text>
          {loading === true && <Text>Chargement...</Text>}
          <Carousel data={data} navigation={navigation} />
        </View>
        <View style={styles.list}>
          <Text style={styles.title}>Parcourir les Blogs</Text>
          {loading === true && <Text>Chargement...</Text>}
          {data?.getBlogs.map((itemData) => {
            return (
              <BlogCard
                key={itemData.id}
                path={"Blog"}
                itemData={itemData}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    margin: 20,
    fontWeight: "bold",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  carousel: {},
  list: {},
});
