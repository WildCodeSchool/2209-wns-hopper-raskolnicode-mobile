import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, FlatList, StyleSheet, Button, View, Text,Pressable } from "react-native";

export default function NbaTeam() {

  return (
    <>
    <Text style={styles.text}>Welcome Home</Text>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    height: 500,
  },
  card:{
    padding:20,
    margin:20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth: 1,
  },
  text:{
    textAlign:'center'
  }
});
