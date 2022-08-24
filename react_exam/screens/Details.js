import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image
} from "react-native";


const Details = ({navigation, route}) =>{
  const addressStreet = route.params.addressStreet;
  const addressSuite = route.params.addressSuite;
  const addressCity = route.params.addressCity;

  const companyName = route.params.companyName;
  const companyCP = route.params.companyCP;
  const companyBS = route.params.companyBS;

  const name = route.params.name;

    return(
    <SafeAreaView style={{ flex: 1 }}>
            <Image
        style={{
          height: 120,
          width:120,
          marginTop:10,
          alignSelf: "center",
        }}
        source={require("../assets/profile.png")}
      />
      <View style={styles.container}>

        <Text style={styles.details}>Name: {name}</Text>
        <Text style={styles.details}>Street Address: {addressStreet}</Text>
        <Text style={styles.details}>Suite Address: {addressSuite}</Text>
        <Text style={styles.details}>City Address: {addressCity}</Text>
        <Text style={styles.details}>Company Name: {companyName}</Text>
        <Text style={styles.details}>Catch Phrase: {companyCP}</Text>
        <Text style={styles.details}>Signature: {companyBS}</Text>
      </View>

    </SafeAreaView>
           
    )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // paddingTop: Constants.statusBarHeight,
    padding: 8,
    alignContent:'center'
  },
  details:{
    fontSize:18
  }
});




export default Details;