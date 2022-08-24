import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Employees from './screens/Employees';
import Details from './screens/Details';


const Stack = createStackNavigator();

 const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Employees">
        <Stack.Screen
          name="Employees"
          component={Employees}
          options={{
            title: 'Employee`s List', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Employee`s Details', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
     
   );
 };
 
 export default App;
 