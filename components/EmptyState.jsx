import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ConstantString from "./../constant/ConstantString";
import Colors from "../constant/Colors";
import { useRouter } from "expo-router";

export default function EmptyState() {
  const router = useRouter();
  return (
    <View style={{ display: "flex", alignItems: "center", marginTop: 80 }}>
      <Image
        source={require("./../assets/images/medicine.png")}
        style={{ width: 120, height: 120 }}
      />
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        {ConstantString.NoMedication}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: Colors.DARK_GRAY,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {ConstantString.MedicationSubText}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 10,
          width: "100%",
          textAlign: "center",
          marginTop: 30,
        }}
        onPress={() => {router.push("/add-new-medication")}}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>
          {ConstantString.AddNewMedicationBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
