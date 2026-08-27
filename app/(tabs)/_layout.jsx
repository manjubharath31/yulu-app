import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: 'black',//Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor: "#222",
        tabBarInactiveTintColor: "#888",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingTop: 8,
          paddingBottom: insets.bottom,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 0,
        },
        // tabBarIconStyle: {
        //   marginBottom: 0,
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="money"
        options={{
          title: "Money",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet-outline" size={22} color={color} />
          ),
        }}
      />
      {/* 
      <Tabs.Screen
        name="earn"
        options={{
          title: "Earn",
          tabBarIcon: ({ color }) => (
            <Ionicons name="trending-up-outline" size={22} color={color} />
          ),
        }}
      /> */}

      <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          tabBarIcon: ({ color }) => (
            <Ionicons name="help-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarBadge: "",
          tabBarBadgeStyle: {
            minWidth: 7,
            width: 7,
            height: 7,
            borderRadius: 4,
            backgroundColor: "#d83b20",
            top: 5,
            right: 0,
            left: 20,
          },

          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
