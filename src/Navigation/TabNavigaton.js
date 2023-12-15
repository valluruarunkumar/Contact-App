import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import { ContactsStack } from '../Screens/StackNavigatorContainer/StackNavigatorContainer';
import { NewContactStack } from '../Screens/StackNavigatorContainer/StackNavigatorContainer';
import { MeStack } from '../Screens/StackNavigatorContainer/StackNavigatorContainer';




const Tab = createBottomTabNavigator();


export  const TabNavigation = () => {
    return (
        <Tab.Navigator
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

            <Tab.Screen name='Contacts' component={ContactsStack}/>
            <Tab.Screen name='New Contact' component={NewContactStack} />
            <Tab.Screen name='Me' component={MeStack} />

        </Tab.Navigator>
    )
}