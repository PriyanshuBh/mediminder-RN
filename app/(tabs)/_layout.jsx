
import React, { useEffect } from "react";
import { Tabs, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getLocalStorage } from "../../service/Storage";

export default function TabLayout() {
  const router = useRouter();
  useEffect(()=>{
    GetUserDetail();
  },[])
  const GetUserDetail =async () =>{ 
    const userInfo = await getLocalStorage("userDetail");
    if(!userInfo) {
      router.replace("/login");
    }
  }
 
 
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={24} color={color} />
          ),
        }}
        name="History"
      />
      <Tabs.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
      />
    </Tabs>
  );
}
