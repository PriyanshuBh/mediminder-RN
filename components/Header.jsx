import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getLocalStorage, RemoveLocalStorage } from "../service/Storage";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "./../constant/Colors";

export default function Header() {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    GetUserDetail();
  }, []);

  const GetUserDetail = async () => {
    const userInfo = await getLocalStorage("userDetail");
    // console.log(userInfo);
    setUser(userInfo);
  };
  return (
    <View style={{ width: "100%", marginTop: 20  }}>
      <View style={{ display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:1 }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Image
            source={require("./../assets/images/smiley.png")}
            style={{
              width: 45,
              height: 45,
            }}
          />
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Hello {user?.displayName} 👋
          </Text>
        </View>
        <TouchableOpacity onPress={()=>router.push('/add-new-medication')}>
        <Ionicons
          name="medkit-outline"
          size={24}
          color={Colors.PRIMARY}
          
        />
        </TouchableOpacity>
      </View>
    </View>
  );
}
