import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { router } from 'expo-router';


const app = () => {

    function onLogin() {
        router.replace('/pages/signin')
    }
    
  return (
    <View>
        <TouchableOpacity onPress={onLogin}>
            <Text>Login</Text>
        </TouchableOpacity>
    </View>
  )
}

export default app;