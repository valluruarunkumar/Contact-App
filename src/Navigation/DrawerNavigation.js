import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactsStack } from "../Screens/StackNavigatorContainer/StackNavigatorContainer";
import { NewContactStack } from "../Screens/StackNavigatorContainer/StackNavigatorContainer";
import { MeStack } from "../Screens/StackNavigatorContainer/StackNavigatorContainer";
import { TabNavigation } from "./TabNavigaton";

const Drawer=createDrawerNavigator();


export const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigation} />
            <Drawer.Screen name="DrawerContacts" component={ContactsStack}/>
            <Drawer.Screen name="DrawerNewContactStack" component={NewContactStack}/>
            <Drawer.Screen name="DrawerMe" component={MeStack}/>
        </Drawer.Navigator>
    )
}