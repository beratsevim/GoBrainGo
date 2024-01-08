import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import Start from './src/Start'
import { UserProvider } from './src/context/UserContext'
import { UserListProvider } from './src/context/UserListContext'

const App = () => {
  return (<>
    <AuthProvider>
      <UserProvider>
    <UserListProvider>
        <Start />
      </UserListProvider>
      </UserProvider>
    </AuthProvider>
  </>
  )
}

export default App