import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

import MainPage from './Pages/Main/Index'

export default  function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor:"#f2f3f5",
                }
            }}>
                <Screen name="Main" component={MainPage}/>
                
            </Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
    )
}