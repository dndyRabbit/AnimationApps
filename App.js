import React from 'react'
import AppNavigation from './src/navigator/navigation'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}

export default App
