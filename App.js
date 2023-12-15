

import React, { Component } from "react";
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import Contacts from "./src/Screens/Contacts/Contacts.js";
import Header from "./src/Components/UserDetails/Header.js";
import Colors from "./src/Config/Colors.js";
import ContactDetails from "./src/Screens/DetailScreen/ContactDetails.js";
import NewContactStack from "./src/Screens/NewContact/NewContact.js";
import MeStack from "./src/Screens/Me/Me.js";
import  {ContactsStack} from "./src/Screens/StackNavigatorContainer/StackNavigatorContainer.js";
import { DrawerNavigator } from "./src/Navigation/DrawerNavigation.js";
// const Stack = createNativeStackNavigator();
// const Tab=createBottomTabNavigator(); 
const Drawer=createDrawerNavigator();







const App = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator  
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Contacts") {
            iconName = focused ? "contacts" : "contacts";
          } else if (route.name === "New Contact") {
            iconName = focused ? "adduser" : "adduser";
          } else if (route.name === "Me") {
            iconName = focused ? "user" : "user";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue", // Color of the active tab
        tabBarInactiveTintColor: "gray", // Color of inactive tabs
        tabBarStyle: {
          display: "flex", // To keep the same behavior as tabBarOptions
        },
      })}
      >



        
        <Tab.Screen name='Contacts' component={EntireContacts}
        />
        <Tab.Screen name='NewContactStack' component={NewContact}/>
        <Tab.Screen name='Me' component={Me}/>

      </Tab.Navigator> */}

        {/* <Drawer.Navigator initialRouteName="ContactsStack">
        <Drawer.Screen name="Contacts" component={ContactsStack} />
        <Drawer.Screen name="NewContactStack" component={NewContactStack} />
        <Drawer.Screen name="Me" component={MeStack} /> */}

        <DrawerNavigator />

    </NavigationContainer>

  );
}

export default App;



