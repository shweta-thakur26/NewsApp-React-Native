import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CardStyleInterpolators} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Screens/Home/Home';
import NewsDetail from '../Screens/Home/NewsDetail';
import Search from '../Screens/Search/Search';
import CategoryNews from '../Screens/CategoryNews/CatagoryNews';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

function CatagoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Search}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CategoryNews"
        component={CategoryNews}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          justifyContent: 'center',
          alignContent: 'center',
          paddingBottom: 10,
          paddingTop: 2,
          tabBarActiveTintColor: '#1079C2',
          tabBarInactiveTintColor: '#898989',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="CategoryStack"
        component={CatagoryStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" color={color} size={size} />
          ),
          tabBarLabel: 'Categories',
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
