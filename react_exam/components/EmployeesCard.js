import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  LogBox,
} from "react-native";
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';


const { width, height } = Dimensions.get("window");

const EmployeesCard = ({ item, data }) => {

  return (
    <View style={styles.cardView}>
        <View style={styles.columnContainer}>
            <Text style={styles.paragraph}>Name: {item.name}</Text>
            <Text style={styles.paragraph}>Email: {item.email}</Text>
            <Text style={styles.paragraph}>Username: {item.username}</Text>
            <Text style={styles.paragraph}>Phone number: {item.phone}</Text>
            

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
   cardView: {
    padding: 10,
    overflow: "hidden",
    height: 100,
    marginTop: 10,

  },
  paragraph: {
    marginLeft: width * 0.02,
    marginRight: width * 0.02,
    color: "#000",
    fontSize: 14,
  }
});

export default EmployeesCard;
