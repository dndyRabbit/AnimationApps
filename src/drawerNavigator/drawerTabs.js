import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, About } from '../screens'

const Drawer = createDrawerNavigator();

const Tabs = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}

export default Tabs
