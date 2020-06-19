import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'; 


import Home from '../Screens/Home'
import Details from '../Screens/Details'
import About from '../Screens/About'
import ScreenA from '../Screens/ScreenA';
import ScreenB from '../Screens/ScreenB';
import { Platform } from 'react-native';

const Stack = createStackNavigator()

const MainStackNavigation =() => {
return (   <Stack.Navigator
    mode = "modal"
    screenOptions={{
       headerStyle: {
         backgroundColor: '#27a6bc',
       },
       headerTintColor: '#ffff',

       headerTitleStyle: {
 
         fontFamily : 'josef-bold'
       },}}
    >
        <Stack.Screen name='Home' component={Home} options={{title : 'Home Screen'}} />
        <Stack.Screen name='Detail' component={Details} options={{title : 'Detail Screen'}} />
        
    </Stack.Navigator>
)}


const SecondStackNavigation = () => {
return (
    <Stack.Navigator
    mode = "modal"
         screenOptions={{
            headerStyle: {
              backgroundColor: '#27a6bc',
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },}}
  >
 <Stack.Screen name='About' component={About} options={{title : 'About Screen'}} />      
 <Stack.Screen name='ScreenA' component={ScreenA} options={{title : 'Screen A'}} />      

    </Stack.Navigator>
)
}


const ScreenBStackNavigation = () => {
return (    <Stack.Navigator
    mode = "modal"
         screenOptions={{
            headerStyle: {
              backgroundColor: '#27a6bc',
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },}}
  >
 
 <Stack.Screen name='ScreenB' component={ScreenB} options={{title : 'Screen B'}} />      

    </Stack.Navigator>
)
}



const AndroidNav = () => {
    let Tab = createMaterialBottomTabNavigator()
  
    return (
     <Tab.Navigator
     initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#c6c6c6"
    
    barStyle={{ backgroundColor: '#27a6bc'  }}
     >
        <Tab.Screen name="Home" component={MainStackNavigation} 
            options={{
              barStyle : {backgroundColor : '#76adc9'},
  
              tabBarLabel: 'Home Screen',
            
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="apps" color={color} size={26} />
              ),
            }}
        />
        <Tab.Screen name="About" component={SecondStackNavigation}
            options={{
              tabBarLabel: 'About',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="info-outline" color={color} size={26} />
              )
            }}
        />
      </Tab.Navigator>
    )
  }
  
  const IosNav = () => {
    let Tab = createBottomTabNavigator();
    return(
  
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
       let iconName;
       if (route.name === 'Home') {
          iconName = focused
          ? 'apps'
          : 'apps';
        } else if (route.name === 'About') {
          iconName = focused
          ? 'info-outline'
          : 'info-outline';
        }
  
   return <MaterialIcons name={iconName} size={size} color={color}     />;
     },
  
  })}
  tabBarOptions={{
  labelStyle : { fontFamily : 'josef-bold'},
    activeTintColor: '#27a6bc',
  inactiveTintColor: 'gray',
  
  }}
    >
      <Tab.Screen name="Home" component={MainStackNavigation} />
      <Tab.Screen name="About" component={SecondStackNavigation} />
    </Tab.Navigator>
  
  
    )
  }
  
    function BottomNavigator() {
      return (
          Platform.OS == 'android' ? <AndroidNav /> : <IosNav />
  
      );
    }

    const Drawer = createDrawerNavigator();

    function DrawerNavigation() {
       return (
         <NavigationContainer>
           <Drawer.Navigator initialRouteName="Home"
           drawerStyle={{
                 backgroundColor : 'white'  
           }}
           drawerContentOptions={{
             activeTintColor: '#27a6bc',
             itemStyle: { marginVertical: 5 },
             labelStyle : {fontFamily : 'josef-bold' , fontSize : 18}
           }}
           >
             <Drawer.Screen name="Home" component={BottomNavigator} options={{title : 'Home'}} />
             <Drawer.Screen name="ScreenB" component={ScreenBStackNavigation} options={{title : 'Screen B'}} />
           </Drawer.Navigator>
         </NavigationContainer>
       );
     }
   
   
     export default DrawerNavigation
