import React from "react"
import {TouchableOpacity } from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

// pages
import Home from "./pages/Home"
import Detail from "./pages/Detail"

//icons
import {Feather} from "@expo/vector-icons"

const Stack = createNativeStackNavigator()

function Routes(){
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Detail"
                    component={Detail}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Feather
                                    name="shopping-cart"
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Routes