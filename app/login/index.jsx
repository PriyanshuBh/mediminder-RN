import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";
import { useRouter } from "expo-router";

 export default function LoginScreen() {
  const router = useRouter();
  return (
    <View>
      <View style={{ display: "flex", alignItems: "center", height: "100%", marginTop: 0 }}>
        <Image
          source={require("./../../assets/images/login.png")}
          style={styles?.image}
        />
      </View>
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "26%",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          zIndex:2,
          marginTop: 0,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: "white",
                textAlign: "center"
        }}>Stay on Track, Stay Healthy</Text>
        <Text style={{
          color: "white",
          textAlign: "center",
          fontSize: 14,
          marginTop:  20
        }}>
          Track your meds, take control of your health and live a healthier life.
        </Text>

        <TouchableOpacity style={styles?.button} onPress={()=> router.push("/login/signIn")}>
          <Text style={{
            color: Colors.PRIMARY,
            textAlign: "center",
            fontSize: 16
          }}>Continue</Text>
        </TouchableOpacity>
        <Text style={{color: "white", textAlign: "center", marginTop: 20 , fontSize: 12}}>
          Note: By Clicking Continue button, you agree to our Terms and Conditions.
        </Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: "74%",
    borderRadius: 24,
  },
  button:{
    padding:15,
    backgroundColor: "white",
    borderRadius: 99,
    marginTop: 25
  }
});
