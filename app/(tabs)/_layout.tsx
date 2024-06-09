import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';
import { Images } from '../assets/images';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarHideOnKeyboard:true,
        headerShown: false,
        tabBarStyle:{
            height:70
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <Image source={focused ? Images.Ic_Menu:Images.Ic_Menu} style={{width:45,height:45,resizeMode:'contain'}} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Explore',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? Images.Ic_BSearch:Images.Ic_BSearch} style={{width:45,height:45,resizeMode:'contain'}} />
          ),
        }}
      />
      <Tabs.Screen
        name="calender"
        options={{
          title: 'Explore',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? Images.Ic_Calender:Images.Ic_Calender} style={{width:45,height:45,resizeMode:'contain'}} />
          ),
        }}
      />
      <Tabs.Screen
        name="mail"
        options={{
          title: 'Explore',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? Images.Ic_Mail:Images.Ic_Mail} style={{width:45,height:45,resizeMode:'contain'}} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Explore',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? Images.Ic_Profile:Images.Ic_Profile} style={{width:45,height:45,resizeMode:'contain'}} />
          ),
        }}
      />
    </Tabs>
  );
}
