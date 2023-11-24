import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions, Image, Text, View } from 'react-native';
import DashBoard from '../screens/dashBoard';
import Graph from '../screens/graph';
import Calendar from '../screens/calendar';
import Profile from '../screens/profile';
import { Login } from '../screens/login';
const { width, height } = Dimensions.get("window")



export const BottomTabNavigator = () => {

    return (<View style={{
        width,
        height,
    }}>
        <Tab.Navigator screenOptions={{
            headerShown: false,
            // tabBarActiveTintColor: '#e91e63',
            tabBarStyle: {
                backgroundColor: 'white', height: hp('12%'),
                // position:'absolute',
                color: 'white',
                paddingHorizontal: 5,
                paddingVertical: hp('1%'),
                paddingBottom: hp('2%'),
                keyboardHidesTabBar: true,
                borderRadius: 20
                // unmountOnBlur:true,
                // unmountOnBlur: true
                // alignItems:'center',
                // position: 'absolute',
            }

        }}
            // keyboardHidesTabBar={'true'}

            initialRouteName={'DashBoard'}
        >
            <Tab.Screen name="Graph" component={Graph} options={{
                unmountOnBlur: true,
                tabBarShowLabel: false, tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <Ionicons name={'home'} size={25} color={focused ? '#4589FF' : "#D9D9D9"} style={{ marginBottom: 5 }} />
                    </View>

                ),
            }} />

            <Tab.Screen name="Dashboard" component={DashBoard} options={{
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <SimpleLineIcons name={'chart'} size={25} color={focused ? '#4589FF' : "#D9D9D9"} style={{ marginBottom: 5 }} />
                    </View>
                ),
            }} />
            <Tab.Screen name="Calendar" component={Calendar} options={{
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <Ionicons name={'bag'} size={25} color={focused ? '#4589FF' : "#D9D9D9"} style={{ marginBottom: 5 }} />
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <Ionicons name={'person'} size={25} color={focused ? '#4589FF' : "#D9D9D9"} style={{ marginBottom: 5 }} />
                    </View>
                ),
            }} />
        </Tab.Navigator></View>
    );
}

