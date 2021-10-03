import React, { useContext, useState, useEffect } from 'react'
import {Home, OnBoarding, About, Movies,Art, Food, Product, ProductDetails,MoviesDetails, Dinner, DinnerDetails, Login, Register} from '../screens'
import Tabs from '../drawerNavigator/drawerTabs'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import { enableScreens } from 'react-native-screens'

enableScreens();

const Stack = createSharedElementStackNavigator()

const AppNavigation = () => {

    return (
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name='OnBoarding' component={OnBoarding} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Home' component={Tabs} />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Movies' component={Movies} />
                <Stack.Screen name='Art' component={Art} />
                <Stack.Screen name='Food' component={Food} />
                <Stack.Screen name='Product' component={Product} />
                <Stack.Screen name='ProductDetails' component={ProductDetails} />   
                <Stack.Screen name='MoviesDetails' component={MoviesDetails} />   
                <Stack.Screen name='Dinner' component={Dinner} />  
                <Stack.Screen name='DinnerDetails' component={DinnerDetails} />  
            </Stack.Navigator>
    )
}

export default AppNavigation
