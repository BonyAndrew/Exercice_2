import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import first from './screens/first';
import Second from './screens/second';
import third from './screens/third';
import like from './screens/like';
import notif from './screens/notif';
import DropdownMenu from './shared/dropdownMenu';

import bony from './assets/Bony.jpg'

const Stack = createStackNavigator();
const tab = createBottomTabNavigator();

export default function App() {
  return (
          <NavigationContainer>
             <tab.Navigator initialRouteName="Home"screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
              iconName = focused ? 'ios-home-outline' : 'ios-home-outline'; 
            } else if (route.name === 'like') {
              iconName = focused ? 'heart-outline' : 'heart-outline';
          }else if (route.name === 'second') {
            iconName = focused ? 'basket-outline' : 'basket-outline';
        }else if (route.name === 'info') {
          iconName = focused ? 'document-text-outline' : 'document-text-outline';
      }else if (route.name === 'notif') {
        iconName = focused ? 'notifications-outline' : 'notifications-outline';
    }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(58, 146, 55)',
        inactiveTintColor: 'gray', 
      }}>
                <tab.Screen name="Home" component={first} options={{tabBarStyle: { display: "none" }, headerShown: false,}}/>
                <tab.Screen name = "like" component={like} options={{tabBarStyle: { display: "none" },}} />
                <tab.Screen name = "second" component={Second} options={{title: ' ',headerLeft: () => (
                  <DropdownMenu />
                      ),headerRight: () => (
                        <Image
                          source={bony}
                          style={{ width: 40, height: 40, marginRight: 10, borderRadius: 20 }}
                        />
                      ),}} />
                <tab.Screen name = "info" component={third} options={{tabBarStyle: { display: "none" }, title:'',
                      headerBackImage: () => (
                        <Ionicons name="chevron-back" size={24} color="black" style={{marginLeft:10}} />
                      ),
                      headerRight: () => (
                       <View style={{display:'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}> 
                        <Ionicons name="share-outline" size={24} color="black" />
                         <Ionicons name="md-information-circle-outline" size={24} color="black" style={{margin:10}}/>
                       </View>
                      ),}} />
                <tab.Screen name = "notif" component={notif} options={{tabBarStyle: { display: "none" },}} />
             </tab.Navigator>
          </NavigationContainer>
  );
}
// title: 'bony',
// headerLeft: <Image source={fruit} style={{ width: 30, height: 30, marginLeft: 10 }} />,
// headerRight: <Image source={fruit} style={{ width: 30, height: 30, marginRight: 10 }} />,