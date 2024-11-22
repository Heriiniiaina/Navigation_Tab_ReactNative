import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native';
import { styles } from '@/constants/App.style';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Feather name={focused ? "search" : "search"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.addBtn}>

              <FontAwesome6 name={focused ? "add" : "add"} size={30} color={"#fff"} />
            </View>
          ),
        }}
      />
       <Tabs.Screen
        name="like"
        options={{
          title: 'Like',
          tabBarIcon: ({ color, focused }) => (
            

              <FontAwesome name={focused ? "heart" : "heart-o"} size={28} color={color} />
            
          ),
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? "user" : "user-o"} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
