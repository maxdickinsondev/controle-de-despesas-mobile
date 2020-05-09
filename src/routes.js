import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Expenses from './pages/Expenses';
import Paidoff from './pages/Paidoff';

const Tab = createMaterialTopTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Expenses" component={Expenses} />
                <Tab.Screen name="Paidoff" component={Paidoff} />
            </Tab.Navigator>
        </NavigationContainer>
    ); 
}