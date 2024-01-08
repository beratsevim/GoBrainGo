import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import AuthStack from './screens/auth'
import { authStorageHelper } from './utils/storageHelper'
import ColorMatch from './games/ColorMatch'
import WorkingMemory from './games/WorkingMemory'
import MemoryMatrix from './games/MemoryMatrix'
import { AuthContext, AuthContextType } from './context/AuthContext'
import UserListScreen from './screens/auth/UserListScreen'
import AddUserScreen from './screens/auth/AddUserScreen'


const Stack = createNativeStackNavigator();


const Start = () => {

  const { isLogin, loading } = useContext(AuthContext) as AuthContextType

  return (<>
    {
      loading ? <View><Text>Loading</Text></View> :
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                // headerShown: false
              }}
            >
              {
                !isLogin ? <Stack.Screen
                  name='Auth'
                  component={AuthStack}
                /> : null
              }
              <Stack.Screen
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen
                name="ColorMatch"
                component={ColorMatch}
              />
              <Stack.Screen
                name="MemoryMatrix"
                component={MemoryMatrix}
              />
              <Stack.Screen
                name="WorkingMemory"
                component={WorkingMemory}
              />
              <Stack.Screen 
              name="UserListScreen" 
              component={UserListScreen} />
                     <Stack.Screen 
              name="AddUserScreen" 
              component={AddUserScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
    }
  </>
  )
}

export default Start