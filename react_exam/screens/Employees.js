import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';

import EmployeesCard from "../components/EmployeesCard";


const Employees = ({navigation, route}) =>{
    const [employees, setEmployees] = useState([]);
    const [arr, setArr] = useState([])

    useEffect(() =>{  
        getEmployees();

    }, []);


    function getEmployees() {
      axios
          .get(`https://jsonplaceholder.typicode.com/users`, {
              headers:{
                "Content-Type": "application/json",
              },
          }).then(function(response){ 
              // Storing images to data array 
                  setEmployees(response.data);
                  let data = [];
                  for (var i = 0; i < response.data.length; i++) {
                    data.push(response.data[i])
                  }

                  setArr(data)


          }).catch(function(error){
              console.log(error)
          })
    }

    console.log(arr)

    return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={arr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    name: item.name,
                    addressStreet: item.address.street,
                    addressSuite: item.address.suite,
                    addressCity: item.address.city,
                    companyName: item.company.name,
                    companyCP: item.company.catchPhrase,
                    companyBS: item.company.bs,                    
                  })
                }
              >
                <EmployeesCard item={item}/>
              </TouchableOpacity>
            );
          }}
        />
      </View>

    </SafeAreaView>
           
    )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


});




export default Employees;